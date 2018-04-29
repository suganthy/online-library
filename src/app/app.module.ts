import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { SettingsComponent } from './settings/settings.component';
import { AclComponent } from './settings/acl/acl.component';
import { UserComponent } from './settings/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonComponent,
    SettingsComponent,
    AclComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
