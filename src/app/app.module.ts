import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ItemComponent } from './views/item/item.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin-views/admin/admin.component';
import { ItemFormComponent } from './views/admin-views/item-form/item-form.component';
import { InventoryComponent } from './views/admin-views/inventory/inventory.component';
import { FormRequestsComponent } from './views/admin-views/form-requests/form-requests.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './views/admin-views/settings/settings.component';
import { RequestsComponent } from './views/admin-views/requests/requests.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    AdminComponent,
    ItemFormComponent,
    InventoryComponent,
    FormRequestsComponent,
    AdminNavComponent,
    FooterComponent,
    SettingsComponent,
    RequestsComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
