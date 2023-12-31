import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiurl = environment.baseUrl+'UserProfiles'

  constructor(private http:HttpClient) { }
  proceedSignup(usercred:any):Observable<any>{
    console.log(usercred);
    return this.http.post(this.apiurl+'/PostUserProfile',usercred)
  }

 update(userid:any,form:any){
  return this.http.put(this.apiurl+'/'+userid,form)
 }
  GetUsers(){
    return this.http.get(this.apiurl)
  }
  GetUserDetails(userid:any){
    return this.http.get(this.apiurl+'/'+userid)

  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
