import axios from "axios";

class Api {
  // 서버 연동 test
  async getData(url, params) {
    try {
      const response = await axios.get(url, { params });
      console.log(response.data);

      const result = await response.data;
      return result;
    } catch (err) {
      console.log("error");
    }
  }
}
export default Api;
