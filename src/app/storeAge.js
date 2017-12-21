export const data = {
    idActiveForm : 1,
    selects : [
        {
            parentForm : 1,
            name : 'chooserFormat',
            head : 'Формат',
            value : 'A6',
            options : [
                {
                    value : 'A6',
                    text : 'A6'

                },
                {
                    value : 'A5',
                    text : 'A5'

                },
                {
                    value : 'A4',
                    text : 'A4'

                }
            ]
        },
        {
            parentForm : 1,
            name : 'chooserNumberSheets',
            head : 'Количество листов',
            value : 1,
            options : [
                {
                    value : 'NumberSheets_20',
                    text : '20'

                },
                {
                    value : 'NumberSheets_32',
                    text : '32'

                },
                {
                    value : 'NumberSheets_40',
                    text : '40'

                },
            ]
        },
    ],
    inputs : [
        {
            type : 'checkbox',
            name : 'numberOne',
            labelText : 'Номер один'
        },
        {
            type : 'checkbox',
            name : 'numberTwo',
            labelText : 'Номер два'
        },
        {
            type : 'checkbox',
            name : 'numberThree',
            labelText : 'Номер три'
        }
    ]
};