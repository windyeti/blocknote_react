import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';
import actionSetThumblainActive from '../actions/actionSetThumblainActive';

class Lightbox01 extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            bigPic : 1
        }
    }
    inputCheckingTrue(arr)
    {
        let newArr = arr.filter(item => {
            if( item.name === 'varnish_form1') {
                return false;
            }
            return item.checked;
        } );

        if( !newArr.length ) {
            return 'simple';
        }
        let newArr2 = newArr.map(item => item.name.split('_')[0]);
        return newArr2.join('_');
    }
    // setIndBigPic(e)
    // {
    //     let ind = e.target.src.split('-')[1].split('.')[0];
    //     console.log('ind', typeof ind);
    //     this.setState({
    //         bigPic : ind
    //     })
    // }
    componentWillUpdate()
    {
        console.log('Lightbox update!!!');
    }
    componentWillMount()
    {
        // this.props.setThumblainActive(1);
    }
    render()
    {
        const path = "/images/blocknote_form" + this.props.idActive + "_" + this.props.selects[1].value + "_" + this.props.selects[2].value + "_" + this.inputCheckingTrue(this.props.checkboxs);
        console.log('this.props.activeThumbnail',this.props.activeThumbnail);
        return <div>
            <Thumbnail path={path} indBigPic={this.props.activeThumbnail}/>
        </div>;
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        checkboxs : state.checkboxs.checkboxs,
        idActive : state.idActiveFrom.idActiveForm,
        activeThumbnail : state.activeThumbnail
    }),
    dispatch => ({
        setThumblainActive : (posit) => {
            dispatch( actionSetThumblainActive(posit) )
        }
    })
)(Lightbox01);