import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import AddDriverSubHeadings from "../TilesComponents/AddDriverSubHeadings";
import DragDropPicture from '../DragDropPicture'
import InputTile from "../../InputTile";
import './style.scss'

const AddDriverDocumentTile = (props) => {
    const { showheading, tileHeading, onChangeHandle, tileName, value, onChangeHandleFile } = props
    let dummyText = 'In the name of lord the most beneficail and mercifull. Alone malik and creator.'
    return (
        <Fragment>
            <Row className='mb-3'>
                <Col sm='3'>
                    {showheading && <AddDriverSubHeadings text={dummyText} heading={'Document Details'} />}
                </Col>
                <Col sm='9'>{tileHeading}</Col>
            </Row>

            <Row>
                <Col sm='3'>
                    <div className=''><DragDropPicture customeClass={'documentPicture--modifire'} onChange={onChangeHandleFile} selectedFile={value.file} tileName={tileName}/></div>
                </Col>
                <Col sm='8'>
                    <Row className='mb-3'>
                        <Col sm='6'>
                            <InputTile label={'Expiry Date'} name={'expiryDate'} type={'date'} value={value.expiryDate} placeholder={'- -'} tileName={tileName} onChange={onChangeHandle} />
                        </Col>
                        <Col sm='6'>
                            <InputTile label={'Refrence'} type={'text'} name='refrence' placeholder={'- -'} value={value.refrence} tileName={tileName} onChange={onChangeHandle} />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm='6'>
                            <InputTile label={'Notes'} type={'text'} name={'notes'} placeholder={'Some text here'} value={value.notes} tileName={tileName} onChange={onChangeHandle} />
                        </Col>
                        <Col sm='6'>
                            <InputTile label={'Error (if any)'} type={'text'} name='error' placeholder={'- -'} value={value.error} tileName={tileName} onChange={onChangeHandle} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default AddDriverDocumentTile;