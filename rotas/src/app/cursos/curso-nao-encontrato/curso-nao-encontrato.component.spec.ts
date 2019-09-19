import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoEncontratoComponent } from './curso-nao-encontrato.component';

describe('CursoNaoEncontratoComponent', () => {
  let component: CursoNaoEncontratoComponent;
  let fixture: ComponentFixture<CursoNaoEncontratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNaoEncontratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoEncontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
