import { SSTConfig } from 'sst';
import { ShowcaseStack } from './stacks/showcase-stack';

export default {
  config(_input) {
    return {
      name: 'showcase',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(ShowcaseStack, { id: 'main' });
  },
} satisfies SSTConfig;
