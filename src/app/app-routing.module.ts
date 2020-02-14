import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from './home/home.component';
import{ AboutComponent} from './about/about.component';
import{ LoginComponent} from './login/login.component';
import{ GalaryComponent} from './galary/galary.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'galary', component: GalaryComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
