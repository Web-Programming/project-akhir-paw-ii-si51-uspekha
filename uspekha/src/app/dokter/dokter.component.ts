import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { UspekhaDataService } from '../uspekha-data.service';


export class Dokter {
  '_id': string;
  'nama': string;
  'jenis_kelamin': string;
  'umur': string;
  'spesialis': string;
  'alamat': string;
  'no_tlpn': string;
}

@Component({
  selector: 'app-dokter',
  templateUrl: './dokter.component.html',
  styleUrls: ['./dokter.component.css']
})
export class DokterComponent implements OnInit {
  constructor(private uspekhaDataService: UspekhaDataService) { }

  public listDokter: Dokter[] = []

  public getListDokter(): void {
    this.uspekhaDataService.getListDokter().then(response => this.listDokter = response)
  }
  
  
  ngOnInit(): void {
    this.getListDokter();
  }
  

}
