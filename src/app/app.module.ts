import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { VolumeComponent } from './volume/volume.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,

    SidenavComponent,
    CircleComponent,
    TriangleComponent,
    RectangleComponent,
    VolumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
