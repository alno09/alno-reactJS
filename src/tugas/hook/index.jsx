import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BeritaKita = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const apiKey = '07cafdeaeaa44bab83673574ca269b10';
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
        setFilteredArticles(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
        setError('Failed to fetch news data. Check your API key and network connection.');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) || 
      (article.description && article.description.toLowerCase().includes(searchTerm))
    );

    setFilteredArticles(filteredArticles);
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light fs-2 text fw-bolder'>Berita Kita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />

      <Container>
      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Cari berita..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <br />
      <br />
      <br />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Row>
          {filteredArticles.map((article, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
                    Selengkapnya...
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
  );
};

export default BeritaKita;
