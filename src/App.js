import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import Message from './components/Message';
import Navbar from './components/Navbar';
import AddTodo from './pages/AddTodo';
import Todos from './components/Todos';
import TodoItems from './components/TodoItems';
import Comments from './components/Comments';


import './styles/styles.css';

const App = () => {
  // login part
  
  const [users, setUsers] = useState([
    { email: 'admin@gmail.com', password: 'admin', isAdmin: true },
    { email: 'user@gamil.com', password: 'password', isAdmin: false },
  ]);

  const [message, setMessage] = useState(null);

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = ({ email, password }) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user && user.isAdmin) {
      setMessage({ text: 'Login successful', type: 'success' });
      setLoggedInUser(user);
      return true;
    } else {
      setMessage({ text: 'Invalid email or password', type: 'error' });
      return false;
    }
  };

  const handleSignUp = ({ email, password }) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      setMessage({ text: 'Email already exists', type: 'error' });
      return false;
    }
    setUsers([...users, { email, password, isAdmin: false }]);
    setMessage({ text: 'Sign up successful', type: 'success' });
    return true;
  };

  //todo part
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  }

  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="container">
            <button className="button-icon">
              MyCozyCampus
              <div className="small">
                By fastn
              </div>
            </button>
            <div className="menu-toggle">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              {!loggedInUser && <li><Link to="/login">Login</Link></li>}
              {!loggedInUser && <li><Link to="/signup">Sign Up</Link></li>}
              <li><Link to="/comments">com Up</Link></li>
              <li><Link to="/addtodo">Comments</Link></li>
              {loggedInUser && loggedInUser.isAdmin && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* <nav className="navbar">
          <div className="container">
            <button className="button-icon" >
              MyCozyCampus
              <div className="small">
                By fastn
              </div>
            </button>
            <div className="menu-toggle">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/comments">com Up</Link>
              </li>
              <li>
                <Link to="/addtodo">Comments</Link>
              </li>
              {loggedInUser && loggedInUser.isAdmin && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </div>
        </nav> */}

        <Switch>
          <Route path="/login">
            <LoginPage
              onLogin={handleLogin}
              users={users}
              setMessage={setMessage}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route path="/signup">
            <SignUpPage
              onSignUp={handleSignUp}
              setMessage={setMessage}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/admin">
            {loggedInUser && loggedInUser.isAdmin ? (
              <AdminPage users={users} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/addtodo" render={() => {
            return (
              <><AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/">
            <h1>Home Page</h1>
            {/* <Home/> if you create Home page*/}
          </Route>
        </Switch>

        {/* 
        <Message message={message} setMessage={setMessage} /> */}
      </div>
    </Router>
  );
};

export default App;
