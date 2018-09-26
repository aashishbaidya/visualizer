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

export const update_widget_chart = (id, chart_id) => ({
  type: 'UPDATE_WIDGET_CHART',
  chart_id,
  id
}
)

export const update_widget_form = (id, form_id) => ({
  type: 'UPDATE_WIDGET_FORM',
  form_id,
  id
}
)

export const update_widget_question = (id, question_id) => ({
  type: 'UPDATE_WIDGET_QUESTION',
  question_id,
  id
}
)
export const remove_widget = (id) => ({
  type: 'REMOVE_WIDGET',
  id
})

export const update_forms = (forms) => ({
  type: 'UPDATE_FORMS',
  forms,
}
)


