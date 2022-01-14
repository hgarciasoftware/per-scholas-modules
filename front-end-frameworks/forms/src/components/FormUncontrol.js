import React, { Component, createRef } from 'react';

class FormUncontrol extends Component {

    constructor() {
        super()

        this.userNameRef = createRef()  //   { current: null }
        this.passwordRef = createRef()
        this.emailRef = createRef()
    }

    handleSubmit = event => {
        event.preventDefault()

        let formData = {
            username: this.userNameRef.current.value,
            password: this.passwordRef.current.value,
            email: this.emailRef.current.value
        }

        console.log(this.userNameRef)

        console.log(formData)
    }

    render() {
        
        return (  
            <form onSubmit={this.handleSubmit} className='ucf'>

                <label htmlFor="username1">username:</label>
                <input 
                    id="username1"
                    ref={this.userNameRef}   //  { current: inputelement }
                />

                <label htmlFor="password1">password:</label>
                <input 
                    id="password1"
                    ref={this.passwordRef} 
                    type="password"
                />

                <label htmlFor="email1">email:</label>
                <input 
                    id="email1"
                    ref={this.emailRef}
                    type="email"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormUncontrol;



// ref={element => this.email = element}  