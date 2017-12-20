import React from 'react';
import { connect } from 'react-redux';

import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';

class Form03 extends React.Component
{
    constructor()
    {
        super(...arguments);
    }
    SetIdActiveForm()
    {
        this.props.onSetIdActiveForm( this.select.options[this.select.options.selectedIndex].value );
    }
    componentWillMount()
    {
    }
    render()
    {
        return <div>
            <div className="col-md-4">
                Лайтбокс.
            </div>
            <div className="col-md-8">
                <div className="col-md-12 head__form">
                    Блокнот №3
                </div>
                <form action="#" className="form">
                    <div className="col-md-6">

                        <div className="chooserForm">
                            <div className="chooserForm__nameSelect">
                                <span className="chooserForm__round">1</span>
                                <span className="chooserForm__head">Выберите тип блокнота</span>
                            </div>
                            <select className="chooserForm__formList" value={'3'} onChange={this.SetIdActiveForm.bind(this)} ref={(select)=>{this.select = select}}>
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
                            <div className="chooserFormat">
                                <div className="chooserFormat__nameSelect">
                                    <span className="chooserForm__head">Формат</span>
                                </div>
                                <select className="chooserFormat__formatList" id="">
                                    <option value="A4">A4</option>
                                    <option value="A5">A5</option>
                                    <option value="A6">A6</option>
                                </select>
                            </div>
                            <div className="chooserNumberSheets">
                                <div className="chooserNumberSheets__nameSelect">
                                    <span className="chooserNumberSheets__head">Количество листов</span>
                                </div>
                                <select className="chooserNumberSheets__formatList" id="">
                                    <option value="NumberSheets_20">20</option>
                                    <option value="NumberSheets_325">32</option>
                                    <option value="NumberSheets_48">48</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="extendOptions__head">Дополнительные опции</div>
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
                </form>
            </div>
        </div>
    }
}
export default connect(
    state => ({
        form : state.forms.arrayForms.find(form => form.id === state.idActiveFrom.idActiveForm),
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({
        onSetIdActiveForm : (idNewActiveForm) => {
            dispatch( actionSetIdActiveForm(idNewActiveForm) )
        }
    })
)(Form03);