import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
/* Custom Components ------------ */
import { FormsModule } from '@angular/forms';
/* Providers -------------------- */
import { GitHubUserService } from './git-hub-user.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GitHubUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
