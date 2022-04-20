import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeToggleComponent } from './scheme-toggle.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        SchemeToggleComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        SchemeToggleComponent
    ]
})
export class SchemeToggleModule { }
