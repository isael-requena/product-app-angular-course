import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-message.component.html',
  styleUrl: './modal-message.component.scss',
  
})
export class ModalMessageComponent {

  @Output() onCloseModalEmitter = new EventEmitter<void>();

  /**
   * Title of the modal 
   */
  @Input() title: string = '';

  /**
   * The message to display
   */
  @Input() message: string = '';

  /**
   * Handles the modal visibility
   */
  public showModal = true;

  /**
   * Funtion to close the modal
   */
  public closeModal = () => {
    this.showModal = false;
    setTimeout(() => this.onCloseModalEmitter.emit(), 500);
  }
}
