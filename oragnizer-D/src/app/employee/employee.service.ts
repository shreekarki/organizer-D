import { Injectable } from '@angular/core';
import {Employee} from '../employee';
import {Observable, of} from 'rxjs';
import {Department} from '../department';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private employeeUrl = 'http://i875395.hera.fhict.nl/api/334157/employee'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getEmployees(): Observable<Employee[]> {
     // Return new Promise(resolve => resolve(Employees));
    return this.http.get<Employee[]>(this.employeeUrl)
      .pipe(
        tap(_ => this.log('fetched departments')),
        catchError(this.handleError<Employee[]>('get employees', []))
      );
  }
  add(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: Employee) => this.log(`added department=${ newEmployee.id}`)),
      catchError(this.handleError<Employee>('addDepartment'))
    );
  }

  delete(employee: Department | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeeUrl}/?id=${id}`;
    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('delete Employee'))
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
