import { Component } from '@angular/core';

interface LegalDetail {
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-imprint',
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  protected readonly legalDetails: LegalDetail[] = [
    {
      title: 'Angaben gemäß § 5 TMG',
      lines: [
        'Papadopoulos Fliesen',
        'Inhaber: Stefanos Papadopoulos',
        'Mobil im Großraum Bühlertal · Rastatt · oberer Ortenaukreis'
      ]
    },
    {
      title: 'Kontakt',
      lines: [
        'Telefon: +49 711 899 877 00',
        'E-Mail: kontakt@papadopoulos-fliesen.de'
      ]
    },
    {
      title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      lines: ['Anna-Maria Papadopoulos']
    },
    {
      title: 'Berufsbezeichnung',
      lines: ['Fliesen-, Platten- und Mosaiklegermeister (verliehen in Deutschland)']
    },
    {
      title: 'Umsatzsteuer-ID',
      lines: ['Wird auf Anfrage mitgeteilt']
    }
  ];
}
