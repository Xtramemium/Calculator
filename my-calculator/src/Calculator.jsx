
import { useState } from 'react';

function App() {

    const [butArr, setButArr] = useState(["1", '2', '3', '4', '5', '6', '7', '8', '9'])

    const actions = ['+', '-', 'C', '=']

    const [operator, setOperator] = useState('')
    const [value, setValue] = useState('0')
    const [value1, setValue1] = useState('')
    const [finish, setFinish] = useState(false)

    const result = value + operator + value1

    const calculatePlus = () => {
        return  String(Number(value) + Number(value1))
    }

    const calculateMinus = () => {
        return  String(Number(value) - Number(value1))

    }


    const handleClick = (val) => {
        if (value === "0") {
            setValue(val)
        } else if (operator) {
            setValue1((prev) => {
                return prev + val
            })
        } else {
            setValue((prev) => prev + val)
        }
    }


    const handleOperation = (op) => {
        if (op === 'C') {
            setValue('0')
            setValue1('')
            setOperator('')
        } else if (op === '=') {
            if (operator === '+') {
                setValue(calculatePlus)
                setValue1('')
                setOperator('')
            }
            else if (op === '-') {
                setValue(calculateMinus)
                setValue1('')
                setOperator('')

            }
            setFinish(true)
        } else {
            setOperator(op)
        }

    }

    return (
        <div className='App' >
            <h1>{result}</h1>
            <ul className={'numButtons'}>
                {butArr.map((item, ind) => (
                    <button className={'numberButtons'} key={ind} onClick={() => handleClick(item)}  >
                        <div >
                            {item}
                        </div>
                    </button>))}
            </ul>
            <ul className={'caclButtons'}>
            {actions.map((act) => (
                <button className={'calculateButtons'} key={act} onClick={() => handleOperation(act)}  >
                    {act}
                </button>))}
            </ul>
        </div>
    );
}

export default App;
