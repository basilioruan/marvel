import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list?: any[];

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.marvelApiService.apiListAllCharacteracters.subscribe(response => {
      this.list = response.data.results;
    });
  }

}
