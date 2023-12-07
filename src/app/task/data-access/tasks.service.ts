import { Injectable, inject } from "@angular/core";
import { Task } from "../model/Task";
import { ListFetchingError } from "../../utils/list-state.type";
import { wait } from "../../utils/wait";
import { HttpClient } from "@angular/common/http";

export type TaskUpdatePayload = { done?: boolean; name?: string };

export type GetAllTasksSearchParams = {
  q: string;
  _sort: "createdAt";
  _order: "desc" | "asc";
  done_like: "true" | "false" | "";
};

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private URL = "http://localhost:3000";

  private http = inject(HttpClient);

  getAll(searchParams: GetAllTasksSearchParams) {
    return this.http.get<Task[]>(`${this.URL}/tasks`, {
      observe: "response",
      params: searchParams,
    });
  }

  delete(taskId: number) {
    const url = new URL(`/tasks/${taskId}`, this.URL);

    return this.http.delete(url.href);
  }

  update(taskId: number, payload: TaskUpdatePayload) {
    const url = new URL(`/tasks/${taskId}`, this.URL);

    return this.http.patch<Task>(url.href, payload);
  }

  add(name: string) {
    const url = new URL(`/tasks`, this.URL);

    return this.http.post<Task>(url.href, { name: name });
  }
}
