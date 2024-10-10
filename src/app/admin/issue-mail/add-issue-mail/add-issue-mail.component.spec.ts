import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssueMailComponent } from './add-issue-mail.component';

describe('AddIssueMailComponent', () => {
  let component: AddIssueMailComponent;
  let fixture: ComponentFixture<AddIssueMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIssueMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIssueMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
