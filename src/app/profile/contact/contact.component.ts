import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor(private fb: FormBuilder) {}

  contactFormModel: FormGroup;

  ngOnInit() {
    this.createContactForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactFormModel.controls; }

  onSubmit(): void {
    console.log('send work!)', this.contactFormModel.value);
  }

  private createContactForm(): void {
    this.contactFormModel = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
}
