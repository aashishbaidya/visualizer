const widgets = (state = [], action) => {
  
  switch (action.type) {
    case 'ADD_WIDGET':
      const data = {chart_id: null, 
                  form_id:null,
                  question_id:null,
                  }
      return [
        ...state,
          {
            id: action.id,
            i: action.id.toString(),
            x: (state.length * 2) % (12),
            y: Infinity, // puts it at the bottom
            w: action.obj.w,
            h: action.obj.h,
            data: data,  
            type_id: 1,
          }
        ]

    case 'UPDATE_WIDGET':
    
      var index = state.findIndex(widget => widget.i === action.id); 
      state[index]['data'] = action['data']
    
      return state

    case 'UPDATE_WIDGET_CHART':
    
      var index = state.findIndex(widget => widget.i === action.id); 
      state[index]['data']['chart_id'] = action['chart_id']
    
      return state

    case 'UPDATE_WIDGET_FORM':
    
      var index = state.findIndex(widget => widget.i === action.id); 
      state[index]['data']['form_id'] = action['form_id']
    
      return state

    case 'UPDATE_WIDGET_QUESTION':
    
      var index = state.findIndex(widget => widget.i === action.id); 
      state[index]['data']['question_id'] = action['question_id']
    
      return state

    case 'UPDATE_WIDGET_LAYOUT':
      
      console.log(action);
      
      action.layout_obj.forEach(function (value) {

      var index = state.findIndex(widget => widget.i === value.i);
      
      if (index > 0){
        state[index]['h'] = value['h'];
        state[index]['w'] = value['w'];
        state[index]['x'] = value['x'];
        state[index]['y'] = value['y'];
        // console.log(value.i, value['x'], value['y'])
        // console.log(arr[index].i, arr[index]['x'], arr[index]['y'])
        }
      })

      return state

    case 'REMOVE_WIDGET':
      return state.filter(widget => widget.id !== action.id)
    default:
      return state
  }
}

export default widgets
