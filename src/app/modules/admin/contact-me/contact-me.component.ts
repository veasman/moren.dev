import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ContactMeComponent implements OnInit {

    @ViewChild('contactNgForm') contactNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    contactForm: FormGroup;
    showAlert: boolean = false;

    constructor(
        private _formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.contactForm = this._formBuilder.group({
            email:   ['', [Validators.required, Validators.email]],
            name:    ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        })
    }

    // TODO: Create SpringBoot backend to send emails
    contactSend(): void {
        console.log('NOTE: Backend not yet implemented to send emails. charlie@moren.tech if you would like to get in contact.');
        console.log(this.contactForm);
    }

}
