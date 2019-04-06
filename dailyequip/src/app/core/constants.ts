import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Constants {
    private static readonly API_BASE = environment.apibase;
    private static readonly API_Prefix = 'https://';
    static API = class {
        public static readonly getIds = Constants.API_Prefix + Constants.getAPIEndPoint('getIds');
        public static readonly getQ = Constants.API_Prefix + Constants.getAPIEndPoint('getQ');
    };

    static getAPIEndPoint(apiName): string {
        switch (apiName) {
            case 'getIds':
                return environment.serverType === 'aws' ? 'k507yvzf3h' + Constants.API_BASE : Constants.API_BASE + 'getIds';
            case 'getQ':
                return environment.serverType === 'aws' ? 'keoa9oi9a0' + Constants.API_BASE : Constants.API_BASE + 'getIds';
        }
    }
}