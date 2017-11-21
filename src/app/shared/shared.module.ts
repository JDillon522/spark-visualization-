import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule, MatGridListModule,
  MatTooltipModule, MatFormFieldModule, MatInputModule, MatListModule, MatExpansionModule, MatProgressSpinnerModule, MatCheckboxModule,
  MatTableModule
} from '@angular/material';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  exports: [
    CommonModule,
    // Material
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,

    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    DataTableModule,
    SharedModule,

    MatTableModule,
    CdkTableModule
  ],
  declarations: []
})
export class AppSharedModule { }