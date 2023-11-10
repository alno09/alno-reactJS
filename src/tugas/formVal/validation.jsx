import React from "react";

const Input = ({Label, type, name, onChange}) => {
    return(
        <div>
            <label>
                {Label} :
            </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

export default class Validation extends React.Component {
    state = {
        email : '',
        password : '',
        errors : []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state

        let message = []

        if (email.length === 0 ) {
            message = [...message, 'Email harus diisi']
        }

        if (password.length === 0 ) {
            message = [...message, ' Password harus diisi']
        }

        if (message.length > 0) {
            this.setState({
                errors : message
            }, () => alert(this.state.errors))
        }
    }

    render() {
        const style = {
            width : '400px',
            margin : '100px auto 0',
            border : '1px solid black',
            padding : '10px'
        }

        return(
            <div style={style}>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Login Page</h4>
                        <Input type="email" name="email" Label="Email" 
                        onChange={value => this.setState({email: value})} />
                        <Input type="password" name="password" Label="Password" 
                        onChange={value => this.setState({password: value})} />
                        <br />
                        <button type="submit">Log in</button>
                    </form>
            </div>
        )
    }
}