import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGerarCopaComponent } from './btn-gerar-copa.component';
import { FilmeService } from 'src/app/service/filme.service';
import { HttpClientModule } from '@angular/common/http';

describe('BtnGerarCopaComponent', () => {
  let component: BtnGerarCopaComponent;
  let fixture: ComponentFixture<BtnGerarCopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGerarCopaComponent ],
      providers: [FilmeService],
      imports: [HttpClientModule]
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
