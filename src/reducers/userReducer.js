import * as constants from '../constants/user';

const initialState = {
  isError:false,
  redireact:false,
  error:'',
  fname:'',
  lname:'',
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case constants.SIGN_UP_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case constants.SIGN_UP_FAIL:
      return Object.assign({},state,{isError:true,redireact:false});

    case constants.SIGN_IN_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case constants.SIGN_IN_FAIL:
      return Object.assign({},state,{isError:true,redireact:false});

    default:
      return state;
  }
}
