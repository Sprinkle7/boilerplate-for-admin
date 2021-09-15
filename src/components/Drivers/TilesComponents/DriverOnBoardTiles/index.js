import React from "react";
import { Button } from "reactstrap";
import EditIcon from '../../../../assets/img/tableIcons/edit.svg'
import DeleteIcon from '../../../../assets/img/tableIcons/delete.svg'
import './style.scss'

const ProjectTile = (props) => {
    const { item } = props

    return (
        <tr>
            <td>{item.Id}</td>
            <td>{item.DriverName}</td>
            <td>{item.Email}</td>
            <td>{item.TelephoneNo}</td>
            <td>{item.TelephoneNo}</td>
            <td>{item.TelephoneNo}</td>
            <td>
                <div className='action__icons'>
                    <Button><img src={EditIcon} alt='Edit Icon' /></Button>
                    <Button><img src={DeleteIcon} alt='Delete Icon' /></Button>
                </div>
            </td>
        </tr>
    )
}

export default ProjectTile;