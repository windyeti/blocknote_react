import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component
{
    render()
    {
        return <li className="col-xs-4 header__menuItem">
            <Link to={this.props.href} className={ "header__link " + (this.props.active ? 'header__link_active' : '') }>{this.props.children}</Link>
        </li>
    }
}