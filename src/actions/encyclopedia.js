import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';


export const getAllBirds = () => dispatch => {
    const ref = firebase.database().ref("birds/");
    ref.on('value', snapshot => {
        dispatch({
            type: 'SAVE_ALL_BIRDS',
            payload: snapshot.val(),
        })
     });
}

export const setSelectedBird = (bird) => dispatch => {
    dispatch({
        type: 'SAVE_SELECTED_BIRD',
        payload: bird,
    })
    dispatch(NavigationActions.navigate({ 
        routeName: 'Bird',
        params:{title: bird.common_name}
    })) 
}

