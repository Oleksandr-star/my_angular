import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        { path: '', component: HomeComponent },    
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
    ]},
];