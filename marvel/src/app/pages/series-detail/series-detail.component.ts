import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {

  public series: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.marvelApiService.apiGetSeries(id).subscribe(response => {
      this.series = response.data.results[0];
    });
  }

}
