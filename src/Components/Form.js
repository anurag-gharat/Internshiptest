import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default function Form() {

    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (query===''){
            alert("Enter a search!")
        }
        else{
            setRedirect(true)
        }
    }

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    if (redirect) {
        return <Redirect to={{
          pathname: '/searchquery',
          state: { data:query}
        }} />
      } else {
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group pr-5 mt-2">
            <input className="form-control" type="text" name="query" value={query} onChange={handleChange} />
            <button type="submit" className="btn btn-success mt-2 px-5 py-2 rounded"  >Search</button>
            
        </div>
        </form>
    )
}
}