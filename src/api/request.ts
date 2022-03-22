import {ResponseModel} from './request.model';

const BASE_URL = 'https://api.themoviedb.org/3/';

export function get(url: string) {
    return request('GET', url);
}

export function request(method: string, url: string, body?: any): Promise<any> {
    const headers = {
        'Content-Type': 'application/json',
    };
    const args = {headers, method, body: JSON.stringify(body)};
    return fetch(BASE_URL + url, args).then(response => {
        return response
            .json()
            .then(content => {
                return new ResponseModel(content);
            })
            .catch(() => console.log('error'));
    });
}
