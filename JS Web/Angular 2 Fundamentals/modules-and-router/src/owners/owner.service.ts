import { Injectable } from '@angular/core';

import { Owner } from './Owner';
import { OWNERS } from '../Data'

@Injectable()
export class OwnerService {
  getOwners(): Promise<Owner[]> {
    return Promise.resolve(OWNERS);
  }
}