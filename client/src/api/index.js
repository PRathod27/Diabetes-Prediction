import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})
API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;   
})
export const login = (authData) => API.post('/user/login',authData);


export const signup = (authData) => API.post('/user/signup',authData);
// export const postQuestion = (questionData) => API.post('/questions/Ask',questionData)   
// export const getAllQuestions = () => API.get('/questions/get');
// export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
// export const postAnswer =(id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answers/post/${id}`,{noOfAnswers,userAnswered,answerBody,userId})
// export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`, {id, answerId, noOfAnswers})
// export const voteQuestion = (id,value, userId ) => API.patch(`/questions/vote/${id}`, {value, userId } )
// export const fetchAllusers = () => API.get('/user/getAllUsers');
// export const updateProfile = (id,updateData) => API.patch(`/user/update/${id}`,updateData)