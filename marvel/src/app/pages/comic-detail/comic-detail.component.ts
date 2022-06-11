import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  public comic: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.marvelApiService.apiGetCommic(id).subscribe(response => {
      this.comic = response.data.results[0];
    });
  }

}
