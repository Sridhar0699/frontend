import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PctService {

constructor(private http: HttpClient) { } 

headers={
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

  private baseUrl = "http://localhost:8080/project/"

  createProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}` + "createProject1", project);
  }

  getAllParent(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}` + 'getAllParentProjects')
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}` + 'get')
  }

  getProjetctByName(name: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}` + "getProjectByName/" + `${name}`)
  }

  createTask(formData: any, parentProjectId: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}` + "createTask/" + `${parentProjectId}`, formData);
  }
  getProjectById(projectId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}` + 'getProjectById/' + `${projectId}`)
  }

  getAllNames():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+"getAll")
  }

  updateProject(project:any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}`+"update",project)
  }

  updateParentTasks(task:any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}`+"updateTask",task)
  }
  
  getParentTasksByName(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+"parent/"+`${name}`)
  }





  // getAllPS(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}` + 'getAll')
  // }

  // getAllChild(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}` + 'getAllChild')
  // }



  // getParentTasksBasedOnTheirId(id:any):Observable<any>{
  //   return this.http.get<any>(`${this.baseUrl}`+"getParentTaskById/"+`${id}`)
  // }

  // getChildTasksBasedOnId(id:any):Observable<any>{
  //   return this.http.get<any>(`${this.baseUrl}`+"getChildTaskById/"+`${id}`)
  // }
}
