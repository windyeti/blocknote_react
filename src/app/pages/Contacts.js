import React from 'react';
import { connect } from 'react-redux';

class Contacts extends React.Component
{
    render()
    {
        return <div>
            Контакты.
        </div>;
    }
}
export default connect(
    state => ({
    }),
    dispatch => ({
    })
)( Contacts );