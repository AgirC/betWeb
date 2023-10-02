import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBettingComponent } from './sports-betting.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';

describe('SportsBettingComponent', () => {
  let component: SportsBettingComponent;
  let fixture: ComponentFixture<SportsBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsBettingComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ],
      providers: [
        TranslateService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SportsBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
