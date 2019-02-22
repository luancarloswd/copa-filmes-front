import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGerarCopaComponent } from './btn-gerar-copa.component';

describe('BtnGerarCopaComponent', () => {
  let component: BtnGerarCopaComponent;
  let fixture: ComponentFixture<BtnGerarCopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGerarCopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGerarCopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
