import MyNavbar from './MyNavbar'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import info from './info.png';
import location from './location.PNG';

function App() {
const title = "Welcome to the new Gym";
const likes = 50;

  return ( 
    <div className="App">
      <MyNavbar />
      <div className="container my-3 p-3" id="banner">
        <h1 className="display-1" style={{textAlign: "center"}}><img id="img_logo" src={logo} width="150" height="150"></img>Fuego Gym</h1>
      </div>
      <div className="container border p-3 my-3" id="aboutUs" style={{color: "black", borderRadius: "50px"}}>
        <h2 className="display-3"><img src={info} alt="logo" id="icon" style={{width: "100px", borderRadius: "50px"}}/>About us</h2>
        <p>We are the #1 rated physiotherapy clininc in America!</p>
        <p><img src={location} alt="logo" id="icon" style={{width: "60px", borderRadius: "50px"}}/>We are located at 2121 Walton street in Los Angeles, California.</p>
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
