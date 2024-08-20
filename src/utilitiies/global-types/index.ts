
export type Uuid = string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;

export type PaginationInput = {
  page: number;
  pageSize: number;
  search?: string;
};

export type PaginationOutput<T> = PaginationInput & {
  data: T[];
  total: number;
};
