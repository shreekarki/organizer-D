import { Injectable } from '@angular/core';
import {Department} from '../department';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentUrl = 'http://i875395.hera.fhict.nl/api/334157/department';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }
  getDepartments(): Observable<Department[]> {
    // return new Promise(resolve => resolve(Departments));
    return this.http.get<Department[]>(this.departmentUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Department[]>('getHeroes', []))
      );
  }
  add(department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentUrl, department, this.httpOptions).pipe(
      tap((newDepartment: Department) => this.log(`added department=${ newDepartment.id}`)),
      catchError(this.handleError<Department>('addDepartment'))
    );
  }

  put(department: Department): Observable<any> {
    return this.http.put(this.departmentUrl, department, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${department.id}`)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }
  delete(department: Department | number): Observable<Department> {
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.departmentUrl}/?id=${id}`;

    return this.http.delete<Department>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}

