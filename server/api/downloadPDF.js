export default defineEventHandler(async(event)=>{

    const {id}= await readBody(event)
    const config = useRuntimeConfig()
    
    const  response  = await $fetch(`${config.public.BACKEND_URL}/v1/pdf/${id}`)
    
   return  response
})