import React from "react"

const NumbersSection = ({propsForNumbers}) => {
  
    const [whatShow, handleDelete] = propsForNumbers
    
    return (
      <>
        <h2>Numbers</h2>
            <table>
              <tbody>
                  {whatShow.map(person => 
                    <tr key={person.id}>
                      <td>{person.name} :<hr/></td> 
                      <td>{person.number}<hr/></td> 
                      <td>
                        <button 
                          onClick={() => handleDelete(person.id)}>
                          Delete
                        </button>
                      </td> 
                    </tr> 
                  )}
                </tbody>
            </table>
      </>
    )
  }

  export default NumbersSection