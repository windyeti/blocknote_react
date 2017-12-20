import React from 'react';

export default class Menu extends React.Component
{
    render()
    {
        return <ul className="header__menuItems">
                {this.props.children}
            </ul>
    }
}