import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses() {
    const expenses = [
        {
            date: new Date(2022, 9, 17),
            title: 'Car Insurance',
            amount: '$1500'
        },
        {
            date: new Date(2022, 9, 16),
            title: 'Toilet Paper',
            amount: '$1.5'
        },
        {
            date: new Date(2022, 9, 15),
            title: 'Dinner with friends',
            amount: '$80'
        },
        {
            date: new Date(2022, 9, 14),
            title: 'Myki',
            amount: '$50'
        }
    ];

    return (
        <div className="expenses">
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
            <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
        </div>
    );
}

export default Expenses;