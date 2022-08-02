import logo from "./logo.svg";
import "./App.css";
import { listen } from "./helpers/voiceHelpers";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = ["Background Noise", "Bubble tea", "Chat", "Corgi", "Espresso", "Potato"];
  const coolEmojis = ["📗📙📘", "🧋🧋🧋", "😸😼🙀", "🐕🐕🐕", "☕☕☕", "🥔🥔🥔"];
  const scoresExample = [
    0.021001867949962616, 0.004432023502886295, 0.015178892761468887,
    0.008038260042667389, 0.007986492477357388, 0.9433623552322388,
  ];

  const findBiggestIndex = (scores) => {
    const biggestValue = Math.max(...scores);
    const biggestIndex = scores.indexOf(biggestValue);

    return biggestIndex;
  };
  const options = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };
  const listenAction = (result) => {
    const scores = Array.from(result.scores); // probability of prediction for each class

    const index = findBiggestIndex(scores);
    index && setCurrentIndex(index);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super voice to emoji</h1>
      </header>
      <button onClick={() => listen(options, listenAction)}>Start listening</button>
      <section>{coolEmojis[currentIndex]}</section>
    </div>
  );
}

export default App;
