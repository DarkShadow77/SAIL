import HeaderText from "./components/header_text"
import NewMovieList from "./components/new_movie_list"
import PopularMovieList from "./components/popular_movie_list"
function App() {

  return (
    <>
      <HeaderText text="Newly Added Movies"/>
      <NewMovieList/>
      <HeaderText text="Popular"/>
      <PopularMovieList/>
    </>
  )
}

export default App
