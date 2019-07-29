import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './componenets/layout/Navbar';
import Dashboard from './componenets/dashboard/Dashboard';
import ProjectDetails from './componenets/projects/ProjectDetails';
import SignIn from './componenets/auth/SignIn';
import SignUp from './componenets/auth/SignUp';
import CreateProject from './componenets/projects/CreateProject';
import addDoctors from './componenets/Doctor/addDoctors';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/singin" component={SignIn}></Route>
          <Route path="/singup" component={SignUp}></Route>
          <Route path="/createproject" component={CreateProject}></Route>
          <Route path="/createdoctor" component={addDoctors}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
