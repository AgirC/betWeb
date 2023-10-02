import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * This component is used as a Dialog to allow the user to select the amount of money that he/she wants to bet. 
 */
@Component({
  selector: 'bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.scss']
})
export class BetFormComponent implements OnInit {

  betAmount!: FormControl<number | null | undefined>;

  /**
   * 
   * @param dialogRef The dialogRef necesary to use as a Dialog
   * @param data teh data to pass to the component. There are two main parameters in this data: betRate and userCapital
   * 
   */
  constructor(
    public dialogRef: MatDialogRef<BetFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  /**
   * We use onInit to init the form control with the amount to bet and a max validator(set to user capital)
   */
  ngOnInit(): void {
    this.betAmount = new FormControl(this.data.betRate.amount, Validators.max(this.data.userCapital))
  }

  /**
   * This method close the dialog without passing back any data
   */
  cancel(): void {
    this.dialogRef.close();
  }

}
