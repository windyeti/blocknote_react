import React from 'react';
import { connect } from 'react-redux';

import actionFetchForms from '../actions/actionFetchForms';
import actionSetIdActiveForm from '../actions/actionSetIdActiveFrom';
import { ARRAY_FORMS } from '../storeAge';

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
        this.props.fetchForm(ARRAY_FORMS);
        this.props.SetIdActiveForm(1);
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

    }),
    dispatch => ({
        SetIdActiveForm : (idForm) => {
            dispatch( actionSetIdActiveForm(idForm) )
        },
        fetchForm : (array) => {
            dispatch( actionFetchForms(array) )
        }
    })
)(Layout);