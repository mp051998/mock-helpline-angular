import axios from "axios";

export class UserCasesService {

  requestSupportByEmail(name: string, email: string, note?: string) {
    const requestData = {
      name: name,
      email: email,
      note: note
    };
    return axios.post("http://localhost:3000/user/cases/email", requestData);
  }

  requestSupportByPhone(name: string, phone: string, note?: string) {
    const requestData = {
      name: name,
      phone: phone,
      note: note
    };
    return axios.post("http://localhost:3000/user/cases/phone", requestData);
  }

}
