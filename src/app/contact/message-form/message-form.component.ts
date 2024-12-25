import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
    standalone: true,
    imports: [FormsModule],
})
export class MessageFormComponent {
    @Output() messageSent = new EventEmitter<string>();
    message: string = '';

    sendMessage() {
        this.messageSent.emit(this.message);
        this.message = '';
    }
}