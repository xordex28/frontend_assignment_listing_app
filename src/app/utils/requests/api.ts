import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Injectable } from "@angular/core";


@Injectable()
export abstract class API<T> {
  protected URL_API: string = env.API;
  protected abstract URL: string;

  static NAME = 'name';
  static EMAIL = 'email';
  static TOKEN = 'access_token';
  static DATE_LAST_TOKEN_REFRESH = 'date_last_token_refresh';
  static TOKEN_DURATION = 55;
  static ID = 'id';
  constructor(protected http: HttpClient) {
  }
  /**
* Funcion que ejecuta una solicitud post para
* Guardar el objeto
* @param value objeto a guardar
*/
  add(value: T): Observable<T> {
    return this.http.post<T>(this.URL, value);
  }

  /**
     * Funcion que ejecuta un solicitud get y retorna un lista
     * de objeto
     * @param params parametros para el query params
     */
  list(params?: {}): Observable<T[]> {
    return this.http.get<T[]>(this.URL, { params });
  }

  /**
 * Funcion que ejecuta una solicitud get para retornar
 * un solo object
 * @param id del objeto a retornar
 * @param params query params que se pasan con la consulta get
 */
  get(id: string, params?: {}): Observable<T> {
    return this.http.get<T>(this.URL + id + '', { params });
  }

  /**
 * Funcion que ejecuta una solicitud put para actualizar
 * un objeto
 *
 * @param id del objeto
 * @param value objeto con las modificaciones
 */
  update(id: string | number, value: T): Observable<T> {
    return this.http
      .put<T>(this.URL + id + '/', value);
  }

  /**
* Funcion que ejecuta una solicitud delete para eliminar un
* objeto
* @param id del objeto
*/
  remove(id: string | number): Observable<T> {
    return this.http
      .delete<T>(this.URL + id + '/');
  }

  /**
   * Funcion para procesar una url diferente del
   * objeto
   */
  execute(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

}