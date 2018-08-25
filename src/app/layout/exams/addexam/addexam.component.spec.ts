import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AddexamComponent } from './addexam.component';
import { AddexamModule } from './addexam.module';

describe('AddexamComponent', () => {
  let component: AddexamComponent;
  let fixture: ComponentFixture<AddexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({{imports: [
        AddexamModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ AddexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
