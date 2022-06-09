# clients.hunter-hill

## Development

To run locally:

```bash
npm ci
npm run dev
```

## Deployment

This is taken care of through the use of Github Actions (GHA).

### Deploying from local

1. You will need to have the AWS CLI installed.

1. You will need to have the following environment properties set when deploying from command line:

```bash
export AWS_ACCESS_KEY_ID=taco
export AWS_SECRET_ACCESS_KEY=moreTaco
```
