import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { AMBestRating, Groups, RiderFee, StrategyFee, SurrenderYear } from '../demo/api/filter';
import {
    Datum,
    ProductDetails,
    ProductDetail,
    ProductChildDetail,
} from '../demo/api/product';
import { BenefitcalculatorService } from '../demo/service/benefitcalculator.service';
import { NodeService } from '../demo/service/node.service';
import { ProductService } from '../demo/service/product.service';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    selectedtab: string = 'Sidebar';
    files1: any[] = [];
    countries: any[] = [];
    model: any[] = [];

    cities: any[] = [];

    selectedCity1: any;

    selectedCountries: any[] = [];
    selectedShort: any = 'Withdrawal Amount';
    categories: any[] = [];
    selectedCategory: any = null;
    product: ProductDetails[] = [];

    datum: Datum[] = [];
    productlist: any;

    amBestRating: AMBestRating[] = [];
    riderFee: RiderFee[] = [];
    surrenderYear: SurrenderYear[] = [];
    strategyFee: StrategyFee[] = [];
    groups: Groups[] = [];

    //root: Root[] = [];

    ProductDetail: ProductDetail[] = [];
    ProductChildDetail: ProductChildDetail[] | undefined;
    constructor(
        public layoutService: LayoutService,
        private nodeService: NodeService,
        private productService: ProductService,
        private benefitcalculatorService: BenefitcalculatorService
    ) {}

    ngOnInit() {


        this.benefitcalculatorService.getProductsDetails().subscribe((data) => {
            this.groups = data;
              console.log(this.groups,"groups");
              
        });

        this.benefitcalculatorService.getProductDetails().subscribe((data) => {
            var mainArray = [];
            var datalist = data as ProductDetail[];
            var companyid = [];
            for (let i = 0; i < datalist.length; i++) {
                var objcompany = {
                    companyid: datalist[i].companyid,
                    companyname: datalist[i].companyName,
                };
                companyid.push(objcompany);
            }

            var unique = [
                ...new Map(
                    companyid.map((companyid) => [
                        companyid['companyid'],
                        companyid,
                    ])
                ).values(),
            ];

            for (let i = 0; i < unique.length; i++) {
                var objdatalist = datalist.filter(
                    (x) => x.companyid === unique[i].companyid
                );
                var childrens = [];
                for (let j = 0; j < objdatalist.length; j++) {
                    var chaildobj1 = {
                        data: objdatalist[j].name,
                        key: objdatalist[j].productid,
                        label: objdatalist[j].name,
                    };
                    childrens.push(chaildobj1);
                }

                var obj1 = {
                    children: childrens,
                    data: unique[i].companyname,
                    key: unique[i].companyid,
                    label: unique[i].companyname,
                };
                console.log('mainobj', obj1);
                mainArray.push(obj1);
            }
            this.productlist = mainArray;
        });

        // this.benefitcalculatorService
        //     .getProductDetails()
        //     .subscribe((data: any) => {
        //         //  this.product = data
        //         {
        //            this.files1 = data?.reduce(
        //                 (node: any, block: any) => ({
        //                     ...node,
        //                     [block?.companyName]: [
        //                         ...(node[block?.companyName] || []),
        //                         block,
        //                     ],
        //                 })
        //             );
        //             this.productlist= JSON.stringify(this.files1);

        //             }

        //     });

        this.benefitcalculatorService.getAMRatingDetails().subscribe((data) => {
            this.amBestRating = data;
        });
        this.benefitcalculatorService.getRiderFeeDetails().subscribe((data) => {
            this.riderFee = data;
        });
        this.benefitcalculatorService.getSurrenderYrDetails().subscribe((data) => {
            this.surrenderYear = data;
        });
        this.benefitcalculatorService.getStrategyFeeDetails().subscribe((data) => {
            this.strategyFee = data;
        });

     
        this.categories = [
            { name: 'Withdrawal Amount', key: 'A' },
            { name: 'Company Name', key: 'M' },
            { name: 'Prodct Name', key: 'P' },
        ];

        this.nodeService.getFiles().then((files) => (this.files1 = files));
        console.log('file', this.files1);
    }

    ontabSelect(status: string) {
        this.selectedtab = status;
    }
    onbackClick() {
        this.selectedtab = 'Sidebar';
    }
    shortby(val: any) {
        this.selectedShort = val.name;
    }
}
