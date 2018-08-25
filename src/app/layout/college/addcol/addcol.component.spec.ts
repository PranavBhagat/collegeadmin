import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-brows
import { AddcolComponent } from './addcol.component';
import { AddcolModule } from './addcol.module';

describe('AddcolComponent', () => {
  let component: AddcolComponent;
  let fixture: ComponentFixture<AddcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        AddcolModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ AddcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
