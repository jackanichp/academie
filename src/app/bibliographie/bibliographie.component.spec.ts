import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographieComponent } from './bibliographie.component';

describe('BibliographieComponent', () => {
  let component: BibliographieComponent;
  let fixture: ComponentFixture<BibliographieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliographieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
