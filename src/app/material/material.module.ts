import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatIconModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatListModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatTabsModule, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

const MaterialComponents = [
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  HighchartsChartModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
