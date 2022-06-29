- **Descrição:** O Plugin **`web-react-deploy`** adiciona à Stack a capacidade de criar recursos AWS e fazer deploy da aplicação no ambiente AWS criado.

- **Categoria:** Recursos
- **Stack:** matter-web-react
- **Criado:** 23/03/2022
- **Última atualização:** 23/03/2022
- **Download:** https://github.com/stack-spot/web-react-deploy.git

## **Visão Geral**

O **web-react-deploy** é um Plugin da Stack [matter-web-react](https://github.com/stack-spot/matter-web-react), que adiciona o código necessário para criar recursos AWS necessários para fazer deploy de uma aplicação no seu ambiente AWS. Também adiciona ao seu projeto os arquivos de GitHub Actions necessários para executar testes, construir e fazer deploy da aplicação neste ambiente.

## **Uso**

#### **Pré-requisitos**

- [STK CLI](https://docs.stackspot.com.br/v3.2.0/docs/stk-cli/installation/)
- [matter-web-react](https://github.com/stack-spot/zup-web-react) stack downloaded in your stk cli
- Uma aplicação [criada](https://docs.stackspot.com/v3.0.0/stk-cli/commands/commands-list/stk-create-app/) usando a Stack [matter-web-react](https://github.com/stack-spot/zup-web-react) com o parâmetro `--stages`. Se o parâmetro `--stages` não foi usado na criação da aplicação, é necessário criar um diretório com o nome stages no mesmo nível do app com um arquivo nomeado **`<stage_name>.json`** dentro dele. O arquivo deve ter o formato abaixo:

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
- AWS secrets nas [variáveis de ambiente](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set)
- Um Identity provider GitHub na sua conta AWS com uma role IAM com acesso ao s3 e uma trust relationship com o Identity provider. ([Exemplo](https://github.com/aws-actions/configure-aws-credentials#sample-iam-role-cloudformation-template))
- O arn dessa role IAM configurada como secret no Github do projeto com o nome **`PIPELINE_RELEASE_ROLE`**.

### **Exemplo de uso**

[Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set) suas variáveis de ambiente

Aplique o Plugin

```bash
stk apply plugin web-react-deploy
```

Crie os recursos no seu ambiente AWS

```bash
stk deploy <stage>
```

Faça commit e push do seu código.

Após o merge de suas alterações, crie a release no GitHub  com o formato **`<stage>-v0.0.0`**.

A action de release começará no GitHub, e se não houver nenhum erro com os testes, o build, ou a qualidade do código, a release será implantada no ambiente criado anteriormente.