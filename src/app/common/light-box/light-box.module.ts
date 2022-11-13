import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxComponent } from './light-box.component';
import { LightBoxService } from './light-box.service';

@NgModule({
  declarations: [LightBoxComponent],
  imports: [CommonModule],
  providers: [LightBoxService],
  exports: [LightBoxComponent],
})
export class LightBoxModule {}
