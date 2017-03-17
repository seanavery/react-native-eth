const INITIAL_STATE = {
  drawer: false,
}

export default function navigation(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_DRAWER':
      console.log('hit reducer');
      return {
        ...state,
        drawer: !state.drawer
      }
  }
}
