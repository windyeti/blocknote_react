export  default function reducerGetCheckboxs(state = {}, action) {
    switch (action.type) {
        case 'FETCH_CHECKBOXS' :
            state = { ...state, checkboxs : action.payload}
    }
    return state;
}