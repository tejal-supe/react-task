import axios from "axios";
import api from "../config/apiConfig.json"

export const fetchUserData = async () => {
    const res = await axios.get(api.getUser);
    return res.data;
  };