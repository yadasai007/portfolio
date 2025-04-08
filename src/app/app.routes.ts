import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'skills',component:SkillsComponent}

];
