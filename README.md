- **Description:** The plugin `web-react-deploy` adds to a stack the capability to create AWS resourses and deploy the application in the AWS environment created.

- **Category:** Resources
- **Stack:** matter-web-react
- **Created:** 23/03/2022
- **Last update:** 23/03/2022
- **Download:** https://github.com/stack-spot/web-react-deploy.git

## **About the plugin**

### **web-react-deploy**

The **web-react-deploy** is a plugin for the [matter-web-react](https://github.com/stack-spot/zup-web-react) stack that adds the code needed to crate AWS resources that are necessary to deploy the application to your AWS environment. It also adds to you project the github action files needed for running tests, building and deploying the application in this environment.

## **Usage**

#### **Prerequisites**

- [STK cli](https://docs.stackspot.com.br/v3.2.0/docs/stk-cli/installation/)
- [zup-web-react](https://github.com/stack-spot/zup-web-react) stack downloaded in your stk cli
- An application [created](https://docs.stackspot.com/v3.0.0/stk-cli/commands/commands-list/stk-create-app/) with the stack [zup-web-react](https://github.com/stack-spot/zup-web-react) and the --stages param. If the --stages params wasn't used to create the application, it is necessary to create a stages folder in the level of the app and a file named `<stage_name>.json` inside it with the following format:

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
- This IAM role arn configured as a secret in the project github with the name `PIPELINE_RELEASE_ROLE`

### **Usage example**

[Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set) your aws environment variables.

Apply the plugin

```bash
stk apply plugin web-react-deploy
```

Create the resources in your aws environment

```bash
stk run deploy-env <stage>
```

Commit and push your code.

After merging the commited changes, generate a release in github with the format `<stage>-v0.0.0`.

The release action is going to start in github and if no errors happens with the tests, build or quality with your code the release is going to be deployed in the created environment.

