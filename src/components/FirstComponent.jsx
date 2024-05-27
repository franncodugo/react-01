import React from 'react'
import PropTypes from 'prop-types'
import '../styles/FirstCompònent.css'

export const FirstComponent = ({title, subtitle}) => {
  console.log(title)
  console.log(subtitle)
  return (
    <>
      <h2>{ title }</h2>
      <h2>{ subtitle }</h2>
     
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstComponent.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Subtitle1'
}



// const string = "This is a text"
// const number = 123456
// const array = ['Course', 'Fran', 1, 100000]
// const boolean = true
// const funct = () => 1+1
// const obj = { nombre: 'franco', apellido: 'dv', age: 30 }
// const fecha = new Date()

 
  /*  <h2>{ string }</h2>
      <h2>{ number }</h2>
      <h2>{ array }</h2>
      <h2>{ boolean }</h2>
      <h2>{ funct() }</h2>
      <h2>{ JSON.stringify(obj) }</h2>
      <h2>{ JSON.stringify(fecha) }</h2> 
  */
