import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFeatureComponent } from './top-feature.component';

describe('TopFeatureComponent', () => {
  let component: TopFeatureComponent;
  let fixture: ComponentFixture<TopFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
