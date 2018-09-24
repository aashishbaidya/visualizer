const widgets = (state = {'widgets':[]}, action) => {
  console.log('here', state, action);
  switch (action.type) {
    case 'ADD_WIDGET':
      var new_widget=action.obj || {};
      new_widget['id'] = action.id;
      new_widget['i'] = action.id.toString();
      return {
        ...state,
        widgets: state.widgets.concat(new_widget)
      }
    case 'REMOVE_WIDGET':
      return state.filter(widget => widget.id !== action.id)
    default:
      return state
  }
}

export default widgets
