import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { MountainSceneComponent } from './components/mountain-scene/mountain-scene.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchMakingComponent } from './pages/match-making/match-making.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chat', component: ChatsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'matchmaking', component: MatchMakingComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'scene', component: MountainSceneComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full'}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
