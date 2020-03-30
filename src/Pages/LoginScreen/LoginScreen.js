import React from 'react';
import './LoginScreen.css'



class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Gebruikerscode: '',
      Wachtwoord: '',
    };
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
                    <form>
                      <div className="form-label-group">
                        <input type="tel" id="inputEmail" value={this.props.Name} className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail">Gebruikerscode</label>
                      </div>
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Wachtwoord</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Wachtwoord onthouden</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" href="/Dashboard" type="submit">Sign in</button>
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
