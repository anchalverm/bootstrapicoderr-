import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootclassComponent } from './bootclass.component';

describe('BootclassComponent', () => {
  let component: BootclassComponent;
  let fixture: ComponentFixture<BootclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
