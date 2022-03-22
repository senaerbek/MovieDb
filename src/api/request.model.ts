export class ResponseModel<T> {
  constructor(private body: T) {}

  getBody(): T {
    return this.body;
  }
}
