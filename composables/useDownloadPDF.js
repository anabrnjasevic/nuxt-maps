export const useDownloadPDF=async()=> {
  const {data:id} = useNuxtData('id')
    const  {data }  = await useFetch('/api/downloadPDF',{
      method: 'POST',
      body: {
        id:id.value.id
      },
        key: 'download'
      });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(data.value);
      a.download = 'downloaded-pdf.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href); // Clean up Blob URL
      
      
}