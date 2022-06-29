#### **Pré-requisitos**

- Uma Aplicação criada com a Stack **matter-web-react** e o parâmetro --stages. Se o parâmetro --stages não foi usado na criação da aplicação, é necessário criar um diretório com o nome stages no mesmo nível do app com um arquivo nomeado **`<stage_name>.json`** dentro dele. O arquivo deve ter o formato abaixo:

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
- Um Identity provider GitHub na sua conta AWS com uma role IAM com acesso ao s3 e uma trust relationship com o Identity provider. ([Exemplo](https://github.com/aws-actions/configure-aws-credentials#sample-iam-role-cloudformation-template))
- O arn dessa role IAM configurada como secret no Github do projeto com o nome **`PIPELINE_RELEASE_ROLE`**.
