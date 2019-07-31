import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/errors/not-found/not-found.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './account/register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoleGuard } from './role.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/home',
        canActivate: [AuthGuard],
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['InternalUser']
        }
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [
  NotFoundComponent,
  LoginComponent,
  HomeComponent,
  CartComponent,
  AboutComponent,
  UserComponent,
  RegisterComponent,
  AdminComponent,
  EmployeeComponent
];