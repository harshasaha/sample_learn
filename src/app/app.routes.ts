import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Skincare } from './skincare/skincare';
import { Babycare } from './babycare/babycare';

export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'skincare',
        component: Skincare
    },
    {
        path: 'babycare',
        component: Babycare
    }
];
