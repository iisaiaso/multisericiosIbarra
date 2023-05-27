import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { HeaderDashboardComponent } from './components/dashboard/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './components/dashboard/footer-dashboard/footer-dashboard.component';
import { SidebarDashboardComponent } from './components/dashboard/sidebar-dashboard/sidebar-dashboard.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent,
        ProductsComponent,
        HeaderDashboardComponent,
        FooterDashboardComponent,
        SidebarDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent,
        ProductsComponent,
        HeaderDashboardComponent,
        FooterDashboardComponent,
        SidebarDashboardComponent
    ]
})
export class SharedModule { }