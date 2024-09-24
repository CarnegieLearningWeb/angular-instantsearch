import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisHierarchicalMenu } from './hierarchical-menu';
import { NgAisHierarchicalMenuItem } from './hierarchical-menu-item';

@NgModule({
  declarations: [NgAisHierarchicalMenu, NgAisHierarchicalMenuItem],
  exports: [NgAisHierarchicalMenu],
  imports: [CommonModule],
})
export class NgAisHierarchicalMenuModule {}
