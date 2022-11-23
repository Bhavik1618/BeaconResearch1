import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ProductDetails } from '../api/product';

@Injectable({
    providedIn: 'root',
})
export class BenefitcalculatorService {
    env = environment.apiroot;
    constructor(private http: HttpClient) {}

    getProductsDetails() {
      debugger
      return this.http.get<any>(this.env + 'Filters/GetGroups');
  }

    getProductDetails() {
        return this.http.get<any>(this.env + 'Filters/GetProducts');
    }

    getAMRatingDetails() {
        debugger;
        return this.http.get<any>(this.env + 'Filters/GetAMBest');
    }

    getSurrenderYrDetails() {
        debugger;
        return this.http.get<any>(this.env + 'Filters/GetSurrenderYr');
    }

    getRiderFeeDetails() {
        debugger;
        return this.http.get<any>(this.env + 'Filters/GetRiderFee');
    }

    getStrategyFeeDetails() {
        debugger;
        return this.http.get<any>(this.env + 'Filters/GetStrategyFee');
    }
}
