   import axios from 'axios'

   const api='http://localhost:8888'
   const getproj=()=>axios.get(`${api}/projects/all`)
   const getprojbyId=()=>axios.get(`${api}/projects${id}`)
   const addproject=(projectdata)=>axios.post(`${api}/projects/add`,projectdata)
   const editproj=(id,projectdata)=>axios.post(`${api}/projects/edit/${id}`,projectdata)
   const deleteproj=(id)=>axios.delete(`${api}/projects/delete/${id}`)

   export {getproj,getprojbyId,addproject,editproj,deleteproj};