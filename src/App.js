import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">Student Management System</h1>
        <Switch>
          <Route path="/" exact component={StudentList} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/edit-student/:id" component={EditStudent} />
          <Route path="/delete-student/:id" component={DeleteStudent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
