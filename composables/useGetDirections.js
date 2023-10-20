export const useGetDirections=async()=> {
    const {data:id} = useNuxtData('id')
    const  {data }  = await useFetch('/api/getDirections',{
      method: 'POST',
      body: {
        id:id.value.id
      },
      key: 'directions'
    });
    const location=(toRaw(data.value))
    
  return location
}