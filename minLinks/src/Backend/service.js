import axios from 'axios';

const API_URL = "http://localhost:9191";

export const saveLink = (link) => {
  return axios.post(`${API_URL}/generate`, link);
};

export const getAllLinks = () => {
  return axios.get(`${API_URL}/minLinks`);
};
export const getLinkById=(id)=>{
  return axios.get(`${API_URL}/getById/${id}`)
}
export const editLink=(link,id)=>{
  return axios.put(`${API_URL}/edit/${id}`,link)
}
export const deleteLink=(id)=>{
  return axios.delete(`${API_URL}/delete/${id}`)
}
