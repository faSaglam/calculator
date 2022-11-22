import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { VolumeComponent } from './volume/volume.component';
export const appRoutes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'triangle', component: TriangleComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'volume', component: VolumeComponent },
  { path: '**', redirectTo: 'basic', pathMatch: 'full' },
];
