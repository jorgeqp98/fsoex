import React from "react"

const Header = ({name}) => {
    return (
      <div>
        <h1>{name}</h1>
      </div>  
    )
  }
  

  const Content = ({parts}) => {
    console.log(parts)
    return ( 
      parts.map(parte => <p key={parte.id}> {parte.name}: {parte.exercises}</p>)
    )
  }


  const Total = ({course}) => {
    const exArray = course.parts.map(singleex => singleex.exercises)
    const totalEx = exArray.reduce((a,b) => a + b, 0)
  
    return (
      <div>
        <p><strong>Number of exercises: {totalEx}</strong></p>
      </div>
    )
  }
  
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course[0].name} />
        <Content parts={course[0].parts} />
        <Total course={course[0]} />
      </div>
    )
  }

  export default Course