import React from 'react'

const Genre = (props) => {
  return (
    props.genres.map((genre, index) => (
        <div className="col-lg-6 mb-4" key={index + genre}>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {genre}
                </div>
            </div>
        </div>
    ))
    
  )
}

export default Genre
