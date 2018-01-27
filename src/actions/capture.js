import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


const validateCaptureInfos = (method, lat, lng) => {
    errorList = []
    if(!method) errorList.push('Vous devez fournir une méthode de capture')
    if(!lat) {
        errorList.push('Vous devez fournir une latitude')
    } else if(!lat.match(/^-?[0-9]+(.?[0-9]+)?$/)) {
        errorList.push('Vous devez fournir une latitude au format 222.000 ou 222000')
    }
    if(!lng) {
        errorList.push('Vous devez fournir une longitude')
    } else if(!lng.match(/^-?[0-9]+(.?[0-9]+)?$/)) {
        errorList.push('Vous devez fournir une longitude au format 222.000 ou 222000')
    }
    
    return errorList;
}

const validateBirdInfos = (bague, latin_name, alaire, weight, fat, sex, age) => {
    errorList = []
    if(!bague) errorList.push('Vous devez fournir le numéro de bague')
    if(!latin_name) {
        errorList.push('Vous devez fournir le nom latin')
    } else if(!latin_name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        errorList.push('Vous devez fournir un nom binomial (Birdus Birdus)')
    }
    if(!alaire) {
        errorList.push('Vous devez fournir la longueur alaire')
    } else if(!alaire.match(/^[0-9]+(.?[0-9]+)?$/)) {
        errorList.push('Vous devez fournir une longueur alaire numérique comme 21 ou 23.55')
    }
    if(!weight) {
        errorList.push('Vous devez fournir le poids')
    } else if(!weight.match(/^[0-9]+(.?[0-9]+)?$/)) {
        errorList.push('Vous devez fournir un poids avec une valeur numérique comme 21 ou 23.55')
    }
    if(!fat) {
        errorList.push('Vous devez fournir l\'indice d\'adiposité')
    } else if(!fat.match(/^[0-9]+(.?[0-9]+)?$/)) {
        errorList.push('Vous devez fournir un indice d\'adiposité avec une valeur numérique comme 21 ou 23.55')
    }
    if(!sex) errorList.push('Vous devez fournir le sexe')
    if(!age) {
        errorList.push('Vous devez fournir l\'âge')
    } else if(!age.match(/^[0-9]+$/)) {
        errorList.push('Vous devez fournir l\'âge avec une valeur numérique entière')
    }
    
    return errorList;
}

export const startCapture = ({date, method, lat, lng, uid}) => dispatch => {
    let validationErrors = validateCaptureInfos(method, lat, lng);
    if(validationErrors != false) {
        return dispatch(validateCaptureFail(validationErrors));
    }
    validationErrors = []
    firebase.database().ref("capture_sessions/" + date).set({
        uid: uid,
        method: method,
        place: {
            lat: lat,
            lng: lng,
        },
    })
    return (
        dispatch(validateCaptureFail(validationErrors)),
        dispatch(startCaptureSuccess(date)),
        dispatch(NavigationActions.navigate({ routeName: 'IndividualCapture' }))
    )
}

export const saveBird = (bird, navigation) => dispatch => {
    let validationErrors = validateBirdInfos(bird.bague, bird.latin_name, bird.alaire, bird.weight, bird.fat, bird.sex, bird.age);
    if(validationErrors != false) {
        return dispatch(validateBirdFail(validationErrors));
    }
    firebase.database().ref('single_captures').push(bird)
        .then((response) => {
            return (
                dispatch(saveBirdSuccess(bird)),
                navigation.goBack()
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