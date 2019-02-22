import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoComponent } from './cabecalho.component';
import { MatDivider, MatCard } from '@angular/material';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoComponent, MatDivider, MatCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
