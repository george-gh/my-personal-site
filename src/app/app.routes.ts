import { RouterConfig, provideRouter } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';

const APP_ROUTES: RouterConfig = [
    {path: 'intro', component: IntroductionComponent},
    {path: 'works', component: WorksComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '', component: IntroductionComponent}
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];