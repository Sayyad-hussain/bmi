import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

  const [weight, setWeight] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [bmi, setBmi] = useState(' ')
  const [message, setMessage] = useState(' ')

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) 
    {
      alert('Please enter a valid weight and height')
    } else {
      let x = height / 100;
      console.log(height)
      let m = weight / x;
      let a = m/x ;
      let bmi = a;
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  return (
    <div className='main'>

      <div className="container">
      <h2 className='text'>BMI Calculator</h2>

      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (kg): </label>
          <input type="text" value={weight} onChange={(w) => setWeight(w.target.value)}  />
        </div>
        
        <div>
          <label>Height (cm):  </label>
          <input type="text" value = {height} onChange={(h) => setHeight(h.target.value)} />
        </div>

        <div>
          <button className='btn' type='submit' >Calculate</button>
          
        </div>
        

        <div className="pad">
          <h1>{`BMI :` + bmi}</h1>
          <center>
          <p><b>{message}</b></p>
          </center>
          
        </div>
        


      </form>

        
      </div>


     
     



    </div>
  );
}

export default App;