import React from "react";

const MovieList = (props) =>{
        return (
          <>
           <div className="row">
         
            {
              props.movies.map((movie) =>(
    
                    <div className="col-lg-3 col-sm-6" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                       <img src={movie.imageUrl} className="img-fluid card-img-top" alt="Sample Movie" />
                       <div className="card-body">
                           <h5 className="card-title">
                             {movie.title}
                           </h5>
                           <p className="card-text">
                             {movie.year}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                               <button type="button" onClick={(event) =>props.delete(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                               <h2><span className="badge bg-secondary">{movie.rate}</span></h2>
                            </div>
                       </div>
                    </div>
                </div>
    
                ))
            }
            
           </div>
          </>
        )
    }

export default MovieList;
