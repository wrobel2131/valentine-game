import { Routes } from '@angular/router';
import { ChooseNicknamePageComponent } from './components/choose-nickname-page/choose-nickname-page.component';
import { PlaygroundComponent } from './components/playground/playground.component';

export const routes: Routes = [
  {
    path: '',
    component: ChooseNicknamePageComponent,
  },
  {
    path: 'game',
    component: PlaygroundComponent,
  },
];
