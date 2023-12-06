import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit-text',
  standalone: true,
  imports: [],
  template: `
    <div>
      <input #addInput (keyup.enter)="submitText.emit(addInput.value); addInput.value = ''" class="border-b border-b-orange-400 outline-none" type="text">
      <button (click)="submitText.emit(addInput.value); addInput.value = ''" class="border border-orange-400 ml-4 px-4">Add</button>
    </div>
  `,
  styles: [
  `
    input:focus + button {
      @apply text-orange-400;
    }
  `],
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
