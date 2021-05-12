import { Component, OnInit } from '@angular/core';
import { Clincal_Utility } from '../clincal-utility';
import {ClinicDataService} from '../clinic-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clincal_services:Clincal_Utility[] = [];

  constructor(private clinicDataService:ClinicDataService) { }

  ngOnInit(): void {
    this.getClincalServices();
  }

  getClincalServices():void{
    this.clincal_services = this.clinicDataService.getClinicalServices();
  }

}
