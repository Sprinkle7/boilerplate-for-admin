import React from "react";
import { Button, Col, Row } from "reactstrap";
import { redirectToPage } from "../../Utilities/StaticFunctions";
import PageSelectedUi from "./pageSelectedUI";
import './style.scss'

const PageTitleAndAddOpration = (props) => {
    const { title, url, history, buttonTitle, page, pageSelected, customClass, breadcrumb, toggleModal } = props
    return (
        <div className={`breadcrumbs__wrap ${customClass}`}>
            <Row>
                <Col sm='3'>
                    <p>{breadcrumb}</p>
                    <h4>{title}</h4>
                </Col>
                <Col sm='6'>{page === 'addDriver' ? <PageSelectedUi pageSelected={pageSelected} /> : null}</Col>
            </Row>
            {buttonTitle !== false ? <Button className='theme__btn' onClick={() => { url === false ? toggleModal() : redirectToPage(history, url) }}>{buttonTitle}</Button> : null}
        </div>
    )
}

export default PageTitleAndAddOpration;