import React from "react";
import { Table } from "reactstrap";
import StaticData from '../../../../StaticData';
import ProjectTile from "../../../../components/Drivers/TilesComponents/DriverOnBoardTiles";
import { connect } from "react-redux";
import { AllProjects } from "../../../../actions/projects";

const InnerTable = (props) => {
    const {
        showListOfData,
    } = props

    return (
        <div>
            <Table>
                <thead>
                    <tr>{StaticData.projectTableTh.map((item, key) => { return (<th key={key}>{item.label}</th>) })}</tr>
                </thead>
                <tbody>
                    {
                        showListOfData && showListOfData.length > 0 ?
                            showListOfData.map((item, key) => {
                                if (item.RegistrationStatus !== 'Approved') {
                                    return <ProjectTile item={item} key={key} />
                                } else { return null }
                            }) : null
                    }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(AllProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InnerTable);