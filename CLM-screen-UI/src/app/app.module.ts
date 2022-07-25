import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { ApprovalRequestsComponent } from './components/approval-requests/approval-requests.component';

import { AddNewInvestorComponent } from './pages/add-new-investor/add-new-investor.component';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvestorsComponent } from './pages/investors/investors.component';

import { QueriesComponent } from './pages/queries/queries.component';
import { UploadLoansComponent } from './pages/upload-loans/upload-loans.component';
import { DealHistoryComponent } from './pages/deal-history/deal-history.component';
import { CreateNewLoanComponent } from './pages/create-new-loan/create-new-loan.component';

import { AllLoansPageComponent } from './pages/all-loans-page/all-loans-page.component';

import { DashboardPiechartComponent } from './components/dashboard-piechart/dashboard-piechart.component';
import { QueriesGraphComponent } from './components/queries-graph/queries-graph.component';
import { ApprovalRequestsPageComponent } from './pages/approval-requests-page/approval-requests-page.component';
import { UploadLoansBodyComponent } from './components/upload-loans-body/upload-loans-body.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';
import { ApprovalRequestTableComponent } from './components/approval-request-table/approval-request-table.component';
import { DealHistoryTableComponent } from './components/deal-history-table/deal-history-table.component';


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

    AddNewInvestorComponent,

    ButtonCommonComponent,
    DashboardDisplayWidgetsComponent,
    CreateNewLoanFormComponent,

    TableComponent,
    DashboardComponent,
    InvestorsComponent,

    QueriesComponent,
    UploadLoansComponent,
    DealHistoryComponent,

    CreateNewLoanComponent,

    AllLoansPageComponent,



    DashboardPiechartComponent,
    QueriesGraphComponent,
    ApprovalRequestsPageComponent,
    UploadLoansBodyComponent,
    ApprovalRequestsComponent,
    ApprovalRequestTableComponent,
    DealHistoryTableComponent
    

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
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    MatInputModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }