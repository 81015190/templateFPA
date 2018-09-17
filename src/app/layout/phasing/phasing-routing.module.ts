import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhasingComponent } from './phasing.component';

const routes: Routes = [
    {
        path: '',
        component: PhasingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhasingRoutingModule {}
