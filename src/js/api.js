import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getData() {
  try {
    const res = await axios.get('/reviews');
    return res.data;
  } catch (error) {
    throw new Error('Not found');
  }
}

//=========================================================================

export async function createUser(obj) {
  const res = await axios.post('/requests', obj);
  return res.data;
}
