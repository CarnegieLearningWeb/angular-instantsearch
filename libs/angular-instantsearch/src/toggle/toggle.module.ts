import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisToggle } from './toggle';

@NgModule({
  declarations: [NgAisToggle],
  exports: [NgAisToggle],
  imports: [CommonModule],
})
export class NgAisToggleModule {}
