import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QboardComponent } from './qboard.component';

describe('QboardComponent', () => {
  let component: QboardComponent;
  let fixture: ComponentFixture<QboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
