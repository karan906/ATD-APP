import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAtdComponent } from './test-atd.component';

describe('TestAtdComponent', () => {
  let component: TestAtdComponent;
  let fixture: ComponentFixture<TestAtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAtdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
