import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input (keyup.enter)="searchTag()"
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    #txtTagInput
    >
  `,
})
export class SearchBoxComponent {

  constructor(private GifsService: GifsService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {

    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";


  }


}
