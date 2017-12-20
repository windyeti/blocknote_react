export default function actionSetIdActiveForm(idForm)
{
    const id = Number(idForm);
    return {
        type : 'SET_ID_ACTIVE_FORM',
        payload : id
    };
}