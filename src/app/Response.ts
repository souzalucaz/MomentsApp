export interface Response<T> { //T é um generic
  message?: string;
  data: T;
}
