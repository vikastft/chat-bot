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
  sliderValue = 3;
  showImojis = true;
  imageSrc = 'assets/neutral.png';
  constructor() { }

  ngOnInit() {
  }

  send(value) {
    this.disable = true;
    this.data['userResponse'] = value;
    this.userResponse.emit(this.data);
  }

  sliderChanged() {
    switch (+this.sliderValue) {
      case 1: this.imageSrc = 'assets/veryBad.png';
        break;
      case 2: this.imageSrc = 'assets/bad.png';
        break;
      case 3: this.imageSrc = 'assets/neutral.png';
        break;
      case 4: this.imageSrc = 'assets/good.png';
        break;
      case 5: this.imageSrc = 'assets/veryGood.png';
        break;
    }
  }
}
