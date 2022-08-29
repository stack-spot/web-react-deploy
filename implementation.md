Após aplicar o plugin, crie os recursos na sua conta AWS com o camando seguinte:

```bash
stk run deploy-env <stage>
```

Faça o commit e dê o push do seu código.

Após feito o merge das mudanças, gere um release no Github com o seguinte formato `<stage>-v0.0.0`.

A action de release começará no Github e se não houver nenhum erro com os testes, o build ou a qualidade do código, a release será implantada no ambiente criado anteriormente.
