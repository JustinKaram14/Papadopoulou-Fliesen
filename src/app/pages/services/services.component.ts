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
        'SorgfÃ¤ltige Erneuerung von BÃ¤dern, GÃ¤stetoiletten und Spa-Bereichen inklusive Abdichtung, Fliesenkonzept und Silikonarbeiten.',
      features: [
        'Individuelle Bestandsaufnahme vor Ort',
        'Untergrundvorbereitung und Abdichtung',
        'Fugenarme Duschen und NischenlÃ¶sungen'
      ],
      image: 'images/service-bathroom.svg'
    },
    {
      title: 'WohnrÃ¤ume & Treppen',
      description:
        'GroÃŸformatige Keramik, Naturstein und robuste BelÃ¤ge fÃ¼r KÃ¼chen, Flure und Wohnbereiche mit harmonischem Fugenbild.',
      features: [
        'GroÃŸformatplatten bis 120 cm Breite',
        'Saubere AnschlÃ¼sse an den Bestand',
        'Pflege- und Reinigungsberatung'
      ],
      image: 'images/service-living.svg'
    },
    {
      title: 'AuÃŸenbereiche & Reparaturen',
      description:
        'Feinsteinzeug und Naturstein fÃ¼r Terrassen, Balkone und Eingangsbereiche sowie Instandsetzung von SchÃ¤den und Fugen.',
      features: [
        'Frostsichere Verlegung im System',
        'Silikon- und Fugenservice',
        'Schnelle Hilfe bei lockeren Fliesen'
      ],
      image: 'images/service-outdoor.svg'
    }
  ];

  protected readonly tileTypes: TileType[] = [
    {
      name: 'Naturstein',
      description: 'Warme OberflÃ¤chen fÃ¼r BÃ¤der und WohnrÃ¤ume, individuell zugeschnitten von Stefanos.'
    },
    {
      name: 'Feinsteinzeug',
      description: 'Pflegeleicht und robust, von Holzoptik bis Betonlook â€“ ideal fÃ¼r Innen- und AuÃŸenflÃ¤chen.'
    },
    {
      name: 'Mosaik',
      description: 'Akzente in Duschen, Nischen oder als BordÃ¼re, prÃ¤zise verlegt mit ruhigem Fugenbild.'
    },
    {
      name: 'Treppen & Sockel',
      description: 'Genau angepasste Stufenkanten, Setzstufen und AbschlÃ¼sse fÃ¼r ein stimmiges Gesamtbild.'
    }
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Wie lÃ¤uft ein Projekt ab?',
      answer:
        'Stefanos schaut sich Ihr Vorhaben persÃ¶nlich an, erstellt das Angebot und bleibt Ihr Ansprechpartner bis zum Abschluss der Arbeiten.'
    },
    {
      question: 'Arbeiten Sie mit Partnerbetrieben?',
      answer:
        'Wir konzentrieren uns auf das Fliesenhandwerk. FÃ¼r Gewerke wie SanitÃ¤r oder Elektrik empfehlen wir gerne regionale Betriebe aus unserem Netzwerk.'
    },
    {
      question: 'In welchem Gebiet sind Sie unterwegs?',
      answer:
        'Wir sind mobil im GroÃŸraum BÃ¼hlertal, Rastatt und im oberen Ortenaukreis unterwegs und kommen bei Bedarf auch in angrenzende Orte.'
    }
  ];
}

