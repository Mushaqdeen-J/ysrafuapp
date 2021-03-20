import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'academics',
    loadChildren: () => import('./academics/academics.module').then( m => m.AcademicsPageModule)
  },
  {
    path: 'admissions',
    loadChildren: () => import('./admissions/admissions.module').then( m => m.AdmissionsPageModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then( m => m.AdministrationPageModule)
  },
  {
    path: 'examination',
    loadChildren: () => import('./examination/examination.module').then( m => m.ExaminationPageModule)
  },
  {
    path: 'campus',
    loadChildren: () => import('./campus/campus.module').then( m => m.CampusPageModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'adcet',
    loadChildren: () => import('./adcet/adcet.module').then( m => m.AdcetPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
