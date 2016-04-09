import {Injectable} from "angular2/core";
@Injectable()
export class FiltersService {
  public filters:Array<any> = [];

  update(k:string, v:string) {
    this.filters[k] = v;
  };

  get():Array<any> {
    return this.filters;
  }
}
