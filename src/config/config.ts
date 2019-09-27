import * as fs from 'fs';
import { join } from 'path';

export interface ConfigInterface {
    aws: {
        credentials: {
            accessKeyId: string,
            secretAccessKey: string,
        },
        region: 'eu-west-1',
    };
}

export const config: ConfigInterface = {
    aws: {
        credentials: {
            accessKeyId: '',
            secretAccessKey: '',
        },
        region: 'eu-west-1',
    },
};

if (fs.existsSync(join(__dirname, 'config.local.ts'))) {
    // tslint:disable-next-line:no-require-imports no-var-requires
    require('./config.local.ts');
}
