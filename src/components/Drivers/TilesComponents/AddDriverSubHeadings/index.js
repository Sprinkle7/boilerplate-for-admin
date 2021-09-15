import React from "react";
import PersonalDetailsIcon from '../../../../assets/img/drivers/personalDetails.svg'
import VehicleDetails from '../../../../assets/img/drivers/vehicleDetails.svg'
import './style.scss'

const AddDriverSubHeadings = (props) => {
    const { heading, text, page, icon } = props
    const Img = page === 'vehicle' ? VehicleDetails : PersonalDetailsIcon
    return (
        <div className='personal__headings'>
            {icon !== false ? <img src={Img} alt={'Peronsal Details'} /> : null}
            <h5>{heading}</h5>
            <p>{text}</p>
        </div>
    )
}

export default AddDriverSubHeadings