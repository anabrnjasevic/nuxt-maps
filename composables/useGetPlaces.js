export const useGetPlaces=async()=> {
  const {data:id} = useNuxtData('id')
  const  {data}   = await useFetch('/api/getPlaces',{
    method: 'POST',
    body: {
      id:id.value.id
    },
    key: 'places'
  }
  );
  const places=(toRaw(data.value))

      return places
}
