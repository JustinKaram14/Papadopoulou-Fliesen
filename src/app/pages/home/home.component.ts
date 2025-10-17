import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface ProjectPreview {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly serviceHighlights: ServiceHighlight[] = [
    {
      title: 'Badgestaltung mit Herz',
      description:
        'Sorgfältig verlegte Fliesen, fugenarme Lösungen und liebevolle Details für Bäder jeder Größe.',
      icon: 'water_drop'
    },
    {
      title: 'Naturstein & Großformat',
      description:
        'Gemeinsam finden wir die passende Platte – inklusive millimetergenauer Verlegung und Pflegetipps.',
      icon: 'layers'
    },
    {
      title: 'Reparatur & Pflege',
      description:
        'Silikon- und Fugenservice, Reparaturen und laufende Pflegearbeiten im Großraum Bühlertal.',
      icon: 'build'
    }
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      title: 'Gespräch & Bestandsaufnahme',
      description:
        'Stefanos schaut bei Ihnen vorbei, hört zu und nimmt Maße direkt vor Ort in Bühlertal, Rastatt und der oberen Ortenau.'
    },
    {
      title: 'Materialwahl & Angebot',
      description:
        'Annamaria stimmt Materialien, Termine und Kosten mit Ihnen ab und bleibt Ihre Ansprechpartnerin.'
    },
    {
      title: 'Ausführung & Pflegehinweise',
      description:
        'Stefanos führt die Arbeiten persönlich aus und gibt Ihnen Hinweise zur langfristigen Pflege.'
    }
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Von der ersten Anfrage bis zur letzten Fuge lief alles direkt und verbindlich. Stefanos hat unser Gästebad perfekt umgesetzt.',
      name: 'Familie Hauser',
      role: 'Privatkunden aus Bühlertal'
    },
    {
      quote:
        'Wir hatten Wasser unter alten Fliesen. Stefanos hat kurzfristig geholfen und Annamaria hat die komplette Abstimmung übernommen.',
      name: 'Claudia & Martin Schmitt',
      role: 'Hausbesitzer aus Rastatt'
    }
  ];

  protected readonly projectGallery: ProjectPreview[] = [
    {
      title: 'Wellnessbad in Naturstein',
      category: 'Bad',
      image: 'images/gallery-spa.jpg'
    },
    {
      title: 'Helles Familienbad',
      category: 'Bad',
      image: 'images/gallery-bath.jpg'
    },
    {
      title: 'Wohnbereich mit Keramik',
      category: 'Wohnraum',
      image: 'images/gallery-living.jpg'
    },
    {
      title: 'Terrasse mit Feinsteinzeug',
      category: 'Außenbereich',
      image: 'images/gallery-terrace.jpg'
    }
  ];
}
