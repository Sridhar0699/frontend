import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProjectComponent } from './project/project.component';
import { ChildComponent } from './child/child.component';
import { TaskComponent } from './task/task.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateParentTaskComponent } from './update-parent-task/update-parent-task.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ListComponent},
  {path:'project',component:ProjectComponent},
  {path:'project/:projectId',component:ProjectComponent},
  {path:'child',component:ChildComponent},
  {path:'child/:projectId',component:ChildComponent},
  {path:'task',component:TaskComponent},
  {path:'task/:projectId',component:TaskComponent},
  {path:'pro/:name',component:UpdateProjectComponent},
  {path:'update/:name',component:UpdateParentTaskComponent},
  {path:'**',component:NotfoundComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
