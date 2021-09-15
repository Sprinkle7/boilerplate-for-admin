import axios from 'axios'
import config from '../config'

export const PROJECT_LOADING = 'PROJECT_LOADING'
export const PROJECT_DATA = 'PROJECT_DATA'

export const AllProjects = () => {
    return (dispatch) => {
        dispatch({ type: PROJECT_LOADING, data: true })
        axios.get(`${config.apiPath}/project`)
            .then((res) => {
                dispatch({ type: PROJECT_LOADING, data: false })
                return dispatch({ type: PROJECT_DATA, data: res.data })
            }).catch((error) => {
                dispatch({ type: PROJECT_LOADING, data: false })
            })
    }
}
