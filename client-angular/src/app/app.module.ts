import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './users/user-row/userrow.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { CustomerRowComponent } from './customers/customer-row/customer-row.component';
import { CustomerUsersComponent } from './customers/customer-users/customer-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [{ path: ':id/users', component: CustomerUsersComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    UsersComponent,
    CustomersComponent,
    HomeComponent,
    CustomerRowComponent,
    CustomerUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [UsersService, NgbModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
