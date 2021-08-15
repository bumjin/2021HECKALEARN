import './App.css';
import React from "react"
import axios from "axios"

export default class App extends React.Component {
  async getCatURL() {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search?ref=morioh.com");
    console.log(res.data)
    return res.data[0].url;
  }
  
  constructor(...args) {
    super(...args); //for use 'this'
    this.state = {catURL: null};
  }

  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState( {catURL: await this.getCatURL() });

        } catch(e) {

        }
      })();
    }
  }


render() {
  const imgURL = this.state.catURL;
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
        </a>
      </header>
    </div>
  );
}
}
