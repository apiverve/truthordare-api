declare module '@apiverve/truthordare' {
  export interface truthordareOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface truthordareResponse {
    status: string;
    error: string | null;
    data: TruthorDareData;
    code?: number;
  }


  interface TruthorDareData {
      type:   string;
      prompt: string;
  }

  export default class truthordareWrapper {
    constructor(options: truthordareOptions);

    execute(callback: (error: any, data: truthordareResponse | null) => void): Promise<truthordareResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: truthordareResponse | null) => void): Promise<truthordareResponse>;
    execute(query?: Record<string, any>): Promise<truthordareResponse>;
  }
}
