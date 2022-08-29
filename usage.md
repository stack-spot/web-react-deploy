#### **Pré-requisitos**

- Uma Aplicação criada com a stack **matter-web-react** e o parametro --stages. Se o parametro --stages não foi usado na criação da aplicação, é necessário criar um diretório com o nome stages no mesmo nível do app com um arquivo nomeado `<stage_name>.json` dentro dele. O arquivo tem qu ter o formato:

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

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) ou [npm](https://nodejs.org/en/)
- Uma conta AWS
- AWS secrets nas [variáveis de ambiente](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set)
- Um Identity provider Github na sua conta AWS com uma role IAM com acesso ao s3 e uma trust relationship com o Identity provider. ([Example](https://github.com/aws-actions/configure-aws-credentials#sample-iam-role-cloudformation-template))
- O arn dessa role IAM configurada como secret no Github do projeto com o nome `PIPELINE_RELEASE_ROLE`
