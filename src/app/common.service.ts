import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from  '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL="http://localhost:3000/Student"
  regURL="http://localhost:3000/user"
  constructor(private _http:HttpClient) { }
  getStudentList(){
    return this._http.get(this.URL);
   }

   

    addStudent(data: any){

      return this._http.post(this.URL, data);

    }

 

    deleteStudent(id: any){

      return this._http.delete(`${this.URL}/${id}`)

    }

    getCurrentData(id: any){

      return this._http.get(`${this.URL}/${id}`)

    }

    updateStudent(id: any,data: any){

      return this._http.put(`${this.URL}/${id}`,data)

    }

   

    createUser(data: any){

      return this._http.post(this.regURL, data);

    }

    loginUser(email: string, password: string){

      return this._http.post(this.regURL,{

        email: email,

        password: password

      });

    }

  }




