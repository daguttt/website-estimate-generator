import { inject, Injectable } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';

import { Subject, switchMap } from 'rxjs';

import { environment } from '@/env';

import { CreateEstimate } from './create-estimate.model';
import { EstimateGeneratorClient } from './estimate-generator-client.service';

function validateEnum(enumValues: string[]): ValidatorFn {
  return (control) => {
    const valueInEnum = enumValues.includes(control.value);
    if (!valueInEnum) return { enum: true };
    return null;
  };
}

@Injectable()
export class EstimateFormStore {
  private readonly fb = inject(FormBuilder);
  private readonly estimateGeneratorClient = inject(EstimateGeneratorClient);

  public readonly form = this.fb.nonNullable.group(
    {
      brandName: ['', Validators.required],
      brandPrimaryColor: ['', Validators.required],
      description: ['', Validators.required],
      numberOfPages: [
        '2',
        [Validators.required, validateEnum(['1', '2', '3', '4'])],
      ],
      numberOfRevisions: [
        '2',
        [Validators.required, validateEnum(['2', '3', '4'])],
      ],
      deliveryTime: [
        '2d-3d',
        [Validators.required, validateEnum(['2d-3d', '3d-5d'])],
      ],
    },
    { updateOn: 'blur' },
  );

  public readonly formSubmitted$ = new Subject<typeof this.form.value>();

  constructor() {
    // Effects

    // Mock initial form state
    if (!environment.production) {
      this.form.patchValue({
        brandName: 'My company name',
        brandPrimaryColor: '#6F4E37',
        description:
          'I need a modern, responsive website for my coffee shop called Morning Brew',
        numberOfPages: '2',
        numberOfRevisions: '2',
        deliveryTime: '2d-3d',
      });
    }

    this.formSubmitted$
      .pipe(
        switchMap((value) =>
          this.estimateGeneratorClient.generateEstimate(
            value as CreateEstimate,
          ),
        ),
      )
      .subscribe((response) => {
        console.log({ response });
      });

    // this.form.events.subscribe((event) => {
    //   console.dir(event);
    // });
  }
}
