import axios from 'axios';
import handleRender from './handleRender';

const prefetchData = async (req, res, next) => {
  try {
    let internalData;
    try {
      internalData = await axios.get(`${process.env.API_URL}home/`);
      internalData = internalData.data;
    } catch (e) {
      internalData = {
        teamMembers: [],
      };
    }
    const initialState = {
      teamMembers: internalData.teamMembers,
    };
    handleRender(req, res, initialState);
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
