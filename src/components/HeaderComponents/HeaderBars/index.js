import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from "reactstrap";

const HeaderBars = (props) => {
    const { sidebarToggleState, sidebarToggleFun } = props
    return (
        <Button>
            <FontAwesomeIcon icon={faBars} onClick={() => { sidebarToggleFun(!sidebarToggleState) }} />
        </Button>
    )
}

export default HeaderBars;