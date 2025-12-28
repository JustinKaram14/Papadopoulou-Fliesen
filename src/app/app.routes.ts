import { Routes } from '@angular/router';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'SP-Fliesen | Fliesenleger im Großraum Bühlertal'
  },
  {
    path: 'leistungen',
    component: ServicesComponent,
    title: 'Leistungen | SP-Fliesen'
  },
  {
    path: 'unternehmen',
    component: CompanyComponent,
    title: 'Unternehmen | SP-Fliesen'
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    title: 'Kontakt | SP-Fliesen'
  },
  {
    path: 'impressum',
    component: ImprintComponent,
    title: 'Impressum | SP-Fliesen'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
