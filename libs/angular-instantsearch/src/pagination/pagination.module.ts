import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisPagination } from './pagination';

@NgModule({
  declarations: [NgAisPagination],
  exports: [NgAisPagination],
  imports: [CommonModule],
})
export class NgAisPaginationModule {}
