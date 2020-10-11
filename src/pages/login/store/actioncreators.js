import axios from 'axios';

export const yanzheng=()=>{

    return{
        type:"yanzhng",
        value:true
    }

}

export const submintaccount=(account,pwd)=>{



    return (dispatch)=>{


        axios.get("/api/login.json?account="+account+"&password="+pwd).then((res)=>{
            const result=res.data.data;

            if(result){

                const action=yanzheng(result);
                dispatch(action);


            }else{
                alert("shibai");
            }

        })

    }




}

export const logout=()=>{
    return{
        type:"logout",
        value:false
    }
}