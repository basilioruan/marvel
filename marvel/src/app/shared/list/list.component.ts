import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public offset: number = 0;
  public list?: any[];
  private setList?: any[];

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.marvelApiService.apiListAllCharacteracters(this.offset).subscribe(response => {
      this.list = response.data.results;
      this.setList = this.list;
    });
  }

  public filterList(value: string): void {
    const filter = this.setList?.filter( (res:any) => {
      return res.name.startsWith(value);
    } );

    this.list = filter;
  }

  public viewMore() {
    console.log('chamouuu');
    this.offset += 10;
    this.marvelApiService.apiListAllCharacteracters(this.offset).subscribe(response => {
      this.setList?.push(...response.data.results);
      this.list = this.setList;
    });
  }

}
