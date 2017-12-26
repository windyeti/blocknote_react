export const data = {
    idActiveForm : 1,
    selects : [
        {
            parentForm : 1,
            name : 'chooserСirculation_form1',
            head : 'Тираж',
            value : '500',
            options : [
                {
                    value : '300',
                    text : '300'

                },
                {
                    value : '500',
                    text : '500'

                },
                {
                    value : '1000',
                    text : '1000'

                }
            ]
        },
        {
            parentForm : 1,
            name : 'chooserFormat_form1',
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
            name : 'chooserNumberSheets_form1',
            head : 'Количество листов',
            value : '20',
            options : [
                {
                    value : '20',
                    text : '20 листов'

                },
                {
                    value : '32',
                    text : '32 листа'

                },
                {
                    value : '40',
                    text : '40 листов'

                },
            ]
        },
    ],
    checkboxs : [
        {
            parentForm : 1,
            type : 'checkbox',
            name : 'red_form1',
            labelText : 'Красная обложка',
            checked : false
        },
        {
            parentForm : 1,
            type : 'checkbox',
            name : 'cmyk_form1',
            labelText : 'CMYK',
            checked : false
        },
        {
            parentForm : 1,
            type : 'checkbox',
            name : 'varnish_form1',
            labelText : 'Уф-лак',
            checked : false
        }
    ]
};