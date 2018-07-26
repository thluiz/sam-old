import { Routes, RouterModule } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
  },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'public',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'diary',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'diary/day',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'diary/week',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'diary/agenda',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'diary/current_activities',
    loadChildren: './pages/diary/diary.module#DiaryModule'
  },
  {
    path: 'people',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/external_contacts',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/members',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/members/management/:branch/:filter',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/person/edit/:id',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/person/:id',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/interested',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/away',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/voucher',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/service-provider',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/operator/:id',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'people/operator/config/:id',
    loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'under-construction',
    loadChildren: './pages/under-construction/under-construction.module#UnderConstructionModule'
  },
  {
    path: 'login',
    loadChildren: './pages/under-construction/under-construction.module#UnderConstructionModule'
  },
  {
    path: 'organizations',
    loadChildren: './pages/cards/cards.module#CardsModule'
  },
  {
    path: 'organizations/detail/:id',
    loadChildren: './pages/cards/cards.module#CardsModule'
  },
  {
    path: 'organizations/config/:id',
    loadChildren: './pages/cards/cards.module#CardsModule'
  },
  {
    path: 'organizations/projects/:id',
    loadChildren: './pages/cards/cards.module#CardsModule'
  },
  {
    path: 'financial',
    loadChildren: './pages/financial/financial.module#FinancialModule'
  },
  {
    path: 'financial/:branch_id',
    loadChildren: './pages/financial/financial.module#FinancialModule'
  },
  {
    path: 'parameters',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'parameters/branches',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'parameters/accounts',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'parameters/domains',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'parameters/acquirers',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'products',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  },
  {
    path: 'parameters/vouchers',
    loadChildren: './pages/parameters/parameters.module#ParametersModule'
  }
];
