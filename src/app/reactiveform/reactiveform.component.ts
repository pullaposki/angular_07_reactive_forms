import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
})
export class ReactiveForm {
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
  });

  list: any = [];

  onSubmit() {
    this.list.push(this.contactForm.value);
    this.contactForm.reset();
  }

  removeContact(index: number) {
    this.list.splice(index, 1);
  }
}
