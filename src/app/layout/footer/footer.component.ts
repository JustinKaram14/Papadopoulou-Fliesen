import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface QuickLink {
  label: string;
  path: string;
}

interface Highlight {
  title: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks: QuickLink[] = [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen', path: '/leistungen' },
    { label: 'Unternehmen', path: '/unternehmen' },
    { label: 'Kontakt', path: '/kontakt' },
    { label: 'Impressum', path: '/impressum' }
  ];

  protected readonly highlights: Highlight[] = [
    { title: 'Badmodernisierung & Gästetoiletten' },
    { title: 'Natursteinarbeiten & Großformat' },
    { title: 'Reparaturen und Fugenservice' },
    { title: 'Terrassen und Balkone' }
  ];

  protected readonly regions: string[] = [
    'Bühlertal & Umgebung',
    'Rastatt & Murgtal',
    'Oberer Ortenaukreis'
  ];
}
