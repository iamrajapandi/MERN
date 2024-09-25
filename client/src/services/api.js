   import axios from 'axios'

   const api='https://66e527635cc7f9b6273c7026.mockapi.io'
   const getproj=()=>axios.get(`${api}/project`)
   const getprojbyId=()=>axios.get(`${api}/project${id}`)
   const addproject=(projectdata)=>axios.post(`${api}/project`,projectdata)
   const editproj=(id,projectdata)=>axios.post(`${api}/project/${id}`,projectdata)
   const deleteproj=(id)=>axios.delete(`${api}/project/${id}`)

   export {getproj,getprojbyId,addproject,editproj,deleteproj};