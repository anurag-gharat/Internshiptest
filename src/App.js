import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
import Navbar from './Components/Navbar' 
function App() {
  

  
  return (

 <Router>
<div className="App">
<Navbar />
      <Switch>
      <Route exact path="/" component={Home}   />

      <Route exact path="/searchquery" component={SearchResult}   />

      
    </Switch>
</div>
 </Router>


  );
}

export default App;
