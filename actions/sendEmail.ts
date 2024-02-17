"use server";
import {Resend} from "resend"
import  {validateString} from "@/lib/utils"
import {getErrorMessage} from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    //server side validation
    if(!validateString(senderEmail, 500)){
        return{
            statusCode: 400,
            body: "Invalid sender email"
        }
    }

    if(!validateString(message, 5000)){
        return {
            statusCode: 400,
            body: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.com>",
            to: "yadavchirag9009@gmail.com",
            subject: "Message from Contact Form",
            reply_to: senderEmail as string,
            text:message as string,
        })
        // console.log("Email sent")
    } catch (error:unknown) {
        console.log(getErrorMessage(error))
        return {
            error:getErrorMessage(error)
        }
    }
    
}
