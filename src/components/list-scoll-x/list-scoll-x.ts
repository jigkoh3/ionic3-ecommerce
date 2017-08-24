import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListScollXComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-scoll-x',
  templateUrl: 'list-scoll-x.html'
})
export class ListScollXComponent {

  @Input() populars: any;

  constructor() {
    console.log('Hello ListScollXComponent Component');
  }

}
