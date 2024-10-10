import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMailComponent } from './issue-mail.component';

describe('IssueMailComponent', () => {
  let component: IssueMailComponent;
  let fixture: ComponentFixture<IssueMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
