import { Component, OnInit } from '@angular/core';
import { UspekhaDataService } from '../uspekha-data.service';

export class Pasien{
    '_id': string;
    'nama': string;
    'tgl_lahir': string;
    'tempat_lahir': string;
    'jenis_kelamin': string;
    'umur': any;
    'gol_darah': string;
    'tinggi_badan': string;
    'berat_badan': string;
    'alamat': string;
    'no_tlpn': string;
}

@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.component.html',
  styleUrls: ['./pasien.component.css']
})
export class PasienComponent implements OnInit{

  constructor(private uspekhaDataService: UspekhaDataService) { }

  public listpasien: Pasien[] = []

  public getListPasien(): void{
    this.uspekhaDataService
      .getListPasien()
      .then(Response => this.listpasien = Response)
  }

  ngOnInit():void{
    this.getListPasien();
    
  }
}
