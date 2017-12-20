import React from 'react';
import { connect } from 'react-redux';

import Form01 from '../components/Form01';
import Form02 from '../components/Form02';
import Form03 from '../components/Form03';

class Calc extends React.Component
{
    constructor()
    {
        super(...arguments);
    }
    componentDidMount()
    {
    }
    componentWillUnmount()
    {
    }
    componentDidUpdate()
    {
    }
    componentWillUpdate()
    {
    }
    render()
    {
        // if( !this.props.form ) {
        //     console.log('Pending...');
        //     return <div>
        //         Pending...
        //     </div>;
        // }
        let  form;
        switch(this.props.idActive) {
            case 1 :
                form = <Form01 />;
                break;
            case 2 :
                form = <Form02 />;
                break;
            case 3 :
                form = <Form03 />;
                break;
            default :
                form = 'Нет такой формы!!!'
        }
        return <div>
            { form }
        </div>;
    }
}
export default connect(
    state => ({
        // form : state.forms.arrayForms,
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({
    })
)( Calc );