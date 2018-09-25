let nextWidgetId = 0
export const add_widget = (obj) => ({
  type: 'ADD_WIDGET',
  id: nextWidgetId++,
  obj,
}
)

export const update_widget_layout = (layout_obj) => ({
  type: 'UPDATE_WIDGET_LAYOUT',
  layout_obj,
}
)

export const remove_widget = (id) => ({
  type: 'REMOVE_WIDGET',
  id
})


