import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import HTTPService from '../api/HTTPService';

class WelcomePage extends Component {
    
    constructor(props){
        super(props)
        this.retrieveMessage = this.retrieveMessage.bind(this);
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this);
        this.state = {
            welcomeMessage: ''
        }
    }

    retrieveMessage = () => {
        HTTPService.executeCallHTTPService()
        .then(response => this.handleSuccesfulResponse(response));
    }

    handleSuccesfulResponse = (response) => {
        this.setState({welcomeMessage:response.data })

    }

   render(){
       return (
           <>
            <div>
          <Link to={'/todo'}>  Welcome {this.props.params.name} Manage ToDo here</Link>
            </div>

            <div>
                <button className='btn' onClick={this.retrieveMessage}>Click To Get Welcome Message</button>
            </div>

            <div className='container'>
                {this.state.welcomeMessage}
            </div>
           </>
       )
   }

}

export default WelcomePage;