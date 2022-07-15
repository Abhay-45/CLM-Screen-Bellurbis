import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { InvestorsCriteriaComponent } from './components/investors-criteria/investors-criteria.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { DataTableComponent } from './components/data-table/data-table.component'
import { MatTableModule } from '@angular/material/table';
import { AddNewInvestorFormComponent } from './components/add-new-investor-form/add-new-investor-form.component';

import { AllLoansComponent } from './components/all-loans/all-loans.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AllQueriesComponent } from './components/all-queries/all-queries.component';

import { ButtonCommonComponent } from './components/button-common/button-common.component';
import { DashboardDisplayWidgetsComponent } from './components/dashboard-display-widgets/dashboard-display-widgets.component';
import { CreateNewLoanFormComponent } from './components/create-new-loan-form/create-new-loan-form.component';

import { MatDividerModule } from '@angular/material/divider';


import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvestorsComponent } from './pages/investors/investors.component';
import { ApprovalRequestsComponent } from './pages/approval-requests/approval-requests.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { UploadLoansComponent } from './pages/upload-loans/upload-loans.component';
import { DealHistoryComponent } from './pages/deal-history/deal-history.component';
import { AddNewInvestorComponent } from './pages/add-new-investor/add-new-investor.component';
import { CreateNewLoanComponent } from './pages/create-new-loan/create-new-loan.component';



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

    ButtonCommonComponent,
    DashboardDisplayWidgetsComponent,
    CreateNewLoanFormComponent,

    ApprovalRequestsComponent,
    TableComponent,


    DashboardComponent,
    InvestorsComponent,
    ApprovalRequestsComponent,
    QueriesComponent,
    UploadLoansComponent,
    DealHistoryComponent,
    AddNewInvestorComponent,
    CreateNewLoanComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,

    MatButtonToggleModule,
    MatPaginatorModule,
    CdkTableModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }