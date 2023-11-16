import React, { Component } from 'react';
import axios from 'axios';

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      filteredArticles: [],
      loading: true,
      error: null,
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.fetchNewsData();
  }

  fetchNewsData() {
    const apiKey = '07cafdeaeaa44bab83673574ca269b10';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          articles: response.data.articles,
          filteredArticles: response.data.articles,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
        this.setState({
          loading: false,
          error: error.message || 'Failed to fetch news data. Check your API key and network connection.',
        });
      });
  }

  handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    const filteredArticles = this.state.articles.filter(article => {
      const titleMatch = article.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = article.description && article.description.toLowerCase().includes(searchTerm);
  
      return titleMatch || descriptionMatch;
    });
  
    this.setState({
      searchTerm,
      filteredArticles,
    });
  };

  render() {
    const { filteredArticles, loading, error, searchTerm } = this.state;

    return (
      <div>
        <h1>Metropolitan News</h1>
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        <br />

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="card-container">
            {filteredArticles.map((article, index) => (
              <div key={index} className="card">
                <img src={article.urlToImage} alt={article.title} />
                <div className="card-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default NewsComponent;
