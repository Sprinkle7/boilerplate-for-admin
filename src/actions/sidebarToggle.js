// Please Use (option + shift + F) For align code 

export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";
export const SIDEBAR_OPEN = "SIDEBAR_OPEN"


export const sidebarToggle = (toggle) => {
  return (dispatch) => {
    if (toggle === true) {
      localStorage.setItem('toggleSidebar', true)
      dispatch({ type: SIDEBAR_OPEN, data: true })
    } else {
      localStorage.setItem('toggleSidebar', false)
      dispatch({ type: SIDEBAR_CLOSE, data: false })
    }
  }
}
