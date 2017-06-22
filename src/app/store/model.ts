import { IAnimalList } from '../animals/model';

export interface MyObjects {
  country: string;
  state: string;
  town: string;
}

export interface IAppState {
  elephants?: IAnimalList;
  lions?: IAnimalList;
  routes?: any;
  feedback?: any;
  myObjects?: MyObjects;
}
