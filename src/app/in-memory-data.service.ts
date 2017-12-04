import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const prozorci = [
      { id: 11, width: 10, height: 12, type: 'KBE', shema: 'ednokril' },
      { id: 12, width: 10, height: 12, type: 'Kommerling 76', shema: 'fix' },
      { id: 13, width: 10, height: 12, type: 'KMG 4', shema: 'dvukril' },
    ];

    return { prozorci };
  }
}
