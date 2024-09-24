import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisBreadcrumb } from './breadcrumb';

@NgModule({
  declarations: [NgAisBreadcrumb],
  exports: [NgAisBreadcrumb],
  imports: [CommonModule],
})
export class NgAisBreadcrumbModule {}
