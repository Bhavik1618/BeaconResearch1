export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}
export interface GridData {
    riderNamwe: string,
    annuityName: string,
    riderAge: string,
    riderFee: string,
    rollUp: string,
    rollUpPeriod: string,
    bonus: string,
    benefitBase: string,
    withdrawal: string,
    monthly: string
    }
