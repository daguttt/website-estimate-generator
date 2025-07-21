import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { CreateEstimate } from './create-estimate.model';

@Injectable({
  providedIn: 'root',
})
export class EstimateGeneratorClient {
  private readonly http = inject(HttpClient);

  public generateEstimate(createEstimateDto: CreateEstimate) {
    console.log({ createEstimateDtoJson: JSON.stringify(createEstimateDto) });
    return this.http.post(
      '/api/estimate-generator',
      JSON.stringify(createEstimateDto),
    );
  }
}
