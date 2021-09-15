import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import AddDriverSubHeadings from "../TilesComponents/AddDriverSubHeadings";
import DragDropPicture from '../DragDropPicture'
import InputTile from "../../InputTile";
import './style.scss'

const PersonalDetails = (props) => {
    const { onChangePersonalDetails, personalDetails, onChangeProfilePicture, profilePicture } = props

    return (
        <div className='personal__wrap'>
            <Row>
                <Col sm='3'>
                    <AddDriverSubHeadings text={'Lorem ipsum dolor set met is a dummy text use here.'} heading={'Personal Details'} />
                    <div className='mt-3'><DragDropPicture onChange={onChangeProfilePicture} selectedFile={profilePicture} customeClass={'picture--modifire'} /></div>
                </Col>
                <Col sm='8'>
                    <Row>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'firstName'} label={'First Name'} placeholder={'- -'} value={personalDetails.firstName} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'middleName'} label={'Middle Name'} placeholder={'- -'} value={personalDetails.middleName} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'lastName'} label={'Last Name'} placeholder={'- -'} value={personalDetails.lastName} onChange={onChangePersonalDetails} />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'userName'} label={'User Name'} placeholder={'- -'} value={personalDetails.userName} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'email'} name={'email'} label={'Email'} placeholder={'- -'} value={personalDetails.email} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'password'} label={'Contact no.'} placeholder={'- -'} value={personalDetails.password} onChange={onChangePersonalDetails} />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm='12'>
                            <InputTile type={'text'} name={'address'} label={'Address'} placeholder={'- -'} value={personalDetails.address} onChange={onChangePersonalDetails} />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'town'} label={'Town'} placeholder={'- -'} value={personalDetails.town} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'text'} name={'postalCode'} label={'Postal Code'} placeholder={'- -'} value={personalDetails.postalCode} onChange={onChangePersonalDetails} />
                        </Col>
                        <Col sm='4'>
                            <InputTile type={'password'} name={'contactNo'} label={'Password'} placeholder={'- -'} value={personalDetails.contactNo} onChange={onChangePersonalDetails} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails)