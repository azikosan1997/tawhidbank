import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/personal/main/main.component';
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {LayoutComponent} from "./shared/layout/layout.component";
import {SharedModule} from "./shared/shared.module";
import {PersonalModule} from "./views/personal/personal.module";
import {AboutModule} from "./views/about/about.module";
import {DepositModule} from "./views/deposit/deposit.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    SharedModule,
    PersonalModule,
    AboutModule,
    DepositModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
