const datas = (state = {}, action) => {
  
    switch (action.type) {
        case 'UPDATE_DATAS':
            state[action.obj.form_id][action.obj.question_name]=action.obj.data

        return state
  
      default:
        return state
    }
  }
  
  export default datas
  