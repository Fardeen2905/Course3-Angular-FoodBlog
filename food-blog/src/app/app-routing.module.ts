import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateComponent } from './create/create.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {path:"",redirectTo:"landing",pathMatch:"full"},
  {path:"landing",component:LandingComponent},
  {path : "home" , component : HomeComponent , canActivate : [AuthGuardService]},
  {path : "login" , component : LoginComponent},
  {path : "signup" , component : SignupComponent},
  {path : "create" , component : CreateComponent , canActivate : [AuthGuardService]},
  {path : "articles" , component : ArticlesComponent , canActivate : [AuthGuardService]},
  {path : "article/:id" , component : ArticleComponent},
  {path : "update/:id" , component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
