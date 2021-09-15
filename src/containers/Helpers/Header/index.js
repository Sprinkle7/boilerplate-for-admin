import React, { Fragment } from 'react'
import HeaderBars from '../../../components/HeaderComponents/HeaderBars'
import TopSearch from '../../../components/HeaderComponents/HeaderSearch'
import logoImage from '../../../assets/Logo@2x.png'
import { connect } from "react-redux";
import { sidebarToggle } from "../../../actions/sidebarToggle";
import './style.scss'

const Header = (props) => {
    const { sidebarToggleFun, sidebarToggleState } = props
    return (
        <Fragment>
            <div className='header__flex__main'>
                <div className='header__bars__main'>
                    <HeaderBars sidebarToggleFun={sidebarToggleFun} sidebarToggleState={sidebarToggleState} />
                    <img src={logoImage} alt='logo'/>
                </div>
                <div className='header__searchbar__main'>
                    <TopSearch />
                </div>
                <div className='header__username__notification'>3</div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        sidebarToggleFun: (toggle) => dispatch(sidebarToggle(toggle))
    }
}

const mapStateToProps = (state) => {
    return {
        sidebarToggleState: state.sidebarToggle.sidebarToggle.active
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)