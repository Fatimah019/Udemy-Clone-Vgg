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


  render(){
    
    return(
      <div className="body">
        <Header/>
        <NavBar/>  
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
    <div className="header">
      <marquee>Udemy Cloned site By Fatimah Davies</marquee>
    </div>
  );
}

function NavBar(){
  return(
    <div className="Nav-bar">
      <Link to="/" id="home-link">Udemy LOGO</Link>
      <input type="search"/>
      <Link to="/udemy-business" id="home-link">Udemy For Business</Link>
      <Link to="/teach-on-udemy" id="home-link">Teach On Udemy</Link>
      <i class="fa fa-cart">cart</i>
      <Link to="/studentLogin"><button>StudentLogin</button></Link>
      <Link to="/tutorLogin"><button>TutorLogin</button></Link>
    </div>
  );
}
function Home(){
  return(
    <div className="home-page">
      <div className="section-home">
        <h1>Learn on your schedule</h1>
        <p>Study any topic, anytime. Choose from thousands of expert-led courses now.</p>
        <input type="search"/>
      </div>
      <About/>
    </div>
  );
}
function About(){
  return(
    <div className="about">
      <div>ppp</div>
      <Major/>
    </div>
  );
}
function Major(){
  return(
    <div className="major">
      <p>major</p>
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
