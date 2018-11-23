import { TestBed } from '@angular/core/testing';

import { ExplorateurService } from './explorateur.service';

describe('ExplorateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExplorateurService = TestBed.get(ExplorateurService);
    expect(service).toBeTruthy();
  });
});
