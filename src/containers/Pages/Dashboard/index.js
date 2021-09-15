import React, { Component, Fragment } from "react";
// Styles
import 'bootstrap/dist/css/bootstrap.css';
// routes
import routes from '../../../routes';
// header and footer
import Header from '../../Helpers/Header'
import Sidebar from '../../Helpers/Sidebar'
import { connect } from 'react-redux'
import { CheckAndSaveLoggedInData } from "../../../actions/users";

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.props.CheckAndSaveLoggedInData();
  }


  render() {
    const { toggle, history } = this.props

    if (localStorage.length > 0) {
      return (
        <Fragment>
          <header>
            <Header />
          </header>
          <section className="secMainSidebarGrid">
            <Sidebar history={history} />
            <div className={`rightContentWrap ${toggle === true ? 'toggleLeftSide' : ''}`}>
              {routes}
            </div>
          </section>
        </Fragment>

      );
    } else {
      history.push('/')
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    toggle: state.sidebarToggle.sidebarToggle.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CheckAndSaveLoggedInData: () => dispatch(CheckAndSaveLoggedInData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
