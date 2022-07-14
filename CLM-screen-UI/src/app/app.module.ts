import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {InvestorsCriteriaComponent} from './components/investors-criteria/investors-criteria.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { DataTableComponent } from './components/data-table/data-table.component'
import {MatTableModule} from '@angular/material/table';
import { AddNewInvestorFormComponent } from './components/add-new-investor-form/add-new-investor-form.component';
import { AllLoansComponent } from './components/all-loans/all-loans.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AllQueriesComponent } from './components/all-queries/all-queries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    AddNewInvestorFormComponent,
    InvestorsCriteriaComponent,
    DataTableComponent,
    AllLoansComponent,
    TransactionHistoryComponent,
    AllQueriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
