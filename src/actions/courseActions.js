import CourseApi from '../api/mockCourseApi';

export function loadCourseSuccess(courses){
    return {type:'CREATE_COURSE',courses};
}

export function loadCourses(){
    return function(dispatch){
        return CourseApi.getAllCourses().then(courses=>{
            dispatch(loadCourseSuccess(courses));
        }).catch(error=>{
            throw(error);
        });
    };
}