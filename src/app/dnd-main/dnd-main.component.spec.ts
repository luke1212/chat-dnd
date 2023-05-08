import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndMainComponent } from './dnd-main.component';

describe('DndMainComponent', () => {
  let component: DndMainComponent;
  let fixture: ComponentFixture<DndMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
