import React from 'react';
import { connect } from 'react-redux';

import actionFetchSelects from '../actions/actionFetchSelects';
import actionFetchCheckboxs from '../actions/actionFetchCheckboxs';
import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';
import { data } from '../storeAge';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

class Layout extends React.Component
{
    constructor()
    {
        super(...arguments);
    }
    componentDidMount()
    {
        const { idActiveForm } = data;
        const { selects } = data;
        const { checkboxs } = data;

        this.props.fetchSelects(selects);
        this.props.fetchCheckbox(checkboxs);
        this.props.fetchIdActiveForm( idActiveForm );
    }
    componentWillUpdate()
    {
        // console.log('Layout UPDATE!!!');
    }
    is_active(href)
    {
        return href === window.location.pathname;
    }
    render()
    {
        return <div className="container-fluid">
            <header className="header">
                <div className="row header__info">
                    <div className="col-xs-4 header__slogan">Печать классных блокнотов</div>
                    <div className="col-xs-4 header__logo">ЛОГОТИП</div>
                    <div className="col-xs-4 header__address">Адрес</div>
                </div>
                <div className="row header__menu">
                    <Menu>
                        <MenuItem href={ "/" } active={ this.is_active("/") }>Главная</MenuItem>
                        <MenuItem href={ "/calc" } active={ this.is_active("/calc") }>Калькулятор</MenuItem>
                        <MenuItem href={ "/contacts" } active={ this.is_active("/contacts") }>Адрес</MenuItem>
                    </Menu>
                </div>
            </header>
            <div className="row content">
                {this.props.children}
            </div>
        </div>
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm)
    }),
    dispatch => ({
        fetchIdActiveForm : (idForm) => {
            dispatch( actionSetIdActiveForm(idForm) )
        },
        fetchSelects : (arraySelects) => {
            dispatch( actionFetchSelects(arraySelects) )
        },
        fetchCheckbox : (arrayCheckbox) => {
            dispatch( actionFetchCheckboxs(arrayCheckbox) )
        }
    })
)(Layout);