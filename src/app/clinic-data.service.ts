import { Injectable } from '@angular/core';
import{Clincal_Utility} from './clincal-utility';
import {CLINCAL_SERVICES} from './clinic-data';

@Injectable({
  providedIn: 'root'
})
export class ClinicDataService {

  constructor() { }

  getClinicalServices(): Clincal_Utility[] {
    return CLINCAL_SERVICES;
  }
}
