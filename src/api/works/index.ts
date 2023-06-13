import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Works } from '../types';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Works>;
  };
};
