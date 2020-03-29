import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCreateFormComponent } from './gift-create-form.component';

describe('GiftCreateFormComponent', () => {
  let component: GiftCreateFormComponent;
  let fixture: ComponentFixture<GiftCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
