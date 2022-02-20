import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Meter from "./components/Meter";

function App() {
  const [persentValue, setPersentValue] = useState(0);
  const getPersentValue = (evalue) => {
    setPersentValue(Math.trunc(evalue));
  };
  return (
    <div className="App">
      <Meter
        persent={persentValue > -1 ? persentValue : "Invalid Input"}
        rotateValue={`rotate(${
          persentValue > -1 ? -90 + persentValue * 1.8 : -90
        }deg)`}
      />
      <Form persentValue={getPersentValue} />
    </div>
  );
}

export default App;
