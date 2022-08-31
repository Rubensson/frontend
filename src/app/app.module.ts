import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { TituloSectionComponent } from './components/titulo-section/titulo-section.component';
import { HttpClientModule } from '@angular/common/http';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './components/circle-progress/circle-progress.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor.service';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    TituloSectionComponent,
    CircleProgressComponent,
    LoginComponent,
    WelcomeComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    NewProjectComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
