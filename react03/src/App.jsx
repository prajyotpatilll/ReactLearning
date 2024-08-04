import "./App.css";
import Card from "./componants/card";


function App() {
  let obj = {
    user : "prajyot",
    age : 20
  };

  let arr = [1,2,3,4,5];
  return (
    <>
      <Card array={arr}/>
      <Card Username="prajyot2"/>
      <Card Username="prajyot3"/>
      <Card Username="prajyot4" user={obj}/>
    </>
  );
}

export default App;
