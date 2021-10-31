import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from '../entities/modeles';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //username = sessionStorage.getItem('username');
  //password = sessionStorage.getItem('password');
  urlProviders = environment.urlProviders;
   //urlProviders = 'http://127.0.0.1:8086/amsApi/providers';
  provider: any;
  constructor(private Http: HttpClient) { }
  listProviders() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.get(this.urlProviders + '/list',{headers});
    return this.Http.get(this.urlProviders + '/list');
  }
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.post(this.urlProviders + '/add', this.provider,{headers});
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }
  updateProvider(myObj: any) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj,{headers});
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  deleteProvider(myObj: any) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.delete(this.urlProviders + '/' + myObj['id'], {headers});
    return this.Http.delete(this.urlProviders + '/' + myObj['id']);
  }
  getProvider(id: any){
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.get(this.urlProviders + '/' + id,{headers})
    return this.Http.get(this.urlProviders + '/' + id);
  }
}
