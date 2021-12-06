import { NgModule } from '@angular/core';
import { RecieverRoutingModule } from './reciever-routing.module';
import { RecieverComponent } from './reciever.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CallinfoDialogModule } from '../callinfo-dialog/callinfo-dialog.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RecieverComponent],
  imports: [
    RecieverRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    CallinfoDialogModule,
    CommonModule,
  ],
  providers: [],
})
export class RecieverModule {}

