import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCyclistComponent } from './list-cyclist/list-cyclist.component';
import { DetailsCyclistComponent } from './details-cyclist/details-cyclist.component';
import { CyclistInfoComponent } from './cyclist-info/cyclist-info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { BlogComponent } from './blog/blog.component';
import { CyclistService } from './cyclist.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InputformaterDirective } from './inputformater.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule }   from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCyclistComponent,
    DetailsCyclistComponent,
    CyclistInfoComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    LeadershipComponent,
    BlogComponent,
    DashboardComponent,
    HomeComponent,
    InputformaterDirective,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CyclistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
