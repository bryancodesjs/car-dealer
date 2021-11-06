import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin-views/admin/admin.component';
import { InventoryComponent } from './views/admin-views/inventory/inventory.component';
import { ItemFormComponent } from './views/admin-views/item-form/item-form.component';
import { RequestsComponent } from './views/admin-views/requests/requests.component';
import { SettingsComponent } from './views/admin-views/settings/settings.component';
import { ExploreComponent } from './views/explore/explore.component';
import { HomeComponent } from './views/home/home.component';
import { ItemComponent } from './views/item/item.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'admin', component: AdminComponent},
  {path: 'item-form', component: ItemFormComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
