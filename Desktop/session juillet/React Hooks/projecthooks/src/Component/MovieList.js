import MovieCard from "./MovieCard";


const MovieList =({video})=> {
    return(
        <div>
            {video.map((el , index)=>{
                return <MovieCard item = {el} key = {index}/>
            })}
         
         
        </div>
    )
}

export default MovieList;