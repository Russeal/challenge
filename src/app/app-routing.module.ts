import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { LayoutComponent } from './layout/layout.component';
import { LogInComponent } from './layout/log-in/log-in.component';
import { PostDetailComponent } from './layout/posts/post-detail/post-detail.component';
import { PostsComponent } from './layout/posts/posts.component';

//services
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuardService],
      children: [
        { path: 'posts', component: PostsComponent },
        { path: 'posts/:id', component: PostDetailComponent }
      ]
  },
  { path: 'log-in', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
