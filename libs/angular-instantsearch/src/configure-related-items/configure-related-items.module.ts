import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisConfigureRelatedItems } from './configure-related-items';

@NgModule({
  declarations: [NgAisConfigureRelatedItems],
  exports: [NgAisConfigureRelatedItems],
  imports: [CommonModule],
})
export class NgAisConfigureRelatedItemsModule {}
