const countAndSendInfo = (action) => {
  console.log("counting the money");
  const money = 5;

  action(money);
};

const secretPlaceOfDestiny = () => {
  const listOfPackages = [];

  const sendSecretPackageUp = (package) => listOfPackages.push(package);

  countAndSendInfo(sendSecretPackageUp);
  console.log(listOfPackages);

  countAndSendInfo(sendSecretPackageUp);
  console.log(listOfPackages);

  countAndSendInfo(sendSecretPackageUp);
  console.log(listOfPackages);

  countAndSendInfo(sendSecretPackageUp);
  console.log(listOfPackages);

  countAndSendInfo(sendSecretPackageUp);
  console.log(listOfPackages);
};

secretPlaceOfDestiny();

function TweetForm(props) {
  props.createTweet("WIGGLE");
}

function App() {
  const [tweets, setTweets] = useState([]);

  const createTweet = (text) => setTweets([...tweets, text]);

  return <TweetForm createTweet={createTweet} />;
}
