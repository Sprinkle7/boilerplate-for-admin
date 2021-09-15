import React from "react";
import { Row, Col, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TopSearch = () => {
    return (
        <Row>
            <Col sm='12'>
                <div className='top__search__input'>
                    <Button>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Input type='text' name='search' placeholder='Search Web Administrator' />
                </div>
            </Col>
        </Row>
    )
}

export default TopSearch;