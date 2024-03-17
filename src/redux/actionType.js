import axios from 'axios'

import { GET_ERROR, GET_REQUEST, GET_SUCCESS, POST_ERROR, POST_REQUEST, POST_SUCCESS, UPDATE_ERROR, UPDATE_REQUEST, UPDATE_SUCCESS } from "./action";
 
        // post
   export const post_request=()=>({
        type:POST_REQUEST,

    })

  export  const post_success=()=>({
        type:POST_SUCCESS
    })

   export const post_failure=()=>({
        type:POST_ERROR
    })

      //get

      export const get_request=()=>({
        type:GET_REQUEST,
       

    })

  export  const get_success=(payload)=>({
        type:GET_SUCCESS,
        payload:payload
    })

   export const get_failure=()=>({
        type:GET_ERROR
    })


    // update action
    export const update_request=()=>({
      type:UPDATE_REQUEST,
     

  })

export  const update_success=(payload)=>({
      type:UPDATE_SUCCESS,
      payload:payload
  })

 export const update_failure=()=>({
      type:UPDATE_ERROR
  })


    // get request

    export const getTodo =()=>(dispatch)=>{
                
           dispatch(get_request())
           axios.get('http://localhost:8080/todos')
           .then((res)=>dispatch(get_success(res.data)))
           .catch((error)=>dispatch(get_failure()))

    }


    // post data

  export   const post_Todo=(payload)=>(dispatch)=>{

                dispatch(post_request())
                axios('http://localhost:8080/todos',{
                    method:"POST",
                    data:payload,
                    headers:{'Content-Type':'application/json'},

                }).then((res)=>dispatch(post_success()))
                .then(()=>dispatch(getTodo()))
                  .catch((error)=>dispatch(post_failure()))
    }



    // update func

    export const UpdateTodo=(id, payload)=>(dispatch)=>{
   
                          dispatch(update_request())
                          
                          axios.patch(`http://localhost:8080/todos/${id}`,payload,{
                            headers:{
                              'Access-Control-Allow-Origin':'*',
                            },
                          })
                          .then((res)=>dispatch(update_success(res)))
                          .then(()=>dispatch(getTodo()))
                          .catch((error)=>dispatch(update_failure()))
                          
    }