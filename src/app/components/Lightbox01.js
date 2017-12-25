import React from 'react';
import { connect } from 'react-redux';

class Lightbox01 extends React.Component
{
    constructor()
    {
        super(...arguments);
    }
    inputCkecked(arr)
    {
        let newArr = arr.filter(item => {
            if( item.name === 'varnish_form1') {
                return false;
            }
            return item.checked;
        } );

        if( !newArr.length ) {
            console.log('newArr.length', newArr.length);
            return 'simple';
        }
        let newArr2 = newArr.map(item => item.name.split('_')[0]);
        return newArr2.join('_');
    }
    componentWillUpdate()
    {
        console.log('Lightbox update!!!');
    }
    render()
    {
        return <div>
            <img src={`/images/blocknote_form${this.props.idActive}_${this.props.selects[0].value}_${this.props.selects[1].value}_${this.inputCkecked(this.props.checkboxs)}.png`}/>
        </div>;
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        checkboxs : state.checkboxs.checkboxs,
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({

    })
)(Lightbox01);