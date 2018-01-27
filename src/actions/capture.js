import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


const validateCaptureInfos = (method, lat, lng) => {
    errorList = []
    if(!method) errorList.push('Vous devez fournir une méthode de capture')
    if(!lat) errorList.push('Vous devez fournir une latitude')
    if(!lng) errorList.push('Vous devez fournir une longitude')
    
    return errorList;
}

const validateBirdInfos = (bague, latin_name, alaire, weight, fat, sex, age) => {
    errorList = []
    if(!bague) errorList.push('Vous devez fournir le numéro de bague')
    if(!latin_name) errorList.push('Vous devez fournir le nom latin')
    if(!alaire) errorList.push('Vous devez fournir la longueur alaire')
    if(!weight) errorList.push('Vous devez fournir le poids')
    if(!fat) errorList.push('Vous devez fournir l\'indice d\'adiposité')
    if(!sex) errorList.push('Vous devez fournir le sexe')
    if(!age) errorList.push('Vous devez fournir l\'âge')
    
    return errorList;
}

export const startCapture = ({date, method, lat, lng, uid}) => dispatch => {
    let validationErrors = validateCaptureInfos(method, lat, lng);
    if(validationErrors != false) {
        return dispatch(validateCaptureFail(validationErrors));
    }
    console.log(uid, method, lat, lng)
    firebase.database().ref("capture_sessions/" + date).set({
        uid: uid,
        method: method,
        place: {
            lat: lat,
            lng: lng,
        },
    })
    return (
        dispatch(startCaptureSuccess(date)),
        dispatch(NavigationActions.navigate({ routeName: 'IndividualCapture' }))
    )
}

export const saveBird = (bird) => dispatch => {
    let validationErrors = validateBirdInfos(bird.bague, bird.latin_name, bird.alaire, bird.weight, bird.fat, bird.sex, bird.age);
    if(validationErrors != false) {
        return dispatch(validateBirdFail(validationErrors));
    }
    firebase.database().ref('single_captures').push(bird)
        .then((response) => {
            return (
                dispatch(saveBirdSuccess(response.key))
            )
        }).catch((error) => {
            console.log(error)
        })
}

export const startCaptureSuccess = (payload) =>  {
    return {
        type: 'START_CAPTURE',
        payload,
    }
}

export const saveBirdSuccess = (payload) =>  {
    return {
        type: 'SAVE_BIRD',
        payload,
    }
}

export const validateCaptureFail = (errorList) => {
    return {
        type: 'VALIDATE_FAIL',
        errorList
    }
}

export const validateBirdFail = (errorList) => {
    return {
        type: 'VALIDATE_FAIL',
        errorList
    }
}