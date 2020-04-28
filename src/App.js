import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';


class App extends Component{

  /*constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }
  
  callAPI() {
    fetch("http://localhost:3000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }*/
  constructor(props){
    super(props);
    this.state={
      isSignedIn:false,
  }
}
getTutorContent(){
 if (this.state.isSignedIn){
  return <TutorLogin/>
 }
 else{
   return (
    <div>
      <p>You are not signed in</p>
    </div>
   );
 }
}

  render(){
    
    return(
      <div className="body">
        <Header/>
        <NavBar/>
        {this.getTutorContent()}  
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/studentLogin" component={StudentLogin}/>
          <Route path="/tutorLogin" component={TutorLogin}/>
        </Switch>
      
      </div>
  
    );
  };
  }

function Header(){
  return(
    <div>
      <h1>Udemy Cloned site</h1>
    </div>
  );
}
function NavBar(){
  return(
    <div className="Nav-bar">
      <Link to="/">Home</Link>
      <Link to="/studentLogin"><button>StudentLogin</button></Link>
      <Link to="/tutorLogin"><button>TutorLogin</button></Link>
    </div>
  );
}
function Home(){
  return(
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

function StudentLogin(){
  return (
    <div>
      <h3>student</h3>
    </div>
  );
}
function TutorLogin(){
  return (
    <div>
      <h3>tutor</h3>
    </div>
  );
}
export default App;
