export default defineEventHandler(async (event)=>{
   
    const {id}= await readBody(event)
    
    const  data  = await $fetch(`${process.env.BACKEND_URL}/v1/directions/${id}`)
       
        return data
    
})