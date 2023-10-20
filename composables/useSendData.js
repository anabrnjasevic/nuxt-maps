
export const useSendData=async()=> {
  
    const location = useLocation();
    const place_type= useType();
    const date = useDate();
    
  
    const  {data}   = await useFetch('/api/sendData',{
      method: 'POST',
      body: {
        location:location.value,
        place_type:place_type,
        date:date.value
      },
      key:'id'
     
    });
    
    const id=toRaw(data.value).id
    
        return id
  }
  