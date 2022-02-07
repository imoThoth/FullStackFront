import React, {Component, useState} from 'react';
import HTTPService from '../api/HTTPService';
import AuthService from '../Auth/AuthService';

class ToDoApp extends Component{
   // const [userName, setUserName] = useState('');
   constructor(props){
       super(props)
       this.state ={
           todo: [
            //    {id: 1, description: 'Learn React' },
            //    {id: 2, description: 'Learn Java'},
            //    {id: 3, description: 'Learn CSS'},
            //    {id: 4, description: 'Learn SQL'},
            //    {id: 5, description: 'Learn Deployment'}
            ],
            message: ''
       }
       this.deleteToDoClicked = this.deleteToDoClicked.bind(this);
       this.updateToDoClicked = this.updateToDoClicked.bind(this);
       this.refreshTodo = this.refreshTodo.bind(this);
       this.addTodoClicked = this.addTodoClicked.bind(this);

   }

   //set the data coming from state with component did mount
   componentDidMount(){
        this.refreshTodo()
   }

   refreshTodo(){
        let userName = AuthService.getLoggedInUser()
        HTTPService.getAllTodo(userName).then(
            response =>  this.setState({todo: response.data})
        )
   }

   deleteToDoClicked(id){
       let userName = AuthService.getLoggedInUser();
       HTTPService.deleteToDo(userName, id).then( response => {
           this.setState({message: `Delete of todo ${id} has been successful`})
           this.refreshTodo();
       })
   }

   addTodoClicked(){
    this.props.navigate(`/todo/-1`);
   }
     
  updateToDoClicked(id){
      console.log("update " + id);
      this.props.navigate(`/todo/${id}`);

    //   let userName = AuthService.getLoggedInUser();
    //    HTTPService.deleteToDo(userName, id).then( response => {
    //        this.setState({message: `Delete of todo ${id} has been successful`})
    //        this.refreshTodo();
    //    })
   }

    render(){

        return(
             <div>
                ToDo Application
                <h1>List ToDo</h1>
                <div>{this.state.message}</div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>delete</th>
                            <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map ( (todo) => 
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <button onClick={() => this.deleteToDoClicked(todo.id)}>Delete</button>
                                <button onClick={() => this.updateToDoClicked(todo.id)}>Update</button>
                            </tr>
                            )
                       
                        }
                        
                    </tbody>
                    <div>
                        <button onClick={this.addTodoClicked}>Add </button>
                    </div>
                </table>
            </div>
        )
       
    }
}

export default ToDoApp;
