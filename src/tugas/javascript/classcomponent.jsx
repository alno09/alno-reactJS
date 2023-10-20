import React from "react";

class ClassComponent extends React.Component {

    constructor(props) {
        super(props)

            this.state = {
                value : "Silahkan Belajar"
            }
    }

    render() {
        return(
            <div>
                <h1>Selamat datang di {this.props.tools}</h1>
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default ClassComponent