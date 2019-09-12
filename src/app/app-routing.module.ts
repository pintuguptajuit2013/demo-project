import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ListCyclistComponent } from './list-cyclist/list-cyclist.component';
import { BlockingProxy } from 'blocking-proxy';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DetailsCyclistComponent } from './details-cyclist/details-cyclist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'leadership', component: LeadershipComponent },
   { path: 'cyclist', component: ListCyclistComponent },
   { path: 'cyclistdetails', component: DetailsCyclistComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
   { path: 'logout', component: LogoutComponent },

  { path: '', component:DashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
