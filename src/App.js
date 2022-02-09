import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };
  
  async componentDidMount() {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(posts);
    this.setState({ posts });
  }
  
  handleOnchange = async (value) => {
    console.log('Recaptcha value', value);
    const response = {
      'recaptchaValue': value,
    }
    const data = await axios.post('http://localhost:3000/users/test-reCAPTCHA', response );
    console.log(data);
  }

  render() { 
    return (
      <React.Fragment>
        <div className="recaptcha">
          <ReCAPTCHA
                sitekey="6LeMzjMeAAAAAOzG-72l6DyPEiNrWd5ZgADvakBA"
                onChange={this.handleOnchange}
            />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
