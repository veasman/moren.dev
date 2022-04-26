import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { ApiRequestService } from 'app/core/auth/api-request/api-request.service';

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
        private _apiRequestService: ApiRequestService,
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
        if (this.contactForm.invalid) { return };

        this.contactForm.disable();
        this.showAlert = false;

        this._apiRequestService.post('contact', this.contactForm)
            .subscribe(
                () => {

                },
                (response) => {
                    this.contactForm.enable();
                    this.contactNgForm.resetForm();

                    this.alert = {
                        type   : 'error',
                        message: 'Error sending request | NOTE: Backend not yet implemented',
                    };

                    this.showAlert = true;
                }
            )
    }

}
