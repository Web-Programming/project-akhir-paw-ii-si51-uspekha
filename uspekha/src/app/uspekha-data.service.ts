import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pasien } from './pasien/pasien.component';
import { Dokter } from "./dokter/dokter.component";

@Injectable({
    providedIn: 'root'
})
export class UspekhaDataService{
    constructor(private http:HttpClient) { }

    private apiBaseUrl = 'http://localhost:3000/api';

    public getListPasien(): Promise<Pasien[]>{
        const url: string =`${this.apiBaseUrl}/pasien`;
        return this.http
            .get(url)
            .toPromise()
            .then(Response => Response as Pasien[])
            .catch(this.handleError);
    }

    public getListDokter(): Promise<Dokter[]> {
        const url: string = `${this.apiBaseUrl}/surat`; //apiurl/surat
        return this.http.get(url).toPromise().then(response => response as Dokter[]).catch(this.handleError);
      }


    private handleError(error:any): Promise<any>{
        console.error('Something has Gone wrong', error);
        return Promise.reject(error.message || error);
    }
}