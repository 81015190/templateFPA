import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhasingRoutingModule } from './phasing-routing.module';
import { PhasingComponent } from './phasing.component';

@NgModule({
    imports: [CommonModule, PhasingRoutingModule],
    declarations: [PhasingComponent]
})
export class PhasingModule {}
