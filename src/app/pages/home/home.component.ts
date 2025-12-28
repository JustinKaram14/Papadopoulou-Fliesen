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
        'SorgfÃ¤ltig verlegte Fliesen, fugenarme LÃ¶sungen und liebevolle Details fÃ¼r BÃ¤der jeder GrÃ¶ÃŸe.',
      icon: 'water_drop'
    },
    {
      title: 'Naturstein & GroÃŸformat',
      description:
        'Gemeinsam finden wir die passende Platte â€“ inklusive millimetergenauer Verlegung und Pflegetipps.',
      icon: 'layers'
    },
    {
      title: 'Reparatur & Pflege',
      description:
        'Silikon- und Fugenservice, Reparaturen und laufende Pflegearbeiten im GroÃŸraum BÃ¼hlertal.',
      icon: 'build'
    }
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      title: 'GesprÃ¤ch & Bestandsaufnahme',
      description:
        'Stefanos schaut bei Ihnen vorbei, hÃ¶rt zu und nimmt MaÃŸe direkt vor Ort in BÃ¼hlertal, Rastatt und der oberen Ortenau.'
    },
    {
      title: 'Materialwahl & Angebot',
      description: 'Stefanos stimmt Materialien, Termine und Kosten direkt mit Ihnen ab.'
    },
    {
      title: 'AusfÃ¼hrung & Pflegehinweise',
      description:
        'Stefanos fÃ¼hrt die Arbeiten persÃ¶nlich aus und gibt Ihnen Hinweise zur langfristigen Pflege.'
    }
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Von der ersten Anfrage bis zur letzten Fuge lief alles direkt und verbindlich. Stefanos hat unser GÃ¤stebad perfekt umgesetzt.',
      name: 'Familie Hauser',
      role: 'Privatkunden aus BÃ¼hlertal'
    },
    {
      quote:
        'Wir hatten Wasser unter alten Fliesen. Stefanos hat kurzfristig geholfen und die komplette Abstimmung Ã¼bernommen.',
      name: 'Claudia & Martin Schmitt',
      role: 'Hausbesitzer aus Rastatt'
    }
  ];

  protected readonly projectGallery: ProjectPreview[] = [
    {
      title: 'Wellnessbad in Naturstein',
      category: 'Bad',
      image: 'images/gallery-spa.svg'
    },
    {
      title: 'Helles Familienbad',
      category: 'Bad',
      image: 'images/gallery-bath.svg'
    },
    {
      title: 'Wohnbereich mit Keramik',
      category: 'Wohnraum',
      image: 'images/gallery-living.svg'
    },
    {
      title: 'Terrasse mit Feinsteinzeug',
      category: 'AuÃŸenbereich',
      image: 'images/gallery-terrace.svg'
    }
  ];
}

