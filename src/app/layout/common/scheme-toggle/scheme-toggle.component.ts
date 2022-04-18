import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config';
import { AppConfig } from 'app/core/config/app.config';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector       : 'scheme-toggle',
    templateUrl    : './scheme-toggle.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'scheme-toggle'
})
export class SchemeToggleComponent implements OnInit, OnDestroy {

    private _config: AppConfig;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfigService: FuseConfigService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {
        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {
                this._config = config;
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    changeScheme(): void {
        this._config.scheme = (this._config.scheme === 'light') ? 'dark' : 'light';
        this._fuseConfigService.config = this._config.scheme;
    }

    usingDarkMode(): boolean {
        return this._config.scheme === 'dark';
    }

}
