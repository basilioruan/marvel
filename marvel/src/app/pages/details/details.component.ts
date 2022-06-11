import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public character: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.marvelApiService.apiGetCharacter(id).subscribe(response => {
      this.character = response.data.results[0];
    });
  }

}
