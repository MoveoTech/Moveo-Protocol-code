/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum MethodOption {
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete',
  PATCH = 'patch'
}
const baseURL = 'https://exampleUrl.com';

export const HttpClientService = {
  async post<T>(
    url: string,
    data: unknown,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      data,
      method: MethodOption.POST
    });
  },

  async put<T>(
    url: string,
    data: unknown,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      data,
      method: MethodOption.PUT
    });
  },
  async get<T>(
    url: string,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      method: MethodOption.GET
    });
  },

  async delete<T>(
    url: string,
    data: unknown,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      data,
      method: MethodOption.DELETE
    });
  },

  async patch<T>(
    url: string,
    data: unknown,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      data,
      method: MethodOption.PATCH
    });
  },

  async send<T>(
    httpOptions: AxiosRequestConfig
  ): Promise<AxiosResponse<T, any>> {
    httpOptions.headers = {
      ...httpOptions.headers
    };
    return axios(httpOptions);
  }
};
