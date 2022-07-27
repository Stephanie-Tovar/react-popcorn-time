import "./Movie.css"

function Movie(props) {

    return (
        <div key={props.movie.id} className="movie">
            <h2>Title: {props.movie.title}</h2>
            <h3>Rating: {props.movie.rating}</h3>
            <h3>Year: {props.movie.year}</h3>
            {props.movie.imgURL && <img src={props.movie.imgURL} />} {/* Conditional Rendering - Option 2 */}
            {/* { movieObj.imgURL ? <img src={movieObj.imgURL} alt={movieObj.title} /> : <p>Sorry, no image</p>} */} {/* Conditional Rendering - Option 3 */}

            <button onClick={() => (props.delete(props.movie.id))}>Delete</button>
        </div>
    );
}

export default Movie;