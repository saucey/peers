import { NgModule } from '@angular/core';
import { SenderRoutingModule } from './sender-routing.module';
import { SenderComponent } from './sender.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CallinfoDialogModule } from '../callinfo-dialog/callinfo-dialog.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SenderComponent],
  imports: [
    SenderRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    CallinfoDialogModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class SenderModule {}

