import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormComponent } from './bet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const DATA = {
  betRate: {
    name: '1',
    rate: 1.25
  },
  userCapital: 30
}

describe('BetFormComponent', () => {
  let component: BetFormComponent;
  let fixture: ComponentFixture<BetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetFormComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
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
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: DATA },
        TranslateService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dialogRef.close() method', function() {
    const dialogRef = {
      close: jasmine.createSpy('close')
    } as unknown as MatDialogRef<BetFormComponent, any>;
    const component = new BetFormComponent(dialogRef, null);

    component.cancel();

    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('input should NOT BE valid if its value is MORE than userCapital', function() {
    component.betAmount.setValue(35);
    expect(component.betAmount.valid).toBe(false);
  });

  it('input should BE valid if its value is LESS than userCapital', function() {
    component.betAmount.setValue(12);
    expect(component.betAmount.valid).toBe(true);
  });

  it('input should BE valid if its value is EQUAL than userCapital', function() {
    component.betAmount.setValue(30);
    expect(component.betAmount.valid).toBe(true);
  });

});
