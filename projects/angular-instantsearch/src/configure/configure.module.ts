import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisConfigure } from './configure';

@NgModule({
    declarations: [NgAisConfigure],
    exports: [NgAisConfigure],
    imports: [CommonModule]
})
export class NgAisConfigureModule {}
