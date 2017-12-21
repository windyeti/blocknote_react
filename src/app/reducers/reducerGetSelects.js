export default function reducerGetSelects(state = {selects : []}, action) {
    switch(action.type) {
        case 'FETCH_SELECTS' :
            state = {...state, selects : action.payload};
    }
    return state;
}