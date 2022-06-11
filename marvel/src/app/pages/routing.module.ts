import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'comic/:id',
    component: ComicDetailComponent
  },
  {
    path: 'series/:id',
    component: SeriesDetailComponent
  },
  {
    path: 'story/:id',
    component: StoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
