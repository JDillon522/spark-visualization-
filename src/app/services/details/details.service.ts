import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {

  constructor(private httpClient: HttpClient) { }

  getDetails(tagId: string, start: string, end: string) {
    return this.httpClient.post('/api/details', JSON.stringify(arguments)).map(res => res);
  }

}
