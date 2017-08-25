import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test',
  templateUrl: 'test.html'
})
export class TestComponent {

  @Input() items: any;
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    console.log('Hello TestComponent Component');

  }

  selected(title) {
    this.selectedItem.emit(title);
  }

}
