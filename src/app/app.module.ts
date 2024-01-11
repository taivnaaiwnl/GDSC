import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ImgpageComponent } from './imgpage/imgpage.component';
import { CommentsectionComponent } from './commentsection/commentsection.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    AboutusComponent,
    LoginpageComponent,
    ImgpageComponent,
    CommentsectionComponent,
    ForgotpassComponent,
    ResetpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
