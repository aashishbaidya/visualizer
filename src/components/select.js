import React from 'react'

const Select = (props) => {
		return(
            <select className="form-control" onChange={props.onChange} value={props.defaultValue || undefined}>
                <option value="">Please select an option.</option>
                {
                	props.options
                }
            </select>          
        );
    }

export default Select