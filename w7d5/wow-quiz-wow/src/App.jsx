import "./App.scss";
import { listOfQuestions } from "./data/questions";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";

import useQuiz from "./hooks/useQuiz";
import useAxios from "./hooks/useAxios";

function App() {
  const { question, currentScore, currentIndex, updateScoreAndIndex } =
    useQuiz(listOfQuestions);

  const owen = useAxios("https://owen-wilson-wow-api.herokuapp.com/wows/random");
  const owen2 = useAxios("https://owen-wilson-wow-api.herokuapp.com/wows/random");
  return (
    <div className="App">
      <Header />
      {owen.isLoading && <h1>LOADING</h1>}
      {!owen.isLoading && <h1>{owen.data[0].audio}</h1>}
      <button onClick={owen.fetchData}>REFETCH</button>
      <main>
        <h1>
          CURRENT SCORE: {currentScore} / {currentIndex}
        </h1>
        <QuestionForm {...question} onSubmit={updateScoreAndIndex} />
      </main>
    </div>
  );
}

export default App;
