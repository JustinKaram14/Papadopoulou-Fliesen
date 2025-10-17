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
      title: 'Badgestaltung nach Mass',
      description:
        'Handgefertigte Flaechen, fugenarme Loesungen und sorgfaeltig gesetzte Details fuer kleine und grosse Baeder.',
      icon: 'water_drop'
    },
    {
      title: 'Naturstein & Grossformat',
      description:
        'Beratung zur passenden Platte, millimetergenaue Verlegung sowie Pflegehinweise direkt vom Meister.',
      icon: 'layers'
    },
    {
      title: 'Reparatur & Pflege vor Ort',
      description:
        'Schnelle Hilfe bei Schaeden, Silikon- und Fugenservice sowie regelmaessige Pflegearbeiten im Grossraum Buehlertal.',
      icon: 'build'
    }
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      title: 'Gespräch & Bestandsaufnahme',
      description:
        'Stefanos kommt zu Ihnen, hoert zu und nimmt Masse direkt vor Ort im Raum Buehlertal, Rastatt und oberer Ortenau.'
    },
    {
      title: 'Materialwahl & Angebot',
      description:
        'Annamaria stimmt Materialien, Termine und Kosten mit Ihnen ab und kuemmert sich um alle Rueckfragen.'
    },
    {
      title: 'Ausfuehrung & Pflegehinweise',
      description:
        'Die Verlegung erfolgt persoenlich durch Stefanos, abschliessend erhalten Sie Tipps fuer die langfristige Pflege.'
    }
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Von der ersten Anfrage bis zur letzten Fuge lief alles direkt und verbindlich. Stefanos hat unser Gaestebad perfekt umgesetzt.',
      name: 'Familie Hauser',
      role: 'Privatkunden aus Buehlertal'
    },
    {
      quote:
        'Wir hatten Wasser unter alten Fliesen. Stefanos hat kurzfristig geholfen und Annamaria hat die komplette Abstimmung uebernommen.',
      name: 'Claudia & Martin Schmitt',
      role: 'Hausbesitzer aus Rastatt'
    }
  ];

  protected readonly projectGallery: ProjectPreview[] = [
    {
      title: 'Wellnessbad in Naturstein',
      category: 'Bad',
      image: '/images/gallery-spa.jpg'
    },
    {
      title: 'Helles Familienbad',
      category: 'Bad',
      image: '/images/gallery-bath.jpg'
    },
    {
      title: 'Wohnbereich mit Keramik',
      category: 'Wohnraum',
      image: '/images/gallery-living.jpg'
    },
    {
      title: 'Terrasse mit Feinsteinzeug',
      category: 'Aussenbereich',
      image: '/images/gallery-terrace.jpg'
    }
  ];
}
