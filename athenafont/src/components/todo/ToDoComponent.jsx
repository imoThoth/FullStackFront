import { ErrorMessage, Form, Formik } from 'formik';
import React, {Component} from 'react';
import HTTPService from '../api/HTTPService';
import AuthService from '../Auth/AuthService';

class ToDoComponent extends Component {

    constructor(props){
        super(props)
        this.state= {
            id: this.props.params.id, 
            description: ' '
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
       // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.state === -1){
            return
        }

        let userName = AuthService.getLoggedInUser();
        HTTPService.getATodo(userName, this.state.id)
        .then(response => this.setState({ description : response.data.description}))
        .catch(error => console.log("Cause of Error " + error));
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = "Enter a description";
        }else if(values.description.length < 5){
            errors.description = "Enter at least 5 characters"
        }
        return errors
    }

      onSubmit(values){
        let username = AuthService.getLoggedInUser();
        let todo = {
            id : this.state.id,
            description: values.description
        }

        if(this.state.id === -1){
            HTTPService.postToDo(username, todo).then( () => this.props.navigate(`/todo`))
        }else{
             HTTPService.updateToDo(username, this.state.id, todo).then( () => this.props.navigate(`/todo`))
        }

       
        console.log(values)
    }

    // handleClick = (e) => {
    //     e.preventDefault();
    //     this.setState({description: e.target.value});
    //     console.log(this.state.description);
    // }

    render(){
        let {description} = this.state;
       return(
           <div>
               <h1>ToDo Component for id - {this.state.id}</h1>
                <h3>ToDo</h3>          
                <div className='container'>
                    <Formik 
                    initialValues={{description}} 
                    onSubmit={this.onSubmit} 
                    validate={this.validate} 
                    validateOnChange={false} 
                    validateOnBlur={false}  
                    enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" />
                                    Description <input type='text'
                                     placeholder= {this.state.description} 
                                     name="description"
                                    onChange={(e) => this.setState({description: e.target.value})}
                                    />
                                    <button type='submit'>Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
           
           </div>
       ) 
    }
}

export default ToDoComponent