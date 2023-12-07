import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisCurrentRefinements } from './current-refinements';

@NgModule({
    declarations: [NgAisCurrentRefinements],
    exports: [NgAisCurrentRefinements],
    imports: [CommonModule]
})
export class NgAisCurrentRefinementsModule {}
