import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneratorComponent } from './card-generator.component';

describe('CardGeneratorComponent', () => {
  let component: CardGeneratorComponent;
  let fixture: ComponentFixture<CardGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
