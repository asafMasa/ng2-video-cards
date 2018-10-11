import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppVideoComponent} from './app-video/app-video.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatTabsModule,
  MatButtonModule,
  MatBottomSheetModule, MatButtonToggleModule, MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppDetailsComponent} from './app-details/app-details.component';
import {ShowVideoService} from './show-video-service/show-video.service';

@NgModule({
  declarations: [
    AppComponent,
    AppVideoComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [ShowVideoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
