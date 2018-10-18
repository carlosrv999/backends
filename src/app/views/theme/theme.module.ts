// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClusterComponent } from './cluster.component';
import { BackendsComponent } from './backends.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    ClusterComponent,
    BackendsComponent
  ]
})
export class ThemeModule { }
