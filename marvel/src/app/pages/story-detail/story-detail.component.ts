import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {

  public story: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.marvelApiService.apiGetStory(id).subscribe(response => {
      this.story = response.data.results[0];
    });
  }

}
