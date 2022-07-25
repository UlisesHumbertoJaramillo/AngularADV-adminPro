import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncremetadorComponent } from './incremetador.component';

describe('IncremetadorComponent', () => {
  let component: IncremetadorComponent;
  let fixture: ComponentFixture<IncremetadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncremetadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncremetadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
