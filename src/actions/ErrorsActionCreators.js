import {
  REQUEST_ERROR_HAS_BEEN_READ,
} from '../constants';


let ErrorsActionCreators = {

  markErrorshasBeenRead() {
    return (dispatch) =>{
      dispatch({type: REQUEST_ERROR_HAS_BEEN_READ})
    }
  },


};

export default ErrorsActionCreators;
