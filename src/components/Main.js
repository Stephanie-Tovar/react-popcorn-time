import "./Main.css"
import Movie from "./Movie"


function Main(props) {

    return (
        <div className="Main">

            {props.movies.map((movieObj) => {
                return (
                    <Movie movie={movieObj} delete={props.delete} />
                )
            })}

        </div>
    );
}

export default Main;