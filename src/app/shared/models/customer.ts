import { Address } from './address';

export class Customer {
    name: string;
    logo: string;
    addressInfo: Address;
    customerDescription: string;
    workingDescription: string;
    website: string;

    constructor(obj: any) {
        this.name = obj.name;
        this.logo = obj.logo;
        this.addressInfo = obj.addressInfo;
        this.customerDescription = obj.customerDescription;
        this.workingDescription = obj.workingDescription;
        this.website = obj.website;
    }
}