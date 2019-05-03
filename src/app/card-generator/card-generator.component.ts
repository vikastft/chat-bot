import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})
export class CardGeneratorComponent implements OnInit {
  @Input() data;
  @Output() userResponse: EventEmitter<any> = new EventEmitter();
  disable = false;
  sliderValue;
  constructor() { }

  ngOnInit() {
  }

  send(value) {
    this.disable = true;
    this.userResponse.emit(value);
  }
}
