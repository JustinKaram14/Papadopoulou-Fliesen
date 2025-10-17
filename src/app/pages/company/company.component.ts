import { Component } from '@angular/core';

interface CompanyValue {
  title: string;
  description: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

interface Certification {
  title: string;
  description: string;
}

@Component({
  selector: 'app-company',
  standalone: true,
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  protected readonly values: CompanyValue[] = [
    {
      title: 'Handwerk in Meisterqualität',
      description:
        'Stefanos steht auf jeder Baustelle selbst und führt alle Arbeiten mit viel Ruhe und Genauigkeit aus.'
    },
    {
      title: 'Persönliche Abstimmung',
      description:
        'Annamaria ist Ihre Ansprechpartnerin für Angebote, Organisation und Buchhaltung. Kurze Wege statt Hotline.'
    },
    {
      title: 'Verlässlichkeit vor Ort',
      description:
        'Wir planen realistische Termine, halten Zusagen ein und arbeiten sauber in Ihrem Zuhause – ganz ohne Showroom.'
    }
  ];

  protected readonly timeline: TimelineEntry[] = [
    {
      year: '2003',
      title: 'Start in Bühlertal',
      description:
        'Stefanos Papadopoulos macht sich als Fliesenleger selbstständig und betreut erste Projekte in Bühlertal und Umgebung.'
    },
    {
      year: '2011',
      title: 'Annamaria steigt ein',
      description:
        'Tochter Annamaria übernimmt Organisation, Buchhaltung und Kommunikation – der Familienbetrieb entsteht.'
    },
    {
      year: '2017',
      title: 'Fokus auf Großraum Rastatt',
      description:
        'Die meisten Projekte entstehen nun im Raum Rastatt und oberer Ortenaukreis. Das mobile Konzept ohne Laden etabliert sich.'
    }
  ];

  protected readonly certifications: Certification[] = [
    {
      title: 'Handwerksmeister Fliesen, Platten und Mosaik',
      description: 'Eingetragen in die Handwerksrolle der Region und regelmäßig auf Fortbildungen.'
    },
    {
      title: 'Arbeitssicherheit & Abdichtung im Nassbereich',
      description: 'Zertifizierte Schulungen zu Verbundabdichtungen und Systemaufbauten.'
    },
    {
      title: 'Regionale Lieferpartner',
      description: 'Enge Zusammenarbeit mit Händlern aus Rastatt und Ortenau für schnelle Materialverfügbarkeit.'
    }
  ];
}
