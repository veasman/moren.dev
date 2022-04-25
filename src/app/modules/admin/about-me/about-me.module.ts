import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import { Route, RouterModule } from '@angular/router';

const aboutMeRoutes: Route[] = [
    {
        path     : '',
        component: AboutMeComponent
    }
]

@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        RouterModule.forChild(aboutMeRoutes),
    ]
})
export class AboutMeModule { }
