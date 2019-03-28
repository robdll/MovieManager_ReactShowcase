import { connect } from "react-redux";
import {
  fetchContributors,
  getContributors,
  contributorsLoaded
} from "./about-module";

import About from "./about-component";

const mapDispatchToProps = {
  fetchContributors
};

const mapStateToProps = state => {
  return {
    contributors: getContributors(state),
    loaded: contributorsLoaded(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
