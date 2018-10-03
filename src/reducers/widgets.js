const widgets = (state = [], action) => {
  
  switch (action.type) {
    case 'ADD_INITIAL_WIDGETS':
      console.log("here")
      state = state.concat(action.obj)
      return state.filter(widget => widget !== -1)
    case 'ADD_WIDGET':

      const data = {chart_id: null, 
                  form_id:null,
                  question_name:null,
                  }
                  state.push({
                    x: (state.length * 4) % (12),
                    y: Infinity, // puts it at the bottom
                    w: action.obj.w,
                    h: action.obj.h,
                    data: data,  
                    type_id: 1,
                  })
      return state.concat([])

    case 'UPDATE_WIDGET':
    
      var index = action.id 
      if (index > -1){
        state[index]['data'] = action['data']
      }
      return state.filter(widget => widget !== -1)

    case 'UPDATE_WIDGET_CHART':
      index = action.id 
      if (index > -1){
        state[index]['data']['chart_id'] = action['chart_id']
        
      }
      return state.filter(widget => widget !== -1)

    case 'UPDATE_WIDGET_FORM':
    
      index = action.id 
      if (index > -1){
        state[index]['data']['form_id'] = action['form_id']
      console.log(state);
      }
      return state.filter(widget => widget !== -1)

    case 'UPDATE_WIDGET_FORM_QUESTION':
    
      index = action.id 
      if (index > -1){
        state[index]['data']['form_question_name'] = action['form_question_name']
      }
      return state.filter(widget => widget !== -1)

    case 'UPDATE_WIDGET_LAYOUT':
      
      var arr = state
      action.layout_obj.forEach(function (value) {
      
      var index = value.i
      
      if (index > -1){
        arr[index]['h'] = value['h'];
        arr[index]['w'] = value['w'];
        arr[index]['x'] = value['x'];
        arr[index]['y'] = value['y'];
        // console.log(value.i, value['x'], value['y'])
        // console.log(arr[index].i, arr[index]['x'], arr[index]['y'])
        }
      })
      state = []
      state = arr
      return state.filter(widget => widget.x !== -1)

    case 'REMOVE_WIDGET':
      return state.filter(widget => widget.id !== action.id)
    default:
      return state
  }
}

export default widgets
