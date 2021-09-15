import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Input } from 'reactstrap'
import './style.scss';

const PaginationCom = (props) => {
    const { data, setShowListOfData } = props
    
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(50)
    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
    const pages = []

    const indexofLastItem = currentPage * itemsPerPage
    const indexofFirstItem = indexofLastItem - itemsPerPage
    const currentData = data.slice(indexofFirstItem, indexofLastItem)

    useEffect(() => {
        setShowListOfData(currentData)
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        setCurrentPage(1)
        setItemsPerPage(itemsPerPage)
        setPageNumberLimit(5)
        setMaxPageNumberLimit(5)
        setMinPageNumberLimit(0)
    }, [itemsPerPage])



    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e))
    }

    const renderPagesNumber = pages.map((item, key) => {
        if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
            return (
                <li key={key} className={currentPage === key + 1 ? 'active' : ''} onClick={(e) => { handleClick(key + 1) }}>
                    {item}
                </li>
            )
        } else {
            return null;
        }
    })

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePreButton = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    let pageIncrementButton = null

    if (pages.length > maxPageNumberLimit) {
        pageIncrementButton = <li onClick={() => { handleNextButton() }}>...</li>
    }

    let pageDecrementButton = null

    if (minPageNumberLimit >= 1) {
        pageDecrementButton = <li onClick={() => { handlePreButton() }}>...</li>
    }

    const onChangeSetItemPerPage = (e) => {
        setItemsPerPage(Number(e))
    }

    return (
        <div className='pagination__main'>
            <Row>
                <Col sm='3'>
                    <div className='item__per__page'>
                        <p>Items per page</p>
                        <Input type='select' value={itemsPerPage} onChange={(e) => { onChangeSetItemPerPage(e.target.value) }}>
                            <option>10</option>
                            <option>15</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>150</option>
                            <option>200</option>
                        </Input>
                    </div>
                </Col>
                <Col sm='6'>
                    <div className='center__pagination__wrap'>
                        <ul>
                            <li><Button onClick={() => { handlePreButton() }} disabled={currentPage === pages[0] ? true : false} >PREV</Button></li>
                            {pageDecrementButton}
                            {renderPagesNumber}
                            {pageIncrementButton}
                            <li><Button onClick={() => { handleNextButton() }} disabled={currentPage === pages[pages.length - 1] ? true : false}>Next</Button></li>
                        </ul>
                    </div>
                </Col>
                <Col sm='3'></Col>
            </Row>

        </div>
    )
}

export default PaginationCom;
