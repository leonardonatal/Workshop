import { Component, OnInit } from '@angular/core';
import { CnpjService } from '../../providers/cnpj.service';
import {Pipe, PipeTransform} from "@angular/core";




@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [
    	CnpjService	
    ]
})
export class BlankPageComponent implements OnInit {



	public lista_info = new Array<any>();

    constructor(private cnpjService: CnpjService) {}

    setCNPJ(val){
    	this.cnpjService.setCNPJ(val);
    }

    getCNPJ(){
    	this.cnpjService.getCNPJ().subscribe(
    			data=>{
  				const response = (data as any);
  				this.lista_info.push(response);
  				console.log(response);
  				},error=>{
            	console.log(error);
        		}
			)
    }

    ngOnInit() {
   
    		
	}
}
