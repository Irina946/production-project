import { useState } from "react"
import * as styles from "./counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={styles.btn}>Increment</button>
        </div>
    )
}