[![Build Status](https://img.shields.io/azure-devops/build/MatthiasKunnen/nmbrs-example/MatthiasKunnen.nmbrs-example.svg?logo=azure-pipelines&style=for-the-badge)
](https://dev.azure.com/MatthiasKunnen/NMBRS-Example/_build)

NMBRS Example
=================

Fetches all absences of all people in a NMBRS account and stores them in a JSON file.

# Configuration
Change configuration by creating `src/config/config.local.ts`. Example:

```TypeScript
import { config } from './config';

config.aws.credentials.accessKeyId = 'AWS access key here';
config.aws.credentials.secretAccessKey = 'AWS secret key here';
```
