import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellStoreRegisterComponent } from './bell-store-register.component';

describe('BellStoreRegisterComponent', () => {
  let component: BellStoreRegisterComponent;
  let fixture: ComponentFixture<BellStoreRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellStoreRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellStoreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
