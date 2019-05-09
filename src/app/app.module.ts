import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatButtonModule
} from '@angular/material';
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CardGeneratorComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
