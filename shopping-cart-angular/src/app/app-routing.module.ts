import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import {AddItemComponent} from './add-item/add-item.component';
import {GetItemComponent} from './get-item/get-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';


const routes: Routes = [
  {
    path: 'cardDisplay',
    component: GetItemComponent,
    //loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'cardEdit',
    component: EditItemComponent,
    // outlet: 'popup'
  },
 
  {
    path: 'cardAdd',
    component: AddItemComponent
    //loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    //data: { preload: true }
  },
  {
    path: 'cardDeletion',
    component: DeleteItemComponent
  },
  { path: '',   redirectTo: '/cardDisplay', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}