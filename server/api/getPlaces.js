export default defineEventHandler(async (event)=>{
   
    const setId= await readBody(event)
    
    const  data  = await $fetch(`${process.env.BACKEND_URL}/v1/places/${setId.id}`)
       
        return data
    
})