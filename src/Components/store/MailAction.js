import { useSelector } from "react-redux";
import { mailAction } from "./MailSlice";
export const addMail=(mail)=>{
   
    const senderEmail = mail.from.replace("@","").replace(".",'')
    const receiverEmail = mail.to.replace("@","").replace(".","")

    return async(dispatch)=>{
        try{
        const response = await fetch(`https://mail-box-42f0f-default-rtdb.firebaseio.com/${senderEmail}.json`,{
            method : "POST",
            body : JSON.stringify({...mail }),
            headers : {
                'Content-Type':'application/json'
            }
        })

        if(senderEmail != receiverEmail){
            await fetch(`https://mail-box-42f0f-default-rtdb.firebaseio.com/${receiverEmail}.json`,{
                method : "POST",
                body : JSON.stringify({...mail }),
                headers : {
                    'Content-Type':'application/json'
                }
            })
        }

        const data = await response.json();
        console.log(data)

        if(response.ok){
            dispatch(
                mailAction.add({
                    id : data.name ,
                    ...mail
                })
            )
        }else{
            throw data.error
        }
    }catch(error){
        console.log(error.message)
    }

    const data1 = useSelector(state=>state.mail)
    console.log(data1)

    }
}

export const replacemail=(emailUrl , loggedInEmail)=>{
    return async(dispatch)=>{
        try{

            const res = await fetch(`https://mail-box-42f0f-default-rtdb.firebaseio.com/${emailUrl}.json`)

            const data = await res.json();

            if(res.ok){
                let mailData =[]

                for(let key in data){
                    mailData =[{id:key , ...data[key]} , ...mailData]
                }

                console.log("first time" , mailData)

                dispatch(
                    mailAction.replace({
                        mailData :mailData 
                       })
                )
            }else{
                throw data.error
            }

        }catch(error){
            console.log(error.message)
        }
    }
}