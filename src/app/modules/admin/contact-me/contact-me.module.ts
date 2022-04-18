import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactMeComponent } from './contact-me.component';

const contactMeRoutes: Route[] = [
    {
        path     : '',
        component: ContactMeComponent
    }
];

@NgModule({
    declarations: [
        ContactMeComponent
    ],
    imports: [
        RouterModule.forChild(contactMeRoutes)
    ]
})
export class ContactMeModule { }
