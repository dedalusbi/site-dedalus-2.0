import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteSectionComponent } from './enquete-section.component';

describe('EnqueteSectionComponent', () => {
  let component: EnqueteSectionComponent;
  let fixture: ComponentFixture<EnqueteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnqueteSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
