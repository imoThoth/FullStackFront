import React, {Component} from 'react';
import AuthService from '../Auth/AuthService';

class LoginComponent extends Component{

      constructor(props){
            super(props)
            this.state = {
                username: '',
                password: '',
                hasLoginFailed: false,
                showSuccessMessage: false    
            }
            
            this.inputHandler = this.inputHandler.bind(this);
            this.loginClicked = this.loginClicked.bind(this);
        }

        inputHandler(event){
            this.setState({[event.target.name] : event.target.value});
        }

        loginClicked(){
            if(this.state.username && this.state.password){
                AuthService.registerSuccesfulLogin(this.state.username);
                this.props.navigate(`/welcome/${this.state.username}`);
                this.setState({showSuccessMessage: true})
            }else{
                 console.log("fail");
                this.setState({showSuccessMessage: false}) //redundant??
                this.setState({hasLoginFailed: true})
            }
           
        }

       
    render(){
         
        return (
                <main className='center'>
                    {this.state.hasLoginFailed && <h1>Invalid Credentials</h1>}
                    {this.state.showSuccessMessage && <h3>SUCCESS</h3>}
                    <h2>Username:</h2> <input type='text' name='username' value={this.state.username} onChange={this.inputHandler} />
                    <h2>Password:</h2> <input type='text' name='password' value={this.state.password} onChange={this.inputHandler}/>
                    <br/>
                    <button className='button-1' onClick={this.loginClicked}>Login</button>
                    <button className='button-1'>Register</button>
                    <br></br>
                </main>
        );
    
    }
}



export default LoginComponent;


















{/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
<ShowLoginMessage showSuccessMessage= {this.state.showSuccessMessage}/>
 function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return<h1>Invalid Credentials</h1>
    }  
    return null;  
}

function ShowLoginMessage(props){
    if(props.showSuccessMessage){
         return<h3>SUCCESS</h3>
    }
    return null;
} */}

  { //  this.userNameHandler = this.userNameHandler.bind(this); //bind method to the constructor?
        //     this.passwordHandler = this.passwordHandler.bind(this);
        // userNameHandler(event){
        //     this.setState({username: event.target.value}); //set username to traget value..event.target.name
        // }
        // passwordHandler(event){
        //     console.log(event.target.name);
        //     this.setState({password: event.target.value});
        // }
       }











     