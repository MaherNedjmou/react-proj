import { useState } from "react"

const MyFirstComp = () => {
    const [count, setCount] = useState(1)
    let [color, setColor] = useState('blue')
    let [isClicked, setIsClicked] = useState(false)
  return (
    <>
        <div>
            <h1>Using state in React</h1>
            <button
                onClick={() => setCount(count * 2)}
            >
                Click to increment
            </button>
            <p>{count}</p>
        </div>
        <div>
            <button
                onClick={() => setColor(color='green')}
            >
                Click to change color
            </button>
            <p
                style={{
                    color: color
                }}
            >
                My color will change
            </p>
        </div>
        <div>
            <button
                onClick={() => setIsClicked(!isClicked)}
            >
                Click to make smth awesome appear
            </button>
            {
                isClicked && <p>I APPEARED</p>
            }
        </div>
    </>

  )
}

export default MyFirstComp