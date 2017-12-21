import React from 'react';
import { connect } from 'react-redux';

import actionFetchSelects from '../actions/actionFetchSelects';
import Option from './Option';

class Select extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.indexSelectCurrent = null;
    }
    componentWillUpdate()
    {
        console.log('update');
    }
    updateStateSelects()
    {   const indexSelectedOption = this.select.options.selectedIndex;
        const valueSelectedOption = this.select.options[ indexSelectedOption ].value;
        const selectCurrent = this.props.selects.find(select => select.name === this.props.name);
        selectCurrent.value = valueSelectedOption;

        this.props.updateSelect( this.props.selects );
    }
    render()
    {
        const options = this.props.options.map( (option, index) => {
            return <Option key = {index} {...option}/>
        });

        return <div className={ this.props.name }>
            <div className={ this.props.name + '__head' }>
                { this.props.head + ' : ' + this.props.value}
            </div>
            <select name={ this.props.name }
                    id={ this.props.name }
                    defaultValue={ this.props.value }
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