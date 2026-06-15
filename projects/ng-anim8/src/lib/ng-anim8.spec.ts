import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAnim8 } from './ng-anim8';

describe('NgAnim8', () => {
  let component: NgAnim8;
  let fixture: ComponentFixture<NgAnim8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAnim8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAnim8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
