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
      title: 'Handwerk in Meisterqualitaet',
      description:
        'Stefanos steht auf jeder Baustelle selbst und fuehrt alle Arbeiten mit viel Ruhe und Genauigkeit aus.'
    },
    {
      title: 'Persoenliche Abstimmung',
      description:
        'Annamaria ist Ihre Ansprechpartnerin fuer Angebote, Organisation und Buchhaltung. Kurze Wege statt Hotline.'
    },
    {
      title: 'Verlaesslichkeit vor Ort',
      description:
        'Wir planen realistische Termine, halten Zusagen ein und arbeiten sauber in Ihrem Zuhause – ganz ohne Showroom.'
    }
  ];

  protected readonly timeline: TimelineEntry[] = [
    {
      year: '2003',
      title: 'Start in Buehlertal',
      description:
        'Stefanos Papadopoulos macht sich als Fliesenleger selbststaendig und betreut erste Projekte in Buehlertal und Umgebung.'
    },
    {
      year: '2011',
      title: 'Annamaria steigt ein',
      description:
        'Tochter Annamaria uebernimmt Organisation, Buchhaltung und Kommunikation – der Familienbetrieb entsteht.'
    },
    {
      year: '2017',
      title: 'Fokus auf Grossraum Rastatt',
      description:
        'Die meisten Projekte entstehen nun im Raum Rastatt und oberer Ortenaukreis. Das mobile Konzept ohne Laden etabliert sich.'
    }
  ];

  protected readonly certifications: Certification[] = [
    {
      title: 'Handwerksmeister Fliesen, Platten und Mosaik',
      description: 'Eingetragen in die Handwerksrolle der Region und regelmaessig auf Fortbildungen.'
    },
    {
      title: 'Arbeitssicherheit & Abdichtung im Nassbereich',
      description: 'Zertifizierte Schulungen zu Verbundabdichtungen und Systemaufbauten.'
    },
    {
      title: 'Regionale Lieferpartner',
      description: 'Enge Zusammenarbeit mit Haendlern aus Rastatt und Ortenau fuer schnelle Materialverfuegbarkeit.'
    }
  ];
}
