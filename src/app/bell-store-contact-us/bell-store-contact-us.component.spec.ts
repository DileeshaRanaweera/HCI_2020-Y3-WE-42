import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellStoreContactUsComponent } from './bell-store-contact-us.component';

describe('BellStoreContactUsComponent', () => {
  let component: BellStoreContactUsComponent;
  let fixture: ComponentFixture<BellStoreContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellStoreContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellStoreContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
