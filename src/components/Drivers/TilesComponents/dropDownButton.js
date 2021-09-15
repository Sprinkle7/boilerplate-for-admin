import React, { useEffect, useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import VehicleIcon from '../../../assets/img/tableIcons/vehicle.svg'
import { selectValuesForVehicle } from "../../../Utilities/StaticFunctions";
import Select from 'react-select'

const DropDownButton = (props) => {
    const { dropdownOpen, toggle, assignVehicleFun, item, allVehicles } = props
    const [vehicleArray, setVehicleArray] = useState([])

    useEffect(() => {
        let vehicleArr = selectValuesForVehicle(allVehicles)
        setVehicleArray(vehicleArr)
    }, [allVehicles])

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle><img src={VehicleIcon} alt='Vehicle Icon' /></DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => { assignVehicleFun(item, 'Self') }} disabled={item.VehicleAssignmentType === 'Self' ? true : false}>Self Owned</DropdownItem>
                <DropdownItem onClick={() => { assignVehicleFun(item, 'Pool') }} disabled={item.VehicleAssignmentType === 'Pool' ? true : false}>Pool Vehicle</DropdownItem>
                <div className='select__vehicle'>
                    <Select options={vehicleArray} placeholder='Choose Vehicle' onChange={(e) => { assignVehicleFun(item, 'Choice', e) }} />
                </div>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default DropDownButton;