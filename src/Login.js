import React, { Component } from "react";
import "./Login.css";
import HomePage from "./HomePage.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: [],
      toHomePage: false
    };
  }

  submitLogin = event => {
    event.preventDefault();
    let name = this.state.username;
    console.log(name);
    let pass = this.state.password;
    console.log(pass);
    if (name !== "Disha" || pass !== "disha123") {
      alert("Enter a valid username and password");
      this.setState({ toHomePage: false });
    } else this.setState({ toHomePage: true });

    // this.setState({ toDashboard: true });
    //this.props.history.push("/homePage");
  };

  changeHandler = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  render() {
    // if (this.state.toDashboard === true) {
    //   <Redirect to="/homePage" />;
    // }

    if (!this.state.toHomePage) {
      // console.log(!this.state.toHomePage);
      return (
        <div>
          {/* onSubmit={this.handleSubmit}  */}
          <center>
            <h1>WELCOME TO LOGIN PAGE</h1>
            <form className="formDiv">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Username</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.changeHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Password</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.changeHandler}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="Login" onClick={this.submitLogin}>
                Login
              </button>
            </form>
          </center>
          {/* <BrowserRouter>
          <Link to="/homePage">
            <button className="App" onClick={this.submitLogin}>
              Login
            </button>
          </Link>
          <Route path="/homePage" component={Home} exact />
        </BrowserRouter> */}
        </div>
      );
    } else if (this.state.toHomePage) {
      return <HomePage />;
    }
  }
}

export default Login;
