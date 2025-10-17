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
    title: 'Papadopoulos Fliesen | Fliesenleger im Grossraum Buehlertal'
  },
  {
    path: 'leistungen',
    component: ServicesComponent,
    title: 'Leistungen | Papadopoulos Fliesen'
  },
  {
    path: 'unternehmen',
    component: CompanyComponent,
    title: 'Unternehmen | Papadopoulos Fliesen'
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    title: 'Kontakt | Papadopoulos Fliesen'
  },
  {
    path: 'impressum',
    component: ImprintComponent,
    title: 'Impressum | Papadopoulos Fliesen'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
