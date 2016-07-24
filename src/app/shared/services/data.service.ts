// import { Contact, Customer } from './../models';
import { Contact } from './../models/contact';
import { Customer } from './../models/customer';

export class DataService {

  getCustomers(): Customer[] {
    let customers = [
      new Customer({
        "name": "Camera dei Deputati",
        "logo": "http://i58.tinypic.com/anejjm.png",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00162",
          "street": "piazza del Parlamento 2",
          "country": "Italy"
        },
        "customerDescription": "Sito web della Camera dei Deputati",
        "workingDescription": "Working on the main site, build with a custom CMS in Ruby on Rails, evolving and creating new functionalities. I am also working on the related webtv website (http://webtv.camera.it)",
        "website": "http://www.camera.it"
      }),
      new Customer({
        "name": "Senato della Repubblica",
        "logo": "http://www.mettiamociingioco.org/images/sito/logo_senato.png",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00162",
          "street": "via della Dogana Vecchia 10",
          "country": "Italy"
        },
        "customerDescription": "Sito web del Senato della Repubblica",
        "workingDescription": "Importing data from databases for starting actual project structures, maintenance and support for the customer",
        "website": "http://www.senato.it"
      }),
      new Customer({
        "name": "Comune di Milano",
        "logo": "http://www.fondazionemilano.eu/sites/all/files/Immagini/logo_trasparente.png",
        "addressInfo": {
          "city": "Milano",
          "zipcode": "00152",
          "street": "piazza Marino 2",
          "country": "Italy"
        },
        "customerDescription": "Sito web per lo streaming del Consiglio del Comune di Milano",
        "workingDescription": "I worked for the backend functionality for create single speaker contribution video by the main one. Also did something about interface",
        "website": "http://milano.videoassemblea.it/"
      }),
      new Customer({
        "name": "RomaFictionFest",
        "logo": "http://www.ilsussidiario.net/img/_THUMBWEB/Roma_fiction_fest_thumb400x275.jpg",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00345",
          "street": "Parco della Musica",
          "country": "Italy"
        },
        "customerDescription": "Il festival italiano dedicato al cinema per il piccolo schermo",
        "workingDescription": "Management of resource synchronization and frontend customizations",
        "website": "http://romafictionfest.com"
      }),
      new Customer({
        "name": "Neomobile",
        "logo": "http://www.jobmeeting.it/images/loghi-aziende/484x252/neomobile.png",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00213",
          "street": "via delle Milizie 11",
          "country": "Italy"
        },
        "customerDescription": "Gruppo internazionale che opera nel settore IT",
        "workingDescription": "A platform for creating an manage single website for mobile users, with a custom workflow",
        "website": "http://www.neomobile.com"
      }),
      new Customer({
        "name": "FitCisl",
        "logo": "http://www.normanno.com/N0rm4nn0/wp-content/uploads/2015/04/fit-cisl.jpg",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00987",
          "street": "via delle Botteghe Oscure 1",
          "country": "Italy"
        },
        "customerDescription": "Federazione Italiana Trasporti - Confederazione Italiana Sindacato dei Lavoratori",
        "workingDescription": "Support for the customer, and some frontend customizations",
        "website": "http://www.fitcisl.com"
      }),
      new Customer({
        "name": "Mipaaf",
        "logo": "http://www.aidic.it/icheap12/immagini/logo_mipaaf%20grande.jpg",
        "addressInfo": {
          "city": "Roma",
          "zipcode": "00786",
          "street": "via del Parlamento 32",
          "country": "Italy"
        },
        "customerDescription": "Ministero delle politiche agricole e forestali",
        "workingDescription": "Setup for the data support for the webtv",
        "website": "http://webtv.awsteleippica.com/"
      })
    ];
    return customers;
  }

  getContact(): Contact {
    let myself = new Contact({
      "name": "Giorgio",
      "surname": "Bruschini",
      "email": "giorgio.bruschini@gmail.com",
      "languages": ["Ruby on Rails", "Python", "Java", "PHP", "Asp"],
      "weblinks": ["www.linkedin.com", "www.twitter.com"],
      "phoneNumber": "3294096027",
      "birthDate": "08/06/1983",
      "location": {
        "city":"Nettuno",
        "street":"via Colombo 3",
        "country":"Italy",
        "zipcode":"00048"
      }
    });
    return myself;
  }

}
