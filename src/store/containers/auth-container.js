import { connect } from "react-redux";

import { isLoggedIn, isFetching, getError } from "../selectors/auth-selectors";

import { signIn, signUp, signOut } from "../effects/auth-effect";

import Auth from "../../App/Auth/auth-component";

const mapDispatchToProps = { signIn, signUp, signOut };

const mapStateToProps = ({auth: state}) => {
  return {
    auth: {
      loggedIn: isLoggedIn(state),
      fetching: isFetching(state),
      error: getError(state)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);