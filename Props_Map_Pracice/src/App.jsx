import "./App.css";
import PropReciever from "./component/PropReciever";
import Data from "./assets/Data";

function App() {
  const peoples = Data.map((people) => {
    return (
      <PropReciever
        name={people.title}
        rating={people.location}
        detail={people.description}
      />
    );
  });
  return <div>{peoples}</div>;
}

export default App;
