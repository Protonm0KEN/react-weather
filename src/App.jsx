import { useEffect } from "react";
import { useSelector } from "react-redux";
import Days from "./components/Card/Days";
import Header from './components/Header'
import ThisDay from "./components/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo";


function App() {

  const { theme } = useSelector(state => state)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  })

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
}

export default App;
