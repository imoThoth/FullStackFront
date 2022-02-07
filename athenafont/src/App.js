import ToDoApp from './components/todo/ToDoApp';
import Login from './components/todo/LoginComponent';
import Logout from './components/todo/Logout';
import Welcome from './components/todo/Welcome';
import { Route } from 'react-router-dom';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import ErrorPage from './components/todo/ErrorPage';
import withNavigation from './components/todo/WithNavigation';
import { Header } from './components/todo/HeaderFooter';
import { Footer } from './components/todo/HeaderFooter';
import Navbar from './components/todo/navbar';
import './index.css';
import AuthRoute from './components/Auth/AuthRoute';
import WithParams from './components/todo/WithParams';
import ToDoComponent from './components/todo/ToDoComponent';


function App() {
  const LoginComponentWithNavigation = withNavigation(Login);
  const WelcomeComponentWithParams = WithParams(Welcome);
  const TodoComponentWithParamsAndNavigation = WithParams(withNavigation(ToDoComponent));
  const ToDoAppWithNavigation = withNavigation(ToDoApp);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<LoginComponentWithNavigation />} />
          <Route path ="/todo/:id" element={<TodoComponentWithParamsAndNavigation/>} />
          <Route path ="/todo" element={<ToDoAppWithNavigation />} />
          <Route path ="/welcome/:name" element={<WelcomeComponentWithParams />} />
          <Route path ="/logout" element={<Logout onclick/>} />
          <Route path= "*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
