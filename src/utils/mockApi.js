import axios from 'axios';

const API_URL = 'http://localhost:5000/api/messages';

export const getMessages = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMessage = async (message) => {
  const response = await axios.post(API_URL, message);
  return response.data;
};

export const updateMessage = async (id, updatedContent) => {
  const response = await axios.put(`${API_URL}/${id}`, { content: updatedContent });
  return response.data;
};

export const deleteMessage = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const likeMessage = async (id) => {
  const response = await axios.post(`${API_URL}/${id}/like`);
  return response.data;
};
