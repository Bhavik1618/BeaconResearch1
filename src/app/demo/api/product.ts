interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
    rating?: number;
}

export interface ProductDetails {
    companyName: string;
    data: Datum[];
}

// export interface Child {
//     key: string;
//     label: string;
//     data: string;
// }

export interface Datum {
    id: number;
    productid: number;
    companyName: string;
    name: string;
    companyid: number;
}
// export interface  Root
// {
//     datum : Datum[]
// }


export interface ProductDetail {
    id: number,
    productid: number,
    companyName: string,
    name: string,
    companyid: number
}

export interface ProductChildDetail {
    data: string,
    key: string,
    label: string,
}