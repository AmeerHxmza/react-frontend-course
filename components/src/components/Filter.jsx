import React from 'react'

const Filter = () => {

  const person = [
    {id:1, name:"John", active:true},
    {id:2, name:"Jane", active:false},
    {id:3, name:"Doe", active:true},
    {id:4, name:"Smith", active:false},
    {id:5, name:"Emily", active: true},
  ]

  return (
   <>
   {person.filter(p => !p.active).map(p => (
    <div key={p.id}>
      <h2>{p.name}</h2>
    </div>
   ))} 
   </>
  )
}

export default Filter