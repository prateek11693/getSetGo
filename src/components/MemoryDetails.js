import React, { Component } from "react";
import axios from "axios";
import Albums from "./Albums";

const url = "http://localhost:9000/memories";

class MemoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: "",
    };
  }

  render() {
    var { memories } = this.state;
    return (
      <div className="memory_image">
        <span
          style={{
            background: `url('/images/covers/${memories.cover_details}.JPG')`,
          }}
        ></span>
        <h2>Memories of {memories.year}</h2>
        <Albums memorylist={memories.albums} />
      </div>
    );
  }

  async componentDidMount() {
    const response = await axios.get(`${url}/${this.props.match.params.id}`);

    this.setState({ memories: response.data });
  }
}

export default MemoryDetails;
