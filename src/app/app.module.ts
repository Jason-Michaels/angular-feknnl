import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule  ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, PostsComponent, UsersComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(router: Router) {}
}
