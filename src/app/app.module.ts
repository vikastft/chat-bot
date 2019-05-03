import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatTooltipModule,
  MatSliderModule
} from "@angular/material";
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatProgressBarModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    MatSliderModule,

    FormsModule

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
