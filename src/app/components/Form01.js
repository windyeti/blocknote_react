import React from 'react';
import { connect } from 'react-redux';

import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';
import actionFetchForms from '../actions/actionFetchForms';

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
    updateStateForms()
    {
        //--------------- checked --------------------
        // получили все checkbox и сделали на их основе объекты для формы в state
        const checkedBox = [].slice.apply(this.extendOptions.children)
            .map( child => {
                return {
                    name : child.children[0].name,
                    checked : child.children[0].checked
                }
            } );

        // заменяем для формы свойство checkbox на новый массив объектов {name : sdsdsd, checked : true}
        this.props.form.checkbox = checkedBox;

        // console.log( 'checkedBox ', checkedBox );
        // console.log( 'this.props.form.checkbox ', this.props.form.checkbox);

        // заменяем в копии со всего state нашу form, с которой сейчас работаем
        // console.log( 'форма в state до замены ', this.props.forms );
        // console.log( 'активная форма!!!', this.props.idActive );
        // id и idActive начинаются с 1, а индекс с 0.
        this.props.forms[ this.props.idActive - 1 ] = this.props.form;

        // console.log('state после замены!!! ', this.props.forms);

        // const checkedBox = [].slice.apply(this.div.children).filter( child => {return child.children[0].checked} );
        // console.log('checked: ', checkedBox.map( box => box.innerText ) );

        //--------------- END checked --------------------

        //--------------- select ------------------------
        //заменить св-во select в this.props.form
        // console.log(this.chooserFormat);

        const options = [].slice.apply(this.chooserFormat)
            .find( option => { return option.selected } );
        console.log(options);
        //--------------- END select --------------------
        // update главного state
        this.props.fetchForm( this.props.forms );
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
                        Блокнот №1
                    </div>
                    <form action="#" className="form">
                        <div className="col-md-6">

                            <div className="chooserForm">
                                <div className="chooserForm__nameSelect">
                                    <span className="chooserForm__round">1</span>
                                    <span className="chooserForm__head">Выберите тип блокнота</span>
                                </div>
                                <select className="chooserForm__formList" value={'1'} onChange={this.setIdActiveForm.bind(this)} ref={(select)=>{this.chooserForm = select}}>
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
                                    <select className="chooserFormat__formatList" onChange={this.updateStateForms.bind(this)} ref={(select)=>{this.chooserFormat = select}} defaultValue={'A5'} name="chooserFormat__formatList">
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
                            <div className="extendOptions__wrapper" ref={ (div) => {this.extendOptions = div }}>
                                <div>
                                    <input type="checkbox" name="checkbox1" id="checkbox1"
                                           onChange={this.updateStateForms.bind(this)}
                                    />
                                    <label htmlFor="checkbox1">Метка один</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="checkbox2" id="checkbox2"
                                           onChange={this.updateStateForms.bind(this)}
                                    />
                                    <label htmlFor="checkbox2">Метка два</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="checkbox3" id="checkbox3"
                                           onChange={this.updateStateForms.bind(this)}
                                    />
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
        form : state.forms.arrayForms.find(form => form.id === state.idActiveFrom.idActiveForm),
        forms : state.forms.arrayForms,
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({
        onSetIdActiveForm : (idNewActiveForm) => {
            dispatch( actionSetIdActiveForm(idNewActiveForm) )
        },
        fetchForm : (array) => {
            dispatch( actionFetchForms(array) )
        }
    })
)(Form01);