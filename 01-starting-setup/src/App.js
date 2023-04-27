import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const firsCars = [
  { id: "1" , title: "Honda civic", price: 8700, date: new Date(2020, 5, 12) },
  { id: "2" ,title: "Mazda CX-5", price: 19000, date: new Date(2021, 6, 12) },
  { id: "3" ,title: "Toyota rav4", price: 5500, date: new Date(2022, 7, 12) },
  { id: "4" ,title: " CX-5", price: 89000, date: new Date(2021, 6, 12) },
  { id: "5" ,title: " rav4", price: 4500, date: new Date(2022, 9, 12) }
]



function App() {
  const [cars,setCars] = useState(firsCars)


  const addExpenseHandler = (expenses) => {
    console.log("IN APP.JS");

    setCars( (prev) => {
      return [expenses,...prev]
    })
  }




  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveExpense = {addExpenseHandler}/>
      <Expenses item = {cars} />
    </div>
  );
}

export default App;