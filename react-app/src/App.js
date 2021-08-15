import './App.css';
import React from "react"
import axios from "axios"

export default class App extends React.Component {
  async getData() {
    const res = await axios.get("http://localhost:7071/api/datetimes");
    return res.data.message
  }

  async getCatURL() {
    const res = await axios.get("https://aws.random.cat/meow");
    console.log(res.data)
    return res.data.file
  }
  
  constructor(...args) {
    super(...args); //for use 'this'
    this.state = {data: null};
  }

  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState( {data: await this.getData(), cat: await this.getCatURL() });

        } catch(e) {

        }
      })();
    }
  }


render() {
  const imgURL = this.state.cat;
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgURL} alt="cat" />
        <p>
          HackaLearn Korea_bumjin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Time : {this.state.data}
        </a>
      </header>
    </div>
  );
}
}
