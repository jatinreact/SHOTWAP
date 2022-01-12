import React, { Fragment, Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const HOC = (Wcomponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>
          <div className="app-container-hoc main-margin">
            <Header {...this.props} />

            <Wcomponent {...this.props} />

            <Footer {...this.props} />
          </div>
        </Fragment>
      );
    }
  };
};

export default HOC;
