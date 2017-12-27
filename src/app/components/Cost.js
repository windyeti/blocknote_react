import React from 'react';
import { connect } from 'react-redux';

class Cost extends React.Component
{
    cost()
    {
        return `[ Тираж ${this.props.selects[0].value} ]
        X [ Формат ${this.props.selects[1].value} ]
        X [ Количество листов ${this.props.selects[2].value} ]
        ${(this.props.checkboxs[0].checked ? "+ [ Красная обложка ]" : "")}
        ${(this.props.checkboxs[1].checked ? "+ [ CMYK ]" : "")}
        ${(this.props.checkboxs[2].checked ? "+ [ Уф-лак ]" : "")}`
    }
    render()
    {
        return <div className="cost col-md-12">
            <div className="cost__head col-md-6">Стоимость тиража:</div>
            <div className="cos__amount col-md-6">{ this.cost() }</div>
        </div>;
    }
}
export default connect(
    state => ({
        selects : state.selects.selects.filter(select => select.parentForm === state.idActiveFrom.idActiveForm),
        checkboxs : state.checkboxs.checkboxs,
        idActive : state.idActiveFrom.idActiveForm
    }),
    dispatch => ({})
)(Cost);