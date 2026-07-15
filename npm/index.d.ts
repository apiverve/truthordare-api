declare module '@apiverve/truthordare' {
  export interface truthordareOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface truthordareResponse {
    status: string;
    error: string | null;
    data: TruthorDareData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TruthorDareData {
      type:   null | string;
      prompt: null | string;
  }

  export default class truthordareWrapper {
    constructor(options: truthordareOptions);

    execute(callback: (error: any, data: truthordareResponse | null) => void): Promise<truthordareResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: truthordareResponse | null) => void): Promise<truthordareResponse>;
    execute(query?: Record<string, any>): Promise<truthordareResponse>;
  }
}
