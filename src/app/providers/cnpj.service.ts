import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  private cnpj: string = "";	

  constructor(public http: HttpClient) { }


   setCNPJ(cnpj:string){
  	this.cnpj = cnpj;
  }

  getCNPJ(): any{
  return this.http.get("https://www.receitaws.com.br/v1/cnpj/" + this.cnpj);
}

}
