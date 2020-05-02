import React from 'react';
import axios from "axios";
import './LoginScreen.css';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Gebruikerscode: '',
      Wachtwoord: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event)
  {
    const { Gebruikerscode, Wachtwoord } = this.state;
    axios
      .post(
        "localhost:5000/Login",
        {
          User: {
            UsercodeId: Gebruikerscode,
            Password: Wachtwoord
          }
        },
        { withCredentials: true }
      )
        .then(response => {
          // if conditie met response als het true is dan redirect naar dashboard zie hieronder als voorbeeld:
          // if (response.data.logged_in) {
          //   this.props.handleSuccessfulAuth(response.data);
          //}  
        })
        .catch(error => {
          console.log("login error", error);
        });
      event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welkom terug!</h3>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-label-group">
                        <input type="tel" id="inputEmail" value={this.state.Gebruikerscode} onChange={this.handleChange} className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail">Gebruikerscode</label>
                      </div>
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" value={this.state.Wachtwoord} onChange={this.handleChange} className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Wachtwoord</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Wachtwoord onthouden</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                      <div className="text-center">
                        <a className="small" href="/#">Wachtwoord vergeten?</a></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default LoginScreen;
