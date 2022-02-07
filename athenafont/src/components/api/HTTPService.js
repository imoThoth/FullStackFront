import axios from 'axios';

class HTTPService {

   config = {
    headers: {"Access-Control-Allow-Origin": "*"}
  }

    executeCallHTTPService(){
        console.log('HTTP Service has been executed');

      return axios.get('https://collosus-mountain-giant.herokuapp.com/user', this.config);
    }

    getAllTodo(name){
      return axios.get(`https://collosus-mountain-giant.herokuapp.com/${name}/todos/`, this.config)
    }

    getATodo(name, id){
      return axios.get(`https://collosus-mountain-giant.herokuapp.com/${name}/todos/${id}`, this.config)
    }

    deleteToDo(name, id){
      return axios.delete(`https://collosus-mountain-giant.herokuapp.com/${name}/todos/${id}`, this.config)
    }

    updateToDo(name, id, todo){
      return axios.put(`https://collosus-mountain-giant.herokuapp.com/${name}/todos/${id}`, todo)
    }

    postToDo(name, todo){
      return axios.post(`https://collosus-mountain-giant.herokuapp.com/users/${name}/todos`, todo)
    }
}

export default new HTTPService()