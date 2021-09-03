import React, { Component, Suspense } from "react";
// Styles
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css'

// routes
import routes from '../../../routes';

// header and footer
import Header from '../../Helpers/Header'
import Footer from '../../Helpers/Footer'
import Sidebar from '../../Helpers/Sidebar'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // if (localStorage.length > 0) {
    return (
      <section className="secMainSidebarGrid">
        <div className="sidebarMainWrap">
          <Sidebar />
        </div>
        <div className="rightContentWrap">
          <Header />
          {routes}
        </div>
      </section>
    );
    // } else {
    //   window.location.href = "/"
    // }
  }
}

export default Dashboard;
