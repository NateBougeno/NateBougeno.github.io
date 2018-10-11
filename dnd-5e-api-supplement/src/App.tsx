import * as React from 'react';
import './App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './routes/Login';
// import * as Cookies from 'es-cookie';


class App extends React.Component {

  render() {
    // const { loggedIn } = this.state;
    
    return(
      <div>
        <LoginPage/>
      </div>
    );
    
  }
}

export default App;
