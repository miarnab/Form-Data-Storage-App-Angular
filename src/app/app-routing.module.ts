import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GetUserComponent } from './getuser/getuser.component';

const routes: Routes = [
  {path:'form', component: FormComponent},
  {path:'getuser',component: GetUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
