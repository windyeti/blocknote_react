const initialStore = null;

export default function reducerSetThumblainActive(state = initialStore, action) {
    if( action.type = 'SET_THUMBNAIL_ACTIVE' ) {
        state = action.payload;
    }
    console.log('state', state);
    return state
}