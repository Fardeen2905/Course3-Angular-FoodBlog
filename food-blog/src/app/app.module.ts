import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
   
    MainComponent,
        LandingComponent,
        HomeComponent,
        LoginComponent,
        CreateComponent,
        ArticleComponent,
        ArticlesComponent,
        SignupComponent,
        UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
