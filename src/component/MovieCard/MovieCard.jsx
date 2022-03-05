import {useState, useEffect} from 'react'
import Card from './Card';
import './MovieCard.css';

const MovieCard = ({movieArr}) => {
  return (
    <>
         <div className="container movie-wrapper">
            <div className="row">
                {
                    movieArr?.length > 0 ? 
                    (
                       movieArr.map((movie)=>(
                            <Card key={movie.imdbID} movies={movie}/>
                        ))
                    ) :
                    (
                        <h3 className='error-title'>No Data Found.</h3>
                    )
                }
                
             </div>
        </div>
    </>
  )
}
export default MovieCard;