import React from 'react';

import './bootstrap.min.css';
import './demo.css';
import './light-bootstrap-dashboard.css';

function Dashboard(){
    return (

        <div className="wrapper">
  <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
    <div className="sidebar-wrapper">
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text">
          Creative Tim
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item active">
          <a className="nav-link" href="dashboard.html">
            <i className="nc-icon nc-chart-pie-35" />
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./user.html">
            <i className="nc-icon nc-circle-09" />
            <p>User Profile</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./table.html">
            <i className="nc-icon nc-notes" />
            <p>Table List</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./typography.html">
            <i className="nc-icon nc-paper-2" />
            <p>Typography</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./icons.html">
            <i className="nc-icon nc-atom" />
            <p>Icons</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./maps.html">
            <i className="nc-icon nc-pin-3" />
            <p>Maps</p>
          </a>
        </li>
        <li>
          <a className="nav-link" href="./notifications.html">
            <i className="nc-icon nc-bell-55" />
            <p>Notifications</p>
          </a>
        </li>
        <li className="nav-item active active-pro">
          <a className="nav-link active" href="upgrade.html">
            <i className="nc-icon nc-alien-33" />
            <p>Upgrade to PRO</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="main-panel">
    <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#pablo"> Dashboard </a>
        <button href className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <i className="nc-icon nc-palette" />
                <span className="d-lg-none">Dashboard</span>
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="nc-icon nc-planet" />
                <span className="notification">5</span>
                <span className="d-lg-none">Notification</span>
              </a>
              <ul className="dropdown-menu">
                <a className="dropdown-item" href="#">Notification 1</a>
                <a className="dropdown-item" href="#">Notification 2</a>
                <a className="dropdown-item" href="#">Notification 3</a>
                <a className="dropdown-item" href="#">Notification 4</a>
                <a className="dropdown-item" href="#">Another notification</a>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nc-icon nc-zoom-split" />
                <span className="d-lg-block">&nbsp;Search</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#pablo">
                <span className="no-icon">Account</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="no-icon">Dropdown</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pablo">
                <span className="no-icon">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Email Statistics</h4>
                <p className="card-category">Last Campaign Performance</p>
              </div>
              <div className="card-body ">
                <div id="chartPreferences" className="ct-chart ct-perfect-fourth" />
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Open
                  <i className="fa fa-circle text-danger" /> Bounce
                  <i className="fa fa-circle text-warning" /> Unsubscribe
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Users Behavior</h4>
                <p className="card-category">24 Hours performance</p>
              </div>
              <div className="card-body ">
                <div id="chartHours" className="ct-chart" />
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Open
                  <i className="fa fa-circle text-danger" /> Click
                  <i className="fa fa-circle text-warning" /> Click Second Time
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">2017 Sales</h4>
                <p className="card-category">All products including Taxes</p>
              </div>
              <div className="card-body ">
                <div id="chartActivity" className="ct-chart" />
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S
                  <i className="fa fa-circle text-danger" /> BMW 5 Series
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card  card-tasks">
              <div className="card-header ">
                <h4 className="card-title">Tasks</h4>
                <p className="card-category">Backend development</p>
              </div>
              <div className="card-body ">
                <div className="table-full-width">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultChecked />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue disabled />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-link">
                            <i className="fa fa-edit" />
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-link">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container-fluid">
        <nav>
          <ul className="footer-menu">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Company
              </a>
            </li>
            <li>
              <a href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                Blog
              </a>
            </li>
          </ul> 
          <p className="copyright text-center">
            ©
            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
          </p>
        </nav>
      </div>
    </footer>
  </div>
</div>


    )
}

export default Dashboard;