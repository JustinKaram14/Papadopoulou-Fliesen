import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactDetail {
  label: string;
  detail: string;
  url?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  protected model: any = {};
  protected readonly submitted = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly contactDetails: ContactDetail[] = [
    { label: 'Telefon', detail: '+49 711 899 877 00', url: 'tel:+4971189987700' },
    { label: 'E-Mail', detail: 'kontakt@papadopoulos-fliesen.de', url: 'mailto:kontakt@papadopoulos-fliesen.de' },
    { label: 'Einsatzgebiet', detail: 'Bühlertal, Rastatt & oberer Ortenaukreis' }
  ];

  constructor(private http: HttpClient) {}

  submitContactForm(form: NgForm): void {
    if (form.invalid) {
      this.error.set('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }
    this.error.set(null);

    const payload = new URLSearchParams({
      name: this.model.name ?? '',
      email: this.model.email ?? '',
      phone: this.model.phone ?? '',
      location: this.model.location ?? '',
      message: this.model.message ?? ''
    });

    this.http
      .post('senden.php', payload.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      })
      .subscribe({
        next: () => {
          this.submitted.set(true);
          form.resetForm();
        },
        error: () => {
          this.error.set('Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
        }
      });
  }
}
