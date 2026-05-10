import './App.css'
import Child from './components/Child'

let list_of_ppl = [
  {name: "Sara", age: 28},
  {name: "Ali", age: 30}, 
  {name: "Hamza", age: 25},
  {name: "Hassan", age: 35}
];

function App() {

  return (
    <>
      <h1>Hello Everyone</h1>
      {
        list_of_ppl.map(
          (elem) => (
            <Child name={elem.name} age={elem.age}/>
          )
        )
      }
    </>
  )
}

export default App
