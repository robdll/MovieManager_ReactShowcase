/* React imports */
import React, { useEffect } from "react";

/** Children components */
import Search from "./Search/search-component";
import Auth from "../store/containers/auth-container";

/** Reusable components */
// TODO find a way to use path from src. see:  https://stackoverflow.com/questions/44063592/react-import-root-path-helper
import Logo from "../components/Logo/logo-component";
import Category from "../components/Category/category-component";

/* Style */
import style from "./app.module.scss";

/* Component implementation */
const App = (props) => {
  
  useEffect( () => {
      if (props.auth) {
        props.getAllMovies()
      }
    },
    [props.auth]
  );

  const searchActions = {
    addToLibrary: props.addToLibrary,
    searchMovies: props.searchMovies,
    clearSearch: props.searchClear
  }

  const navbar = <nav className={style.navbar}> <Logo /> <Auth /> </nav>;

  const search = props.auth && <Search status={props.search} actions={searchActions}/>

  const categoryActions = {
    addToLibrary: props.addToLibrary,
    movieSelection: props.movieSelection,
    movieSelectionClear: props.movieSelectionClear
  }

  let toWatchCategories, seenCategories;
  const spacer = <span className={style.spacer}></span>;
  if(props.category.userMovies.length) {
    const toWatch = {}
    toWatch.name = `da vedere`;
    toWatch.list = props.category.userMovies.filter( m => !m.watched);
    toWatch.selection =  props.category.selection;
    toWatchCategories = <Category status={toWatch} actions={categoryActions} />;
    const watched = {}
    watched.name = `da vedere`;
    watched.name = `visti`;
    watched.list = props.category.userMovies.filter( m => m.watched);
    seenCategories = <Category status={watched} actions={categoryActions} />;
  }


  return (
    <>
      <div className={style.backImg} />

      {/* 
        Following markup has been added t preload the movie card spacer.
        Removing this would result in a spinner displacement
      */}
      <img src={"./img/movie-spacer.png"} alt={''} />

      {navbar}

      {search}
      
      <main className={style.main}>
        {toWatchCategories}
        {seenCategories}
        {spacer}
      </main>

      <footer> <Logo /> </footer>
    </>
  );
}


export default App;
