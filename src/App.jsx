import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from "./views/screen/NewScreen"
import TabelProduk from "./views/components/TabelProduk"
function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"]
  // let arrBaru = ''
  // for (let i = 0; i < arr.length; i++) {
  //   arrBaru += arr[i] + ' '
  // }
  const renderArr = () =>{
     return arr.map(val => {
      return (
        <>
          <p>{val}</p>
          <NewScreen />
        </>
      )
    })
  }
  return (
    <div className="App">
      <h1 className="greencolor">Halo Dunia</h1>
      <h2 style={{ border: "1px solid red", height: "300px", color: "pink", marginTop: "30px" }}>Test Styling</h2>
      {/* {renderArr()} */}
      <TabelProduk/>
    </div>
  )
}

export default App;
