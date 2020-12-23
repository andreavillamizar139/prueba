import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmbumsComponent } from './almbums.component';

describe('AlmbumsComponent', () => {
  let component: AlmbumsComponent;
  let fixture: ComponentFixture<AlmbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
