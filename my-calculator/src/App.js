import "./general-calc-styles.css"
import styles from "./my-calculator.module.css"
const arr = [0,1,2,3,4,5,6,7,8,9]
let displayNumber = 0

function currentNumber(number) {

}


function App() {
  return (
    <div className={styles.App}>
        <div className={styles.Container}>
            <div className={styles.Output}>
                <div className={styles.PreviousNumber}>previous number</div>
                <div className={styles.CurrentNumber}>{displayNumber}</div>
            </div>
            <button className={styles.ClearContent}>C</button>
            <button className={styles.DelButton}>DEL</button>
            <button className={styles.OperationButton}>/</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[1])}>{arr[1]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[2])}>{arr[2]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[3])}>{arr[3]}</button>
            <button className={styles.OperationButton}>*</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[4])}>{arr[4]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[5])}>{arr[5]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[6])}>{arr[6]}</button>
            <button className={styles.OperationButton}>+</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[7])}>{arr[7]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[8])}>{arr[8]}</button>
            <button className={styles.NumberButton} onClick={() => currentNumber(arr[9])}>{arr[9]}</button>
            <button className={styles.OperationButton}>-</button>
            <button className={styles.ZeroButton}>{arr[0]}</button>
            <button className={styles.CalculateButton}>=</button>
        </div>
    </div>
  );
}

export default App;
