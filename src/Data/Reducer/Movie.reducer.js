
import CONSTANS from '../Constans';

const initialState = {

    movieInfo : [],
    loading :false,
    error : ""

}

const Movie = (state = initialState,action) => {
    switch(action.type){
        case(CONSTANS.DATA_GET_REQUEST):
            return{
                ...state,
                loading: true,
            }

        case(CONSTANS.DATA_GET_SUCCESS):
            return{
                ...state,
                movieInfo: action.info,
                loading: false,
                error: ''
            }

        case(CONSTANS.DATA_GET_FAILURE):
            return{
                ...state,
                loading: false,
                error: action.error,
                
            }
        default:
            return {...state}


    }
}


export default Movie


