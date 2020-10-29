import React,{useState} from 'react'
import TrackerLeft from './TrackerLeft'
import TrackerMiddle from './TrackerMiddle'
import TrackerRight from './TrackerRight'
import './Tracker.css'

function Tracker() {

     //setting a variable to track user Income Input, and User Income Value
  const [incomeInput, setIncomeInput] = useState({input:'', value:''});

  //setting a variable to track user Expense Input, and User Expense Value
  const [expenseInput, setExpenseInput] = useState({input:'', value:''});

  //array of current incomes
  const [incomeList,setIncomeList] = useState([])

    //handles the income name
  const handleIncomeInput = (e) => {
      e.preventDefault();
      setIncomeInput({input: e.target.value})
        
  }

  //handles income value
  const handleIncomeValueInput = (e) => {
     e.preventDefault();
     setIncomeInput({value:e.target.value})
      
  }

  //adds a new income to incomeList State
  const submitIncome = (e) => {
        e.preventDefault();
        setIncomeList([...incomeList, incomeInput])
        console.log(incomeList[0])
  }


    return (
        <div className='Tracker'>
            <div className='tracker-left'>
                <TrackerLeft/>
            </div>
            <div className='trakcer-middle'>
                <TrackerMiddle income={incomeInput} inputTextChange={handleIncomeInput} inputValueChange={handleIncomeValueInput} submitIncome={submitIncome} incomeList={incomeList}/>
            </div>
            <div className='tracker-right'>
                <TrackerRight />
            </div>
        </div>
    )
}

export default Tracker
