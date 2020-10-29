import React from 'react'
import './TrackerMiddle.css'
import Transactions from './Transactions'

function TrackerMiddle(props) {
    return (
        <div className='tracker-middle'>
            <h1>Transactions</h1>
            <div className='searchbox'>
                {/* Searchbox */}
            </div>

            <div className='expense-buttons'>
                <form className='income-button'>
                    <input  placeholder='Enter Descriptive name' type='text' value={props.income.input} onChange={(e) => props.inputTextChange(e)}/>
                    <br/>
                    <input  placeholder='Enter Amount in USD' value={props.income.value} onChange={(e) => props.inputValueChange(e)}/>
                    <p className='income-btn-btn' onClick={(e) =>props.submitIncome(escape)}> Add Income</p>
                </form>
                <form className='expense-button'>
                    <input placeholder='Enter Descriptive name'/>
                    <br/>
                    <input placeholder='Enter Amount in USD'/>
                    <p className='expense-btn-btn'> Add Expense</p>
                </form>

            </div>
            <div className='transactions'>
                <Transactions/>
            </div>
        </div>
    )
}

export default TrackerMiddle
