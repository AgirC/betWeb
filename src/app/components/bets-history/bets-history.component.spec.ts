import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsHistoryComponent } from './bets-history.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';


describe('BetsHistoryComponent', () => {
  let component: BetsHistoryComponent;
  let fixture: ComponentFixture<BetsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetsHistoryComponent],
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

    fixture = TestBed.createComponent(BetsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
