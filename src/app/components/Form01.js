import React from 'react';
import { connect } from 'react-redux';

import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';
import actionFetchSelects from '../actions/actionFetchSelects';

import Select from './Select';

class Form01 extends React.Component
{
    constructor()
    {
        super(...arguments);
        // this.dataChooseForm = this.props.selects.find(select => select.name === 'chooserForm');
        // console.log('dataChooseForm', this.dataChooseForm);
    }
    setIdActiveForm()
    {
        this.props.onSetIdActiveForm( this.chooserForm.options[this.chooserForm.options.selectedIndex].value );
    }
    componentWillMount()
    {
        // console.log('this.props.selects Mount', this.props.selects);
        // console.log('isActiveForm', this.props.idActive);
    }
    componentWillUpdate()
    {
        console.log('Form01 update:');
    }
    render()
    {
        return <div>
                <div className="col-md-4">
                    Лайтбокс.
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
                                    <option value="1">form01</option>
                                    <option value="2">form02</option>
                                    <option value="3">form03</option>
                                </select>
                            </div>

                            <div className="mainOptions">
                                <div className="mainOptions__nameSelect">
                                    <span className="mainOptions__round">2</span>
                                    <span className="mainOptions__head">Выберите опции</span>
                                </div>

                                <Select nameForm={"chooserFormat"}/>

                            </div>
                         </div>
                        <div className="col-md-6">
                            <div className="extendOptions__head">Дополнительные опции</div>
                            <div className="extendOptions__wrapper" ref={ (div) => {this.extendOptions = div }}>
                                <div>
                                    <input type="checkbox" name="checkbox1" id="checkbox1"/>
                                    <label htmlFor="checkbox1">Метка один</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="checkbox2" id="checkbox2"/>
                                    <label htmlFor="checkbox2">Метка два</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="checkbox3" id="checkbox3"/>
                                    <label htmlFor="checkbox3">Метка три</label>
                                </div>
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