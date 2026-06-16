import { TestBed } from '@angular/core/testing';
import { App } from './app';

(window as any).IntersectionObserver = class {
  observe()    {}
  disconnect() {}
  unobserve()  {}
};

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the layout', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-layout')).not.toBeNull();
  });
});
