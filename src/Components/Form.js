import React from 'react'

export default function Form() {
    return (
        <form>
        <div className="form-group px-5">
            <input className="form-control" type="text" />
            <button type="submit" className="btn btn-success" >Search</button>
        </div>
        </form>
    )
}
