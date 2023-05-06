import { Request } from '../helper/http';
import { getStorage } from '../helper/storage';
var request = new Request;
export class UserApi {
  login(email, password) {
    return request.post('login', {email, password}).then(console.log(request));
    // console.log(request)
  }
  async logout() {
    const user = await getStorage('user').then(console.log(request));
    request = new Request(user.token);
    return request.post('logout');
    // console.log(request)
  }
  register(f_name, l_name, email, password){
    return request.post('register', {firstname: f_name, lastname: l_name, email: email, password: password}).then(console.log(request))
    // console.log(request)
  }
}