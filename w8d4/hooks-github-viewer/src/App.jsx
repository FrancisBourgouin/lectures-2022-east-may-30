import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       githubData: null,
//       isSpyFound: false,
//     };

//     // this.fetchCommitsForRepo = this.fetchCommitsForRepo.bind(this);
//   }

//   fetchCommitsForRepo = function (owner, repo) {
//     const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

//     axios
//       .get(url)
//       .then((res) => this.setState({ ...this.state, githubData: res.data }))
//       .catch((err) => console.log(err));
//   };

//   componentDidMount() {
//     this;
//   }

//   findOrUnfindSpy = () => {
//     const reverseSpyStatus = !this.state.isSpyFound;
//     this.setState({ ...this.state, isSpyFound: reverseSpyStatus });
//   };

//   render() {
//     const { isSpyFound, githubData } = this.state;
//     return (
//       <div className="App">
//         {!isSpyFound && <Spy />}

//         <button onClick={this.findOrUnfindSpy}>FOUND A SPY!!!</button>
//         <button onClick={() => this.fetchCommitsForRepo("FrancisBourgouin", "iceberg")}>
//           FETCH COMMITS
//         </button>
//         <main>
//           <h1>List of commits for PROJECTNAME</h1>
//           {githubData && <CommitList githubData={githubData} />}
//         </main>
//       </div>
//     );
//   }
// }

function App(props) {
  const [githubData, setGithubData] = useState(null);
  const [isSpyFound, setIsSpyFound] = useState(false);

  const findOrUnfindSpy = () => setIsSpyFound(!isSpyFound);

  const fetchCommitsForRepo = function (owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => setGithubData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCommitsForRepo("FrancisBourgouin", "lectures-2022-east-may-30");
  }, []);

  return (
    <div className="App">
      {!isSpyFound && <Spy />}

      <button onClick={findOrUnfindSpy}>FOUND A SPY!!!</button>
      <button onClick={() => fetchCommitsForRepo("FrancisBourgouin", "iceberg")}>
        FETCH COMMITS
      </button>
      <main>
        <h1>List of commits for PROJECTNAME</h1>
        {githubData && <CommitList githubData={githubData} />}
      </main>
    </div>
  );
}

export default App;
