let nextWidgetId = 0
export const add_widget = obj => ({
  type: 'ADD_WIDGET',
  id: nextWidgetId++,
  obj
})

export const remove_widget = id => ({
  type: 'REMOVE_WIDGET',
  id
})


