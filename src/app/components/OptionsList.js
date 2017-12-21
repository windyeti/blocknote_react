import  React from 'react';
import Option from './Option';

export default class OptionsList extends React.Component
{
    render()
    {
        const options = this.props.options.map( (option, index) => {
            return <Option key = {index} options = {...option}/>
        });
        return <div>
            { options }
        </div>;
    }
}