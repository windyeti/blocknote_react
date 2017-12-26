import React from 'react';
import { connect } from 'react-redux';

import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';
import actionFetchSelects from '../actions/actionFetchSelects';

import Lightbox01 from './Lightbox01';
import Select from './Select';
import Checkbox from './Checkbox';

class Form01 extends React.Component
{
    constructor()
    {
        super(...arguments);
    }
    setIdActiveForm()
    {
        this.props.onSetIdActiveForm( this.chooserForm.options[this.chooserForm.options.selectedIndex].value );
    }
    componentWillMount()
    {
    }
    componentWillUpdate()
    {
    }
    render()
    {
        return <div>
                <div className="col-md-4">
                    <Lightbox01 activeForm = {this.props.idActive}/>
                </div>
                <div className="col-md-8">
                    <div className="col-md-12 head__form">
                        Блокнот №1
                    </div>
                    <form action="#" className="form">
                        <div className="col-md-6">

                            <div className="chooserForm">
                                <div className="chooserForm__nameSelect">
                                    <span className="chooserForm__round">1</span>
                                    <span className="chooserForm__head">Выберите тип блокнота</span>
                                </div>
                                <select className="chooserForm__formList"
                                        value={'1'}
                                        onChange={ this.setIdActiveForm.bind(this) }
                                        ref={(select)=>{this.chooserForm = select}}>
                                    <option value="1">На пружине</option>
                                    <option value="2">Дырокол</option>
                                    <option value="3">На скрепке</option>
                                </select>
                            </div>

                            <div className="mainOptions">
                                <div className="mainOptions__nameSelect">
                                    <span className="mainOptions__round">2</span>
                                    <span className="mainOptions__head">Выберите опции</span>
                                </div>

                                <Select nameSelect={"chooserСirculation_form1"}/>
                                <Select nameSelect={"chooserFormat_form1"}/>
                                <Select nameSelect={"chooserNumberSheets_form1"}/>

                            </div>
                         </div>
                        <div className="col-md-6">
                            <div className="extendOptions__head">Дополнительные опции</div>
                            <div className="extendOptions__wrapper">

                                <Checkbox nameCheckbox={"red_form1"}/>
                                <Checkbox nameCheckbox={"cmyk_form1"}/>
                                <Checkbox nameCheckbox={"varnish_form1"}/>

                            </div>
                        </div>
                    </form>
                 </div>
        </div>
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        checkboxs : state.checkboxs.checkboxs,
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({
        onSetIdActiveForm : (idNewActiveForm) => {
            dispatch( actionSetIdActiveForm(idNewActiveForm) )
        },
        fetchForm : (array) => {
            dispatch( actionFetchSelects(array) )
        }
    })
)(Form01);