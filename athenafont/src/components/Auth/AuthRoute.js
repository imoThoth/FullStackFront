import {Component} from 'react';
import AuthService from './AuthService';
import { Route, Navigate } from 'react-router-dom';


class AuthRoute extends Component{

        isUserLoggedIn(){
            if(AuthService.isUserLoggedIn())
            return (<Route {...this.props.children}/>)
        else {
           return (<Navigate to ="/login" />)
            }
       }
       

}

export default AuthRoute;

