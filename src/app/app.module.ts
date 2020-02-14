import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    AboutComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ AuthService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
