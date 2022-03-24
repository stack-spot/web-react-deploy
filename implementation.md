After applying the plugin, create the resources in your aws environment with the command in the project folder

```bash
stk deploy <stage>
```

Commit and push your code.

After merging the commited changes, generate a release in github with the format `<stage>-v0.0.0`.

The release action is going to start in github and if no errors happens with the tests, build or quality with your code the release is going to be deployed in the created environment.
