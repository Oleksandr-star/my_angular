import { Component } from '@angular/core';
import { MessageFormComponent } from "./message-form/message-form.component";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [MessageFormComponent],
    standalone: true,
})
export class ContactComponent {
    contactInfo = {
        address: '12  вул. Набережна, Миколаїв, Україна',
        phone: '+380 96 123 4567',
        email: 'info@example.com'
    };

    onMessageSend(message: string) {
        console.log('Отримано повідомлення від користувача:', message);
    }
}