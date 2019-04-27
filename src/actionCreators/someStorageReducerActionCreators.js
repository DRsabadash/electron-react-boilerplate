import { success, request, error } from '../actions/NetworkActions';
//import { actionA, actionB, actionC } from '../actions/storageActions';


//Network reducers/actions are meant to be supplimentary to other reducers and actions, namely ones that deal with network requests.
//This means they do not need their own action creators, but can be used in all other action creators, alongside network requests.
//These actions can be used to track the state of the network request, REQUESTED->SUCCESS|ERROR, and pass along the error message to
//the reducer's state. These messages will be available in the console if redux-devtools is used, and can also be accessed either
//through this.props.{boundNetworkReducer}.error, or through catching the rejected promise and using it's error parameter.
//Keep in mind that depending on how your API returns error messages or statuses, anything not in the 'ok' status range, axios will
//promise-reject, so your error will contain the status and message e.g "500 Internal server error".

/*
export const someStorageActionCreator = (payload) => (dispatch) => {
  const { REQUEST_DATA, STORE_DATA } = reducerTypes;
  dispatch(request(REQUEST_DATA));
  return axios.get(
      SOME_API_URL
      {
        params: 
          {
            someParamName: payload
          },
        headers: someHeader
      }
    )
      .then((response) => {
        dispatch(success(REQUEST_DATA));
        dispatch(storeData(STORE_DATA, response.data));
        return response;
      })
      .catch((error) => {
          dispatch(error(REQUEST_DATA, error.message));
          return Promise.reject(error);
      })
}
*/

/**
 * meanwhile in some component somewhere...

 const onClickHandler = () => {
       try {
      this.props.someStorageActionCreator(someResource)
    } 
    catch(e) {
      //do something with e
    }
 }

 */