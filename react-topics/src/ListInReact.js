import React from 'react'

const PersonList = ()=>{
  const persons =[
    {
      id : 1,
      name : 'syed',
      age : '24',
      skill : 'React'
    },
    {
      id : 2,
      name : 'rahul',
      age : '25',
      skill : 'HTML'
    },
    {
      id : 3,
      name : 'Raj',
      age : '28',
      skill : 'JAVA'
    },
    {
      id : 4,
      name : 'Nishant',
      age : '32',
      skill : 'Node'
    },
  ]
    const personList = persons.map((person) => 
    <Person person={person} key={person.id} />
    )
  return(
    <>
      {personList}
    </>
  )
}

function Person({person}){
  return(
    <div>
        <h2>I am {person.name},
     i am {person.age} and i know {person.skill}</h2>
    </div>
  )
}

export default PersonList