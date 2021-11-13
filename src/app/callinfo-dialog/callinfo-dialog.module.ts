import { ClipboardModule } from "@angular/cdk/clipboard";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CallInfoDialogComponent } from "./callinfo-dialog.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ClipboardModule,
    MatDialogModule,
  ],
  declarations: [CallInfoDialogComponent],
  exports: [CallInfoDialogComponent],
})
export class CallinfoDialogModule {}
