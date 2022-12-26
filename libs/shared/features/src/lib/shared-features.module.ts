import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoModule } from './app-info/app-info.module';

@NgModule({
  imports: [CommonModule, AppInfoModule],
  exports: [AppInfoModule],
})
export class SharedFeaturesModule {}
