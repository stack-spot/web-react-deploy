#### **Prerequisites**

- An application created with the stack zup-web-react and the --stages param. If the --stages params wasn't used to create the application, it is necessary to create a stages folder in the level of the app and a file named `<stage_name>.json` inside it with the following format:

  ```
  {
  "cloud": {
      "account": {
          "id": "<aws_account_id>",
          "region": "<aws-region>"
      }
    }
  }
  ```

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://nodejs.org/en/)
- AWS secrets set in the [environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set)
- A github Identity provider in your AWS account and an IAM role with access to s3 and a trust relashionship with this identity provider. ([Example](https://github.com/aws-actions/configure-aws-credentials#sample-iam-role-cloudformation-template))
- An AWS account
- This IAM role arn configured as a secret in the project github with the name `PIPELINE_RELEASE_ROLE`
