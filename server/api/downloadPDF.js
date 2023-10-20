export default defineEventHandler(async(event)=>{

    const {id}= await readBody(event)
    
    const  response  = await $fetch(`${process.env.BACKEND_URL}/v1/pdf/${id}`)
    
   return  response
})