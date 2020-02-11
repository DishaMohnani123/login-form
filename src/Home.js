import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    //console.log(data.results[0]);
  }

  render() {
    return (
      <div className="home">
        <center>
          {/* <h1>Hello</h1>
          <h1>Hii</h1> */}
          {this.state.loading || !this.state.person ? (
            <div>loading...</div>
          ) : (
            <div className="content">
              <div>
                <b>{this.state.person.name.title}</b>
              </div>
              <div>
                <b>{this.state.person.name.first}</b>
              </div>
              <div>
                <b>{this.state.person.name.last}</b>
              </div>
              <img src={this.state.person.picture.large} />
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default Home;
