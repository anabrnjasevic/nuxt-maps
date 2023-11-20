export default defineEventHandler(async (event)=>{
   
        const { location,place_type,date } = await readBody(event)
        const config = useRuntimeConfig()
       
        
          
        const id= await $fetch(`${config.public.BACKEND_URL}/v1/places`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: {
                location:location,
                place_type:place_type,
                date:date
              }
              
            })
            
            return id
        
        })