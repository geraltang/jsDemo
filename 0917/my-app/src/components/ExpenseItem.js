import './ExpenseItem.css';

function ExpenseItem(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleDateString('en-AU', { month: 'long' });
    const day = props.date.toLocaleDateString('en-AU', { day: '2-digit' });

    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year' >{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;