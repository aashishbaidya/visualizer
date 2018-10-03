export const add_initial_widgets = (obj) => ({
  type: 'ADD_INITIAL_WIDGETS',
  obj,
}
)

export const add_widget = (obj) => ({
  type: 'ADD_WIDGET',
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

export const update_widget_form_question = (id, form_question_name) => ({
  type: 'UPDATE_WIDGET_FORM_QUESTION',
  form_question_name,
  id
}
)
export const remove_widget = (id) => ({
  type: 'REMOVE_WIDGET',
  id
})

const filterForms = (rawForms) => {
    var allforms = []
    const parseChildren = (child, key, prefix="") =>{
      
      child.children.forEach(function (subChild, index) {
        
        if (subChild.type === "group"){
          parseChildren(subChild, key, subChild.name + "/")
        }
        else if (subChild.type === "select one" || child.type === "select all that apply"){
          subChild.name = prefix + subChild.name
          allforms[key].questions.push(subChild)
        }
      });  
    }
    const parseForms = (forms) =>{
      forms.forEach(function (form, index) {
          var parsedForm={id:form.id, name:form.name, questions:[]}
          allforms.push(parsedForm)
          parseChildren(form.json, index) 
      });  
    }
    parseForms(rawForms)
    console.log(allforms)
    return allforms
  }

export const update_forms = (forms) => ({
  type: 'UPDATE_FORMS',
  forms: filterForms(forms),
}
)


