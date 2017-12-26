import React from 'react';
import { connect } from 'react-redux';

import actionSetThumblainActive from '../actions/actionSetThumblainActive';

class Thumbnail extends React.Component
{
    constructor()
    {
        super(...arguments)
    }
    componentWillUpdate()
    {
        console.log('update Thumbnail');
    }
    isActiveThumbnail(ind)
    {
        if( ind === this.props.indBigPic ) {
            return "lightbox__thumbnail lightbox__thumbnail_active";
        }
        return "lightbox__thumbnail";
    }
    setIndBigPic(e)
    {
        let ind = Number( e.target.src.split('-')[1].split('.')[0] );
        console.log('ind', ind);
        this.props.setThumblainActive(ind);

    }
    render()
    {
        const path = "/images/blocknote_form" + this.props.idActive + "_" + this.props.selects[1].value + "_" + this.props.selects[2].value + "_" + this.inputCheckingTrue(this.props.checkboxs);

        const thumbnails = [1,2,3].map(
            (item, ind) =>
                <img className={ this.isActiveThumbnail(item) }
                     key={ind} src={`${this.props.path}-${item}.png`}
                     onClick={ this.setIndBigPic.bind(this) }
                        />);

        return <div className="lightbox__thumbnails">
            <div className="lightbox__bigPic">
                <img src={`${this.props.path}-${this.props.indBigPic}.png`} className="lightbox__bigPic"/>
            </div>
            { thumbnails }
            </div>;
    }
}
export default connect(
    state => ({

    }),
    dispatch => ({
        setThumblainActive : (posit) => {
            dispatch( actionSetThumblainActive(posit) )
        }
    })
)(Thumbnail);