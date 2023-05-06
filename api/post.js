import { Request } from '../helper/http';
import { getStorage, setStorage } from '../helper/storage';
var request = new Request;
export class PostApi {
  async posts() {
    const user = await getStorage('user');
    console.log("token", user.token)
    request = new Request(user.token);
    return request.get(`posts`);
  }
  async uploadPost(post){
    let uploaderToken = await getStorage('user')
    request = new Request(uploaderToken.token)
    console.log("POSTS: ", post)
    return request.post(`post`, post)
  }
}