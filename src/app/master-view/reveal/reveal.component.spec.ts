import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RevealComponent } from './reveal.component';

describe('RevealComponent', () => {
  let component: RevealComponent;
  let fixture: ComponentFixture<RevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RevealComponent, NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
