import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


export const startCapture = (datas) => dispatch => {
    return (
        //dispatch(startCaptureSuccess(datas)),
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
