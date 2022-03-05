import React from 'react'

const Card = ({movies: {Title, Year, Type, Poster}}) => {
  return (
    <>
         <div className="card">
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            <div className="details">
                <div className='d-flex'>
                    <span>{Type}</span>
                    <span>{Year}</span>
                </div>
                <h3>{Title}</h3>
            </div>
          </div>
      </>
  )
}
export default Card;