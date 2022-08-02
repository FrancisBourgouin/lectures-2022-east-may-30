import axios from "axios";
import { Component } from "react";

import "./App.css";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githubData: null,
      isSpyFound: false,
    };

    // this.fetchCommitsForRepo = this.fetchCommitsForRepo.bind(this);
  }

  fetchCommitsForRepo = function (owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => this.setState({ ...this.state, githubData: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchCommitsForRepo("FrancisBourgouin", "iceberg");
  }

  findOrUnfindSpy = () => {
    const reverseSpyStatus = !this.state.isSpyFound;
    this.setState({ ...this.state, isSpyFound: reverseSpyStatus });
  };

  render() {
    const { isSpyFound, githubData } = this.state;
    return (
      <div className="App">
        {!isSpyFound && <Spy />}

        <button onClick={this.findOrUnfindSpy}>FOUND A SPY!!!</button>
        <button onClick={() => this.fetchCommitsForRepo("FrancisBourgouin", "iceberg")}>
          FETCH COMMITS
        </button>
        <main>
          <h1>List of commits for PROJECTNAME</h1>
          {githubData && <CommitList githubData={githubData} />}
        </main>
      </div>
    );
  }
}

export default App;
