import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


const validateCaptureInfos = (method, lat, lng) => {
    errorList = []
    if(!method) errorList.push('Vous devez fournir une méthode de capture')
    if(!lat) errorList.push('Vous devez fournir une latitude')
    if(!lng) errorList.push('Vous devez fournir une longitude')
    
    return errorList;
}

export const startCapture = ({date, method, lat, lng}) => dispatch => {
    let validationErrors = validateCaptureInfos(method, lat, lng);
    if(validationErrors != false) {
        return dispatch(validateCaptureFail(validationErrors));
    }
    return (
        dispatch(startCaptureSuccess('prout')),
        dispatch(NavigationActions.navigate({ routeName: 'IndividualCapture' }))
    )
}

export const saveBird = (bird) => dispatch => {
    return (
        dispatch(saveBirdSuccess(bird)),
        dispatch(NavigationActions.goBack)
    )
}

export const startCaptureSuccess = (datas) =>  {
    return {
        type: 'START_CAPTURE',
        datas,
    }
}

export const saveBirdSuccess = (bird) =>  {
    return {
        type: 'SAVE_BIRD',
        bird,
    }
}

export const validateCaptureFail = (errorList) => {
    return {
        type: 'VALIDATE_CAPTURE_FAIL',
        errorList
    }
}