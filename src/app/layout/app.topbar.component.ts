import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";


interface Test {
    name: string,
}
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls:['./app.topbar.component.scss']
})

export class AppTopBarComponent {

    items!: MenuItem[];
    valRadio: string = '';
    valRadio1: string = '';
    value1?: number;
    spage?: number;
    date?: number;
    date1?: Date;
    cities: Test[];
    selectedCity?: Test;
    currency?: number;
    Monthly?: boolean = true;
    val2?: number;
    selected?: boolean;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { 
        this.cities = [
            {name: 'Test1'},
            {name: 'Test2'},
            {name: 'Test3'}
        ];
    }
    
}
