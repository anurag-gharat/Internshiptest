import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import useJquery from 'react-use-jquery';

export default function Form() {

    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (query===''){
            alert("Enter a search!")
        }
        else{
            setRedirect(true)
        }
    }
    const $ = useJquery();
  
    useEffect(() => {
    if ($) {
      $('#tags').autocomplete({
        source: availableTags,
        classes: {
            "ui-autocomplete": "highlight"
          },
          autoFocus: true
      });;
    }
    }, [$]);
 
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
            <input className="form-control" type="text" name="query" value={query} onChange={handleChange} id="tags" />
            <button type="submit" className="btn btn-success mt-2 px-5 py-2 rounded"  >Search</button>
            
        </div>

        </form>
    )
}
}