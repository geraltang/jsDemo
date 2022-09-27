import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import { useState } from 'react';

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);//derive state from props

    // const onChangeTitleButtonClick =()=>{
    //     setTitle('Updated from Expenses');
    // };

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            {/* <button onClick={onChangeTitleButtonClick}>Change title</button> */}
        </div>
    );
}

export default ExpenseItem;