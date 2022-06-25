import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicoBoxComponent } from './dico-box.component';

describe('DicoBoxComponent', () => {
  let component: DicoBoxComponent;
  let fixture: ComponentFixture<DicoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
