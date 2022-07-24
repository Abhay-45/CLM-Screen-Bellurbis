import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewInvestorComponent } from './pages/add-new-investor/add-new-investor.component';
import { AllLoansPageComponent } from './pages/all-loans-page/all-loans-page.component';
import { ApprovalRequestsPageComponent } from './pages/approval-requests-page/approval-requests-page.component';
import { CreateNewLoanComponent } from './pages/create-new-loan/create-new-loan.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DealHistoryComponent } from './pages/deal-history/deal-history.component';
import { InvestorsComponent } from './pages/investors/investors.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { UploadLoansComponent } from './pages/upload-loans/upload-loans.component';

const routes: Routes = [
  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'investors', component: InvestorsComponent},
  {path: 'all-loans', component: AllLoansPageComponent},
  {path: 'approval-requests', component: ApprovalRequestsPageComponent},
  {path: 'queries', component: QueriesComponent},
  {path: 'upload-loans', component: UploadLoansComponent},
  {path: 'deal-history', component: DealHistoryComponent},
  {path: 'add-new-investor', component: AddNewInvestorComponent},
  {path: 'create-new-loan-form', component: CreateNewLoanComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
