import { useState } from "react";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/addMovie";

 


const App = ()=> {
  const movies = [{title:"The Mother", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_DLOcpfvaIFhwqcTq8ZAD4AvwOPkZiuzC_osXzBnhKqNBVun8jVRRG2zBrabVptJCXg&usqp=CAU", rate:"3"},
  {title:"The BFG", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEiuEjyjE1LURC5sy7tK5KGDhntBfUopXZmyFjPXHxjqa3H2JBgYjCWmZ0qGNc3Fzvqs&usqp=CAU", rate:5},
  {title:"The Unforgivable", picture: "https://images.mymovies.net/images/film/cin/500x377/fid21295.jpg", rate:4}]
   const[film, setFilm] = useState(movies) 


   //la fonction qu'on va créer mnt c celle qui va nous permettre de créer le nouveau movie

  const AddNewMovie = (newMovie)=>{
    setFilm([...film, newMovie])
  }

  return (
    <div>
      
      <MovieList video = {film} />
      <AddMovie AddNewMovie = {AddNewMovie} />
      
    </div>
  )
}

export default App;