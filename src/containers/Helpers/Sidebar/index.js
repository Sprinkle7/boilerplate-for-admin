import React, { useState } from 'react'
import { Collapse, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { sidebarToggle } from '../../../actions/sidebarToggle';
import { redirectToPage } from '../../../Utilities/StaticFunctions';
import buttons from './totalButtons';
import './style.scss'

const Sidebar = (props) => {
    const { toggle, sidebarToggleFun, history } = props
    const [isOpen, setIsOpen] = useState(null);

    const toggleSubMenu = (item, key) => {
        setIsOpen(isOpen !== null ? null : key);
        if (item.subMenu === null) { redirectToPage(history, item.url) } else { sidebarToggleFun(false) }
    }

    return (
        <div className={`sidebarMainWrap ${toggle === true ? 'toggleSidebar' : ''}`}>
            <div className={`sidebar__main__wrap`}>
                {
                    !toggle ?
                        <div className='arrowBack'>
                            <Button onClick={() => { sidebarToggleFun(!toggle); }}><FontAwesomeIcon icon={faChevronLeft} /></Button>
                        </div> : null
                }
                <div className={`sidebar__item__list`}>
                    {
                        buttons.map((item, key) => {
                            return (
                                <div key={key}>
                                    <Button onClick={() => { toggleSubMenu(item, key) }}>
                                        <img src={item.imgUrl} alt='Driver' />
                                        {item.title}
                                    </Button>
                                    {
                                        item.subMenu !== null ?
                                            <Collapse isOpen={isOpen === key ? true : false}>
                                                {
                                                    item.subMenu.map((subItems, subKey) => {
                                                        return <Button className='sub__button__sidebar' onClick={() => { redirectToPage(history, subItems.url) }} key={subKey}>{subItems.title}</Button>
                                                    })
                                                }
                                            </Collapse>
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => { return { toggle: state.sidebarToggle.sidebarToggle.active } }

const mapDispatchToProps = (dispatch) => { return { sidebarToggleFun: (toggle) => dispatch(sidebarToggle(toggle)) } }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)