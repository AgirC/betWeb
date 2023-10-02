import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetStatusComponent } from './bet-status.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';

describe('BetStatusComponent', () => {
  let component: BetStatusComponent;
  let fixture: ComponentFixture<BetStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetStatusComponent ],
      imports: [
       TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        CommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        TranslateService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
