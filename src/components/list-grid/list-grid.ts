import { Component } from '@angular/core';

/**
 * Generated class for the ListGridComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-grid',
  templateUrl: 'list-grid.html'
})
export class ListGridComponent {

  text: string;

  constructor() {
    console.log('Hello ListGridComponent Component');
    this.text = 'Hello World';
  }

}
