import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ContactDetail {
  label: string;
  detail: string;
  url?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  protected readonly submitted = signal(false);

  protected readonly contactDetails: ContactDetail[] = [
    { label: 'Telefon', detail: '+49 711 899 877 00', url: 'tel:+4971189987700' },
    { label: 'E-Mail', detail: 'kontakt@papadopoulos-fliesen.de', url: 'mailto:kontakt@papadopoulos-fliesen.de' },
    { label: 'Einsatzgebiet', detail: 'Bühlertal, Rastatt & oberer Ortenaukreis' }
  ];

  submitContactForm(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
