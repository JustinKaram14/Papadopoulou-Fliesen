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
        'Sorgfältige Erneuerung von Bädern, Gästetoiletten und Spa-Bereichen inklusive Abdichtung, Fliesenkonzept und Silikonarbeiten.',
      features: [
        'Individuelle Bestandsaufnahme vor Ort',
        'Untergrundvorbereitung und Abdichtung',
        'Fugenarme Duschen und Nischenlösungen'
      ],
      image: 'images/service-bathroom.jpg'
    },
    {
      title: 'Wohnräume & Treppen',
      description:
        'Großformatige Keramik, Naturstein und robuste Beläge für Küchen, Flure und Wohnbereiche mit harmonischem Fugenbild.',
      features: [
        'Großformatplatten bis 120 cm Breite',
        'Saubere Anschlüsse an den Bestand',
        'Pflege- und Reinigungsberatung'
      ],
      image: 'images/service-living.jpg'
    },
    {
      title: 'Außenbereiche & Reparaturen',
      description:
        'Feinsteinzeug und Naturstein für Terrassen, Balkone und Eingangsbereiche sowie Instandsetzung von Schäden und Fugen.',
      features: [
        'Frostsichere Verlegung im System',
        'Silikon- und Fugenservice',
        'Schnelle Hilfe bei lockeren Fliesen'
      ],
      image: 'images/service-outdoor.jpg'
    }
  ];

  protected readonly tileTypes: TileType[] = [
    {
      name: 'Naturstein',
      description: 'Warme Oberflächen für Bäder und Wohnräume, individuell zugeschnitten von Stefanos.'
    },
    {
      name: 'Feinsteinzeug',
      description: 'Pflegeleicht und robust, von Holzoptik bis Betonlook – ideal für Innen- und Außenflächen.'
    },
    {
      name: 'Mosaik',
      description: 'Akzente in Duschen, Nischen oder als Bordüre, präzise verlegt mit ruhigem Fugenbild.'
    },
    {
      name: 'Treppen & Sockel',
      description: 'Genau angepasste Stufenkanten, Setzstufen und Abschlüsse für ein stimmiges Gesamtbild.'
    }
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Wie läuft ein Projekt ab?',
      answer:
        'Stefanos schaut sich Ihr Vorhaben persönlich an, Annamaria erstellt das Angebot und bleibt Ihre Ansprechpartnerin bis zum Abschluss der Arbeiten.'
    },
    {
      question: 'Arbeiten Sie mit Partnerbetrieben?',
      answer:
        'Wir konzentrieren uns auf das Fliesenhandwerk. Für Gewerke wie Sanitär oder Elektrik empfehlen wir gerne regionale Betriebe aus unserem Netzwerk.'
    },
    {
      question: 'In welchem Gebiet sind Sie unterwegs?',
      answer:
        'Wir sind mobil im Großraum Bühlertal, Rastatt und im oberen Ortenaukreis unterwegs und kommen bei Bedarf auch in angrenzende Orte.'
    }
  ];
}
