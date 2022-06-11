import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { RoutingModule } from './routing.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ComicDetailComponent,
    SeriesDetailComponent,
    StoryDetailComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
