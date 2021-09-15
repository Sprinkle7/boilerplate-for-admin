import React from "react";
import { Row, Col, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SmallLoader from '../../components/Loader/SmallLoader'
import './style.scss'

const FilterAndSort = (props) => {
    const { pageName, totalDataListLength, loading, sideHeading, subHeading } = props
    return (
        <div className='main__filter__wrap'>
            <Row>
                <Col sm='4'>
                    <div className='title__filter'>
                        <h4>
                            {sideHeading}
                        </h4>
                        <p>
                            {loading ? <span> <SmallLoader /> {subHeading} </span> : totalDataListLength + ' ' + subHeading}
                        </p>
                    </div>
                </Col>

                <Col sm='8'>
                    <div className='main__filter__flex'>
                        <div className='sorting__filter filter--one'>
                            <span>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <Input type='text' placeholder={pageName === 'driver' ? 'Search driver' : 'Search ' + sideHeading} />
                        </div>
                        <div className='sorting__filter filter--modifier'>
                            <Input type='select'>
                                <option>Sort by</option>
                                <option>hello</option>
                                <option>wow</option>
                                <option>Nice</option>
                                <option></option>
                            </Input>
                        </div>
                        <div className='sorting__filter filter--modifier'>
                            <Input type='select'>
                                <option>Filter by</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Input>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FilterAndSort;