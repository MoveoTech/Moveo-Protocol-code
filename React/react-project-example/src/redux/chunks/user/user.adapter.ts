/* eslint-disable class-methods-use-this */
import { AxiosResponse } from 'axios';
import { HttpClientService } from '../../../services/HttpClientService';

const baseUrl = 'https://exampleUrl.com';

class UsersAdapter {
  static readonly endpoint = `${baseUrl}`;

  async getUserEmail(userAccessToken: string): Promise<AxiosResponse<string>> {
    const headers = {
      Authorization: `Bearer ${userAccessToken}`,
      'Access-Control-Allow-Origin': '*',
      Accept: '*/*',
    };
    // Make the request using HttpClientService or your preferred HTTP client
    const response = await HttpClientService.get<string>(
      `${UsersAdapter.endpoint}/email`,
      {
        headers,
      },
    );
    return response;
  }
}

const usersAdapter = new UsersAdapter();
export default usersAdapter;
