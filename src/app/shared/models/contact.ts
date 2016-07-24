import { Address } from './address';

export class Contact {
    name: string;
    surname: string;
    birthDate: string;
    location: Address;
    phoneNumber: string;
    email: string;
    webLinks: string[];
    languages: string [];

    constructor(obj: any) {
        this.name = obj.name;
        this.surname = obj.surname;
        this.birthDate = obj.birthDate;
        this.phoneNumber = obj.phoneNumber;
        this.email = obj.email;
        this.webLinks = obj.webLinks;
        this.languages = obj.languages;
        this.location = obj.location;
    }
}