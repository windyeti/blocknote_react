import React from 'react';
import { connect } from 'react-redux';

import actionFetchSelects from '../actions/actionFetchSelects';
import Option from './Option';

class Select extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.dataSelect = this.props.selects.find(select => select.name === this.props.nameSelect);

    }
    componentWillUpdate()
    {
 // console.log('update');
    }
    updateStateSelects()
    {   const indexSelectedOption = this.select.options.selectedIndex;
        const valueSelectedOption = this.select.options[ indexSelectedOption ].value;
        const selectCurrent = this.props.selects.find(select => select.name === this.props.nameSelect);
        // console.log('до ',selectCurrent.value);
        selectCurrent.value = valueSelectedOption;
        // console.log('после ',selectCurrent.value);

        this.props.updateSelect( this.props.selects );

        // console.log('state ',this.props.selects);
        // console.log('value ',this.dataSelect.value);
    }
    render()
    {
        const options = this.dataSelect.options.map( (option, index) => {
            return <Option key = {index} {...option}/>
        });

        return <div className={ this.dataSelect.name }>
            <div className={ this.dataSelect.name + '__head' }>
                { this.dataSelect.head + ' : Должно update => ' + this.dataSelect.value}
            </div>
            <select name={ this.dataSelect.name }
                    id={ this.dataSelect.name }
                    defaultValue={ this.dataSelect.value }
                    onChange={ this.updateStateSelects.bind(this) }
                    ref={(select)=>{this.select = select}}>
                { options }
            </select>
        </div>;
    }
}
export default connect(
    state => ({
        selects : state.selects.selects
    }),
    dispatch => ({
        updateSelect : (select) => {
            dispatch( actionFetchSelects(select) )
        }
    })
)(Select);