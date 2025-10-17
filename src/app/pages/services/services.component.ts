import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServicePackage {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface TileType {
  name: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  protected readonly servicePackages: ServicePackage[] = [
    {
      title: 'Badgestaltung & Sanierung',
      description:
        'Sorgfaeltige Erneuerung von Baedern, Gaestetoiletten und Spa-Bereichen inklusive Abdichtung, Fliesenkonzept und Silikonarbeiten.',
      features: [
        'Individuelle Bestandsaufnahme vor Ort',
        'Untergrundvorbereitung und Abdichtung',
        'Fugenarme Duschen und Nischenloesungen'
      ],
      image: '/images/service-bathroom.jpg'
    },
    {
      title: 'Wohnraeume & Treppen',
      description:
        'Grossformatige Keramik, Naturstein und robuste Belage fuer Kuechen, Flure und Wohnbereiche mit harmonischem Fugenbild.',
      features: [
        'Grossformatplatten bis 120 cm Breite',
        'Saubere Anschluesse an Bestand',
        'Pflege- und Reinigungsberatung'
      ],
      image: '/images/service-living.jpg'
    },
    {
      title: 'Aussenbereiche & Reparaturen',
      description:
        'Feinsteinzeug und Naturstein fuer Terrassen, Balkone und Eingangsbereiche sowie Instandsetzung von Schaeden und Fugen.',
      features: [
        'Frostsichere Verlegung im System',
        'Silikon- und Fugenservice',
        'Schnelle Hilfe bei lockeren Fliesen'
      ],
      image: '/images/service-outdoor.jpg'
    }
  ];

  protected readonly tileTypes: TileType[] = [
    {
      name: 'Naturstein',
      description: 'Warme Oberflaechen fuer Baeder und Wohnraeume, individuell zugeschnitten von Stefanos.'
    },
    {
      name: 'Feinsteinzeug',
      description: 'Pflegeleicht und robust, von Holzoptik bis Betonlook – ideal fuer Innen- und Aussenflaechen.'
    },
    {
      name: 'Mosaik',
      description: 'Akzente in Duschen, Nischen oder als Borduere, praezise verlegt mit ruhigem Fugenbild.'
    },
    {
      name: 'Treppen & Sockel',
      description: 'Genau angepasste Stufenkanten, Setzstufen und Abschluesse fuer ein stimmiges Gesamtbild.'
    }
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Wie laeuft ein Projekt ab?',
      answer:
        'Stefanos schaut sich Ihr Vorhaben persoenlich an, Annamaria erstellt das Angebot und bleibt Ihre Ansprechpartnerin bis zum Abschluss der Arbeiten.'
    },
    {
      question: 'Arbeiten Sie mit Partnerbetrieben?',
      answer:
        'Wir konzentrieren uns auf das Fliesenhandwerk. Fuer Gewerke wie Sanitär oder Elektrik empfehlen wir gerne regionale Betriebe aus unserem Netzwerk.'
    },
    {
      question: 'In welchem Gebiet sind Sie unterwegs?',
      answer:
        'Wir sind mobil im Grossraum Buehlertal, Rastatt und im oberen Ortenaukreis unterwegs und kommen bei Bedarf auch in angrenzende Orte.'
    }
  ];
}
