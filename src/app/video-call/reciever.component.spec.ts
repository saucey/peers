import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecieverComponent } from './reciever.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecieverComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RecieverComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-peerjs'`, () => {
    const fixture = TestBed.createComponent(RecieverComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-peerjs');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RecieverComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-peerjs app is running!');
  });
});
