import React from 'react'

const User = (props) => {
  return(
    <div>Name: {props.children} | age: {props.age}</div>
  )
}


export default User