import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children :[
      {
        path : 'home',
        loadChildren : () => import('../home/home.module').then(m => m.HomePageModule)
      },{
        path: 'contactos',
        loadChildren : ()=> import('../contactos/contactos.module').then(m=> m.ContactosPageModule)
      },
      {
        path :'',
        redirectTo: 'home',
        pathMatch : 'full'
        
      }
    ]
  },
    {
      path :'',
      redirectTo: 'home',
      pathMatch : 'full'
      
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
