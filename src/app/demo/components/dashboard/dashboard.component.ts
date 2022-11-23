import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { GridData } from '../../api/customer';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    checked: boolean = false;
    showmodel = false;
    items!: MenuItem[];
    
    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    griddata: GridData[] = [
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        },
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        },
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        },
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        },
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        },
        {
            riderNamwe: "Lifetime Income Benefit Rider",
            annuityName: "Advantage Gold",
            riderAge: "55 - 88",
            riderFee: "1.25%",
            rollUp: "6.00%",
            rollUpPeriod: " 10 Years",
            bonus: "5.00% Premium Bonus",
            benefitBase: "$232,000",
            withdrawal: "4.50%",
            monthly: "$10,540 Monthly"
        }
    ];
    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        // this.items = [
        //     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        //     { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        // ];
        // this.items = [{
           
            this.items = [{
                
                label: 'Compare',
                icon: 'bi bi-arrow-left-right',
                command: () => {
                    //this.update();
                }
            },
            {
                label: 'Illstration',
                icon: '"bi bi-file-richtext-fill',
                command: () => {
                   // this.delete();
                }
            },
            {
                label: 'Product Profile',
                icon: 'bi bi-files',
                command: () => {
                   // this.delete();
                }
            }
            ];
        //}
        // ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
    onHideShow() {

        this.showmodel = true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    update() {
        alert('Update test')
        //this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
    }

    delete() {
        alert('delete test')

        // this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
    }
}
