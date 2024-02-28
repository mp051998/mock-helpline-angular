import axios from "axios";

export class UserCasesService {

  insertUserCasePhone(name: string, phone: string, note?: string) {
    const requestData = {
      name: name,
      phone: phone,
      note: note
    };
    return axios.post("http://localhost:3000/user/cases", requestData);
  }

}
