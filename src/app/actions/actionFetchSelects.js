export default function actionFetchSelects(arrSelects)
{
    return {
        type : 'FETCH_SELECTS',
        payload : arrSelects
    };
}