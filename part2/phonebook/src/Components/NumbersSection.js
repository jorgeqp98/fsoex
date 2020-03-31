import React from "react"

const NumbersSection = ({propsForNumbers}) => {
  
    const [whatShow] = propsForNumbers
    
    return (
      <>
        <h2>Numbers</h2>
            <table>
              <tbody>
                  {whatShow.map(person => 
                    <tr key={person.name}>
                      <td>{person.name} :<hr/></td> 
                      <td>{person.number}<hr/></td> 
                    </tr> 
                  )}
                </tbody>
            </table>
      </>
    )
  }

  export default NumbersSection