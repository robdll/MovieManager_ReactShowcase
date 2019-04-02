/* React imports */
import React from "react";
import PropTypes from "prop-types";

/** Children components */
import Search from "./Search/search-component";

/** Reusable components */
// TODO find a way to use path from src. see:  https://stackoverflow.com/questions/44063592/react-import-root-path-helper
import Logo from "../components/Logo/logo-component";

/* Style */
import "./app.module.scss";

// import Category from "../components/Category/category-component";

/* Component implementation */
const App = () => (
  <>
    <header>
      <Logo />
      <img
        alt={`User icon`}
        src={`${process.env.PUBLIC_URL}/svg/user_icon.svg`}
      />
    </header>

    <main>
      <Search />
      {/*
      <Category type={`asd`}> />
      <Category type={`asd`} /> 
      */}
    </main>

    <footer>
      {" "}
      <Logo />{" "}
    </footer>
  </>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
