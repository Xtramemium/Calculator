import "./CalcStyles.css"
import styles from "./MyCalculator.module.css"
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
            <button>DEL</button>
            <button>{arr[1]}</button>
            <button>{arr[2]}</button>
            <button>{arr[3]}</button>
            <button>{arr[4]}</button>
            <button>{arr[5]}</button>
            <button>{arr[6]}</button>
            <button>{arr[7]}</button>
            <button>{arr[8]}</button>
            <button>{arr[9]}</button>
            <button className={styles.ZeroButton}>{arr[0]}</button>

            <button>*</button>
            <button>/</button>
            <button>-</button>
            <button>=</button>
        </div>
    </div>
  );
}

export default App;
