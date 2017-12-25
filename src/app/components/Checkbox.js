import React from 'react';
import { connect } from 'react-redux';

import actionFetchCheckboxs from '../actions/actionFetchCheckboxs';

class Checkbox extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.checkbox = {};
    }
    componentDidMount()
    {
        console.log('CHECKBOX MOUNT!!!');
    }
    componentWillUpdate()
    {
        console.log('CHECKBOX UPDATE!!!!');
    }
    updateCheckbox()
    {
        this.checkbox.checked = !this.checkbox.checked;
        this.props.onUpadateCheckboxs( this.props.checkboxs );
    }
    render()
    {
        this.checkbox = this.props.checkboxs.find(checkbox => checkbox.name === this.props.nameCheckbox);
        return <div>
            <input type="checkbox" name={ this.checkbox.name }
                   id={ this.checkbox.name }
                   defaultChecked={ this.checkbox.checked }
                    onChange={ this.updateCheckbox.bind(this) }
            />
            <label htmlFor={ this.checkbox.name }>{ this.checkbox.labelText }</label>
        </div>;
    }
}
export default connect(
    state => ({
        checkboxs : state.checkboxs.checkboxs
    }),
    dispatch => ({
       onUpadateCheckboxs : (arrCheckboxs) => {
           dispatch( actionFetchCheckboxs(arrCheckboxs) )
       }
    })
)(Checkbox);