const forms = (state = [], action) => {
  
  switch (action.type) {
    case 'UPDATE_FORMS':
      state = action.forms
      return state

    default:
      return state
  }
}

export default forms
