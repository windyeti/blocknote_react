export default function reducerSetIdActiveFrom(state = null, action)
{
    switch(action.type) {
        case 'SET_ID_ACTIVE_FORM' :
            state = {...state, idActiveForm : action.payload};
    }
    return state;
}