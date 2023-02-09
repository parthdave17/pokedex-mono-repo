import { AxiosRequestConfig } from "axios";
type Config = AxiosRequestConfig<any>;
declare const makeAPIcall: (url: string, config: Config) => Promise<any>;
export default makeAPIcall;
