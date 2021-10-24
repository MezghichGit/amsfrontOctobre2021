import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../entities/modeles';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = environment.urlProviders;
   //urlProviders = 'http://127.0.0.1:8086/amsApi/providers';
  provider: any;
  constructor(private Http: HttpClient) { }
  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }
  updateProvider(myObj: any) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  deleteProvider(myObj: any) {
    return this.Http.delete(this.urlProviders + '/' + myObj['id'], myObj)
  }
  getProvider(id: any){
    return this.Http.get(this.urlProviders + '/' + id)
  }
}
