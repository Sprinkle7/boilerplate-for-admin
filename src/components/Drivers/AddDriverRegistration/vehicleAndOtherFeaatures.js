import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import AddDriverSubHeadings from "../TilesComponents/AddDriverSubHeadings";
import InputSelect from "../../InputSelect";
import InputCheck from "../../InputCheck";
import './style.scss'

const VehicleAndOtherFeaatures = (props) => {
    const { onChangeVehicleDetails, onChangeVehicleFeatures, onChangeDriverFeatures, vehicleDetails, vehicleFeatures, driverFeatures, allVehicleForSelect, vehicleFeaturesList } = props
    let dummyText = 'In the name of lord the most beneficail and mercifull. Alone malik and creator.'
    return (
        <Fragment>
            <div className='vehicle__features'>
                <Row>
                    <Col sm='3'>
                        <AddDriverSubHeadings text={dummyText} page={'vehicle'} heading={'Vehicle Details'} />
                    </Col>
                    <Col sm='8'>
                        <Row>
                            <Col sm='4'>
                                <InputSelect
                                    name='vehicleType' label='Vehicle' options={[{ label: 'Choise', value: 'choise' }, { label: 'Cise', value: 'cise' }]}
                                    onChange={onChangeVehicleDetails} value={vehicleDetails.vehicleType} placeholder={'Choice'}
                                />
                            </Col>
                            <Col sm='4'>
                                <InputSelect
                                    name='chooseVehicle' options={allVehicleForSelect}
                                    placeholder={'Choose Vehicle'} onChange={onChangeVehicleDetails} value={vehicleDetails.chooseVehicle} label='Choose Vehicle'
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className='vehicle__features'>
                <Row>
                    <Col sm='3'>
                        <AddDriverSubHeadings text={dummyText} icon={false} page={'vehicle'} heading={'Vehicle Features'} />
                    </Col>
                    <Col sm='9'>
                        <Row>
                            {vehicleFeaturesList && vehicleFeaturesList.Content && vehicleFeaturesList.Content.length > 0 && vehicleFeaturesList.Content.map((item, key) => {
                                if (item.Type === 'Vehicle') {
                                    return <Col sm='2' key={key}> <InputCheck customClass={'modifire--checkBox'} value={vehicleFeatures} name={item.FeatureId} label={item.Name} onChange={onChangeVehicleFeatures} /> </Col>
                                } else { return null }
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className='vehicle__features'>
                <Row>
                    <Col sm='3'>
                        <AddDriverSubHeadings text={dummyText} icon={false} page={'vehicle'} heading={'Driver Features'} />
                    </Col>
                    <Col sm='9'>
                        <Row>
                            {vehicleFeaturesList && vehicleFeaturesList.Content && vehicleFeaturesList.Content.length > 0 && vehicleFeaturesList.Content.map((item, key) => {
                                if (item.Type === 'Driver') {
                                    return <Col sm='2' key={key}> <InputCheck name={item.FeatureId} label={item.Name} value={driverFeatures} onChange={onChangeDriverFeatures} /> </Col>
                                } else { return null }
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default VehicleAndOtherFeaatures;