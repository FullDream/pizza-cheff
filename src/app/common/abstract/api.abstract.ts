import { Observable } from 'rxjs';

export abstract class ApiAbstract<Data> {
  public abstract get(url: string): Observable<Data>;
}
