export default defineEventHandler(async (event)=>{
   
    const {id}= await readBody(event)
    const config = useRuntimeConfig()
    
    const  data  = await $fetch(`${config.public.BACKEND_URL}/v1/directions/${id}`)
       
        return data
    
})