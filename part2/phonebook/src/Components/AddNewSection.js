import React from "react"

const AddNewSection = ({propsForAddNewSection}) => {
    var [
      newNumber, newName, handleChangeName, handleChangeNumber, handleAddNew
    ] = propsForAddNewSection
  
    return (
      <>
      <h2>Add new</h2>
        <form onSubmit={handleAddNew}>
          <table>
            <tbody>
              <tr>
                <td>name: </td>
                <td><input 
                  value={newName}
                  onChange={handleChangeName}
                /></td>
              </tr>
              <tr>
                <td>number: </td>
                <td><input 
                  value={newNumber}
                  onChange={handleChangeNumber} 
                /></td>
              </tr>
            </tbody>
          </table>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>  
      </>
    )
  }

  export default AddNewSection