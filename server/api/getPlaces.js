export default defineEventHandler(async (event)=>{
   
    const setId= await readBody(event)
    const config = useRuntimeConfig()
    
    const  data  = await $fetch(`${config.public.BACKEND_URL}/v1/places/${setId.id}`)
       
        return data
    
})