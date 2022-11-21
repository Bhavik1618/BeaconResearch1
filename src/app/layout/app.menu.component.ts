import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../demo/service/node.service';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    selectedtab: string = 'Sidebar';

    files1: TreeNode[] = [];
    countries: any[] = [];
    model: any[] = [];

    cities: any[] = [];

    selectedCity1: any;

    selectedCountries: any[] = [];
selectedShort: any ="Withdrawal Amount";
    categories: any[] = [];
    selectedCategory: any = null;

    constructor(
        public layoutService: LayoutService,
        private nodeService: NodeService
    ) {}

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' },
        ];

        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' },
        ];

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];

        this.categories = [
            { name: 'Withdrawal Amount', key: 'A' },
            { name: 'Company Name', key: 'M' },
            { name: 'Prodct Name', key: 'P' },
        ];

        this.nodeService.getFiles().then((files) => (this.files1 = files));
    }

    ontabSelect(status: string) {
        this.selectedtab = status;
    }
    onbackClick() {
        this.selectedtab = 'Sidebar';
    }
    shortby(val: any){
      this.selectedShort =  val.name;
    }
}