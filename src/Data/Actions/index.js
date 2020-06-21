import CONSTANS from '../Constans';

const Request = () => ({type: CONSTANS.DATA_GET_REQUEST});
const Success = (info) => ({type: CONSTANS.DATA_GET_SUCCESS,info});
const Failure = (error) =>({type: CONSTANS.DATA_GET_FAILURE,error});

export default {
    Request,
    Success,
    Failure
}