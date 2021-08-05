import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LogInComponent } from './layout/log-in/log-in.component';
import { PostsComponent } from './layout/posts/posts.component';
import { PostDetailComponent } from './layout/posts/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LogInComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
