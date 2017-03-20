class Navigation {
  constructor(options) {

  }

  toggleDrawer() {
    return (dispatch) => {
      dispatch({type: 'TOGGLE_DRAWER',});
    }
  }
}
