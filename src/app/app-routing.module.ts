import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoreinfoComponent } from './components/moreinfo/moreinfo.component';
import { NewpostComponent } from './components/newpost/newpost.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moreinfo/:id', component: MoreinfoComponent},
  {path: 'newpost', component: NewpostComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
