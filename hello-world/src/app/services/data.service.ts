import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class DataService {
  constructor(private url: string, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url).pipe(map((r) => r))
  }

  create(resource) {
    return this.httpClient.post(this.url, JSON.stringify(resource))
  }

  delete(id) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(resource){
    return this.httpClient.patch(this.url + "/" + resource.id, resource)
  }
}
