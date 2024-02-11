import { StackContext } from 'sst/constructs';

export function ShowcaseStack({ stack }: StackContext) {
  stack.addOutputs({
    // ApiEndpoint: api.url,
  });
}
