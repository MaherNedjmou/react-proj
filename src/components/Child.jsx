import React from 'react'

const Child = ({name, age}) => {
  return (
    <>
        <h2>Hello, {name}!</h2>
        <p>Your age is {age}</p>
    </>
  )
}

export default Child