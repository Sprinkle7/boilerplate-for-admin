import React, { useEffect, useState } from 'react';
import Pagination from '../../../../components/Pagination'
import FilterAndSort from '../../../../components/FilterAndSort';
import { connect } from 'react-redux';
import { AllProjects } from '../../../../actions/projects';
import InnerTable from './InnerTable';
import TableLoader from '../../../../components/Loader/TableLoader';
import PageTitleAndAddOprations from '../../../../components/PageTitleAndAddOpration';
import './style.scss';

const ProjectList = (props) => {
	const { fetchProjects, projectData, loading, fetchAllVehicle, history } = props
	const [showListOfData, setShowListOfData] = useState([])

	useEffect(() => {
		fetchProjects()
	}, [fetchProjects, fetchAllVehicle])
	const driverDataCheck = projectData && projectData.Content && projectData.Content.length > 0

	return (
		<div className='main__bg__for__all'>
			<div className='top__area'>
				<PageTitleAndAddOprations breadcrumb={'Home'} title={'Projects'} url={'/addProject'} history={history} buttonTitle={'Add Project'} page={'projects'} />
			</div>
			<div className='table__wrap'>
				<div className='top__filter'>
					<FilterAndSort pageName='projects' loading={loading} totalDataListLength={driverDataCheck ? projectData.Content.length : []} subHeading={'Total Project'} sideHeading={'Project'} />
				</div>

				<div className='table__main'>
					{loading ? <div><TableLoader /></div> : <InnerTable showListOfData={showListOfData} />}
				</div>

				{driverDataCheck ? <div className='sticky__pagination'><Pagination data={projectData.Content} setShowListOfData={setShowListOfData} /></div> : null}
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProjects: () => dispatch(AllProjects()),
	}
}

const mapStateToProps = (state) => {
	return {
		projectData: state.projects.Projects.data,
		loading: state.projects.Projects.loading,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
