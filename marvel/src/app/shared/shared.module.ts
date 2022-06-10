import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ListComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
