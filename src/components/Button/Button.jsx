import React from 'react'

const Button = props =>{
  return (
    <button className={'button ' + props.className} {...props} />
  )
}
export default  Button
