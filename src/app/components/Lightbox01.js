import React from 'react';
import { connect } from 'react-redux';

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
    setIndBigPic(e)
    {
        let ind = Number( e.target.src.split('-')[1].split('.')[0] );
        this.setState({
            bigPic : ind
        })
    }
    componentWillUpdate()
    {
        console.log('Lightbox update!!!');
    }
    componentWillMount()
    {
    }
    isActiveThumbnail(ind)
    {
        if( ind === this.state.bigPic ) {
            return "lightbox__thumbnail lightbox__thumbnail_active";
        }
        return "lightbox__thumbnail";
    }
    // setIndBigPic(e)
    // {
    //     let ind = Number( e.target.src.split('-')[1].split('.')[0] );
    //     console.log('ind', ind);
    //     this.props.setThumblainActive(ind);
    //
    // }
    render()
    {
        const path = "/images/blocknote_form" + this.props.idActive + "_" + this.props.selects[1].value + "_" + this.props.selects[2].value + "_" + this.inputCheckingTrue(this.props.checkboxs);

        const thumbnails = [1,2,3].map(
            (item, ind) =>
                <img className={ this.isActiveThumbnail(item) }
                     key={ind} src={`${path}-${item}.png`}
                     onClick={ this.setIndBigPic.bind(this) }
                />);

        return <div className="lightbox__thumbnails">
            <div className="lightbox__bigPic">
                <img src={`${path}-${this.state.bigPic}.png`} className="lightbox__bigPic"/>
            </div>
            { thumbnails }
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