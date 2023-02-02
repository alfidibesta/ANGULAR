import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './courses.service';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { InputFormatsDirective } from './input-formats.directive';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServerComponent,
    ServersComponent,
    FavoriteComponent,
    HiddenPropertyComponent,
    SwitchCaseComponent,
    NgforComponent,
    InputFormatsDirective,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
