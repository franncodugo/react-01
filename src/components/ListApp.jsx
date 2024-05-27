import React from 'react'

const Items = ({name, checked}) => {
    return (
        <li>{name} 
        {checked ? ' ✔' : ' ❌' /* o prodria ser checked && ' ✔' y solo si es true muestra el simbolo si es falso no sale de la condiciòn*/}
        </li>
    )
}


export const ListApp = () => {
  return (
    <>
        <h1>Listado de temas del curso</h1>
        <ol>
            <Items name="Instalaciones necesarias" checked={true}></Items>
            <Items name="Uso de Vite" checked={true}></Items>
            <Items name="Componentes" checked={true}></Items>
            <Items name="Variables" checked={true}></Items>
            <Items name="Props" checked={true}></Items>
            <Items name="Eventos" checked={true}></Items>
            <Items name="useState" checked={true}></Items>
            <Items name="Redux" checked={false}></Items>
            <Items name="Custom Hooks" checked={false}></Items>
        </ol>
    </>
  )
}
