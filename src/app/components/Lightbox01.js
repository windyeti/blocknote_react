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
            if( item.name === 'varnish_form1' || item.name === 'varnish_form2' || item.name === 'varnish_form3') {
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
    isActiveThumbnail(ind)
    {
        if( ind === this.state.bigPic ) {
            return "lightbox__thumbnail lightbox__thumbnail_active col-xs-4";
        }
        return "lightbox__thumbnail col-xs-4";
    }
    render()
    {
        const path = "/images/blocknote_form" + this.props.idActive + "_" + this.props.selects[1].value + "_" + this.props.selects[2].value + "_" + this.inputCheckingTrue(this.props.checkboxs);

        const thumbnails = [1,2,3].map(
            (item, ind) => {
                return <div className={ this.isActiveThumbnail(item) } key={ind} >
                    <img className="lightbox__thumbnail__img"
                         src={`${path}-${item}.png`}
                         onClick={ this.setIndBigPic.bind(this) }/>
                </div>
            }
        );

        return <div className="lightbox">
            <div className="lightbox__bigPic">
                <img src={`${path}-${this.state.bigPic}.png`} className="lightbox__bigPic"/>
            </div>
            <div className="lightbox__thumbnails">
                { thumbnails }
            </div>
        </div>;
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        checkboxs : state.checkboxs.checkboxs.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({
    })
)(Lightbox01);