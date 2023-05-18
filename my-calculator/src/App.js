import "./general-calc-styles.css"
import styles from "./my-calculator.module.css"
const arr = [0,1,2,3,4,5,6,7,8,9]

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.Container}>
            <div className={styles.Output}>
                <div className={styles.PreviousNumber}>previous number</div>
                <div className={styles.CurrentNumber}>current number</div>
            </div>
            <button className={styles.ClearContent}>C</button>
            <button className={styles.DelButton}>DEL</button>
            <button className={styles.NumberButton}>{arr[1]}</button>
            <button className={styles.NumberButton}>{arr[2]}</button>
            <button className={styles.NumberButton}>{arr[3]}</button>
            <button className={styles.NumberButton}>{arr[4]}</button>
            <button className={styles.NumberButton}>{arr[5]}</button>
            <button className={styles.NumberButton}>{arr[6]}</button>
            <button className={styles.NumberButton}>{arr[7]}</button>
            <button className={styles.NumberButton}>{arr[8]}</button>
            <button className={styles.NumberButton}>{arr[9]}</button>
            <button className={styles.ZeroButton}>{arr[0]}</button>
            <button className={styles.CalculateButton}>/</button>
            <button className={styles.CalculateButton}>*</button>
            <button className={styles.CalculateButton}>-</button>
            <button className={styles.CalculateButton}>+</button>
            <button className={styles.CalculateButton}>=</button>
        </div>
    </div>
  );
}

export default App;
