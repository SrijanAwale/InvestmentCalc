import Header from "./components/Header";
import UserInput from "./components/UserInput";

const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
});

function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputIdentifier]: newValue,
    };
  });
}
function App() {
  return (
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
