/* React imports */
import React from "react";

/** Children components */
import Search from "./Search/search-component";

/** Reusable components */
// TODO find a way to use path from src. see:  https://stackoverflow.com/questions/44063592/react-import-root-path-helper
import Logo from "../components/Logo/logo-component";
import Category from "../components/Category/category-component";

/* Style */
import style from "./app.module.scss";

/* Component implementation */
const App = (props) => {
  
  const searchActions = {
    addToSeen: props.addToSeen,
    addToWatch: props.addToWatch,
    searchMovies: props.searchMovies,
    clearSearch: props.searchClear
  }

  const search = <Search status={props.search} actions={searchActions}/>

  const categoryActions = {
    addToSeen: props.addToSeen,
    addToWatch: props.addToWatch,
    movieSelection: props.movieSelection,
    movieSelectionClear: props.movieSelectionClear
  }

  let toWatchCategories, seenCategories;
  const spacer = <span className={style.spacer}></span>;

  if(props.category.watchList.length) {
    const status = {
      name: `da vedere`,
      list: props.category.watchList,
      selection: props.category.selection
    }
    toWatchCategories = <Category status={status} actions={categoryActions} />;
  }

  if(props.category.seenList.length) {
    const status={
      name: `visti`,
      list: props.category.seenList,
      selection: props.category.selection
    }
    seenCategories = <Category status={status} actions={categoryActions} />;
  }

  return (
    <>
      <div className={style.backImg} />

      <header className={style.header}>
        <Logo />
        <img className={style.headerImg} alt={`User icon`} src={`${process.env.PUBLIC_URL}/svg/user_icon.svg`} />
      </header>

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


// App.propTypes = {
//   isSearching: PropTypes.bool.isRequired,
//   suggestions: PropTypes.array.isRequired
// };


export default App;
