import React from 'react'
import './Transactions.css'

function Transactions() {
    return (
        <div className='Transactions'>
            <div className='transaction-card'>
                <div className='trans-content-cont'>
                    <div className='trans-heading'>
                        <p className='trans-logo'>logo</p>
                        <div>
                            <h4>Netflix</h4>
                            <p>11/22/2020</p>
                        </div>
                        
                    </div>
                    <div className='trans-dollar'>
                        <h4>-22.34</h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Transactions
