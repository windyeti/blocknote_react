export default function reducerGetForms(state = {arrayForms : []}, action) {
    switch(action.type) {
        case 'FETCH_FORMS' :
            state = {...state, arrayForms : action.payload};
    }
    return state;
}