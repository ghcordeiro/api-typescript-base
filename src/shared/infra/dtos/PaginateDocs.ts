import { Request } from "express";

export class PaginateDocs<T> {

  public docs: Array<T>;
  public offset: number;
  public limit: number;
  public total: number;

  constructor() {
    this.docs = new Array<T>();
    this.offset = 0;
    this.limit = 0;
    this.total = 0;
  }

  public static fromRequest<T>(request: Request): PaginateDocs<T> {
    const pag = new PaginateDocs<T>();
    pag.offset = request.query.offset !== undefined ? Number(request.query.offset) : 0;
    pag.limit = request.query.limit !== undefined ? Number(request.query.limit) : 20;
    return pag;
  }

}
