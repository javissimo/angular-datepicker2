import { ViewContainerRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DayDirective {
    private template;
    private container;
    context: any | null;
    __created: boolean;
    constructor(template: TemplateRef<any>, container: ViewContainerRef);
    date: Date;
    set day(date: Date);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DayDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DayDirective, "[ad2day]", never, { "date": "ad2dayFrom"; "day": "day"; }, {}, never>;
}
