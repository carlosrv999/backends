import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster.component';
import { BackendsComponent } from './backends.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion'
    },
    children: [
      {
        path: 'cluster',
        component: ClusterComponent,
        data: {
          title: 'Cluster'
        }
      },
      {
        path: 'backends',
        component: BackendsComponent,
        data: {
          title: 'Backends'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
