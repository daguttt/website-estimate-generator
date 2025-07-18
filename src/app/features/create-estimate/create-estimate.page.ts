import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HlmButtonModule } from '@spartan-ng/helm/button';
import { HlmFormFieldModule } from '@spartan-ng/helm/form-field';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { EstimateFormStore } from './estimate-form.store';

@Component({
  selector: 'app-create-estimate',
  imports: [
    ReactiveFormsModule,
    HlmFormFieldModule,
    HlmInputDirective,
    HlmButtonModule,
  ],
  providers: [EstimateFormStore],
  host: {
    class: 'block',
  },
  templateUrl: './create-estimate.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEstimatePage {
  protected readonly formStore = inject(EstimateFormStore);
}
