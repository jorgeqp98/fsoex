import React from "react"

const SearchSection = ({propsForSearch}) => {
  
    const [searching, handleChangeSearch] = propsForSearch
    
    return (
      <>
        <h2>Search</h2>
        <div>
            <input  
                value={searching} 
                onChange={handleChangeSearch}
        />
        </div>
      </>
    )
  }

  export default SearchSection