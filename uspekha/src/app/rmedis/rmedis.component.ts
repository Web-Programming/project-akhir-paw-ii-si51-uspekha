import { Component, OnInit } from '@angular/core';
import { UspekhaDataService } from '../uspekha-data.service';

export class Rmedis {
  '_id': string;
  'no_rekam_medis': string;
  'tanggal': any;
  'nama_pasien': string;
  'keluhan': string;
  'diagnosis': string;
  'jenis_pengobatan': string;
}


@Component({
  selector: 'app-rmedis',
  templateUrl: './rmedis.component.html',
  styleUrls: ['./rmedis.component.css']
})
export class RmedisComponent implements OnInit {
  constructor(private uspekhaDataService: UspekhaDataService) { }
  
  public listRmedis: Rmedis[] = []

  public getListRmedis(): void {
    this.uspekhaDataService.getListRmedis().then(response => this.listRmedis = response)
  }
  
  ngOnInit(): void {
    this.getListRmedis();
  }

}
