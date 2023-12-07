import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisRangeSlider } from './range-slider';

@NgModule({
    declarations: [NgAisRangeSlider],
    exports: [NgAisRangeSlider],
    imports: [CommonModule]
})
export class NgAisRangeSliderModule {}
