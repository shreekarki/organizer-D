export class Task {
  constructor(
    public id: number,
    public name: string,
    public dueDate: string,
    public complete: boolean,
  ) {}
}
