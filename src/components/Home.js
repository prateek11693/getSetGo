import React, { Component } from "react";
import Banner from "./Banner";
import Memories from "./Memories";
import Footer from "./Footer";

const url = "http://localhost:9000/memories";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      memories: "",
    };
  }

  render() {
    return (
      <div>
        <center>
          <h1>GET SET GO.....</h1>
        </center>
        <Banner />
        <Memories memoriesData={this.state.memories} />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ memories: data }));
  }
}
export default Home;
