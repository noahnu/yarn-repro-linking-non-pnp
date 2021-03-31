# yarn-repro-linking-non-pnp

Modify `yarn2-pnp-project`'s package.json and update the absolute path to the yarn1-nm-project, that is change this line:

```
"my-linked-package": "portal:/Users/noah/repos/yarn-repro-linking-non-pnp/yarn1-nm-project/my-linked-package"
```

and then run yarn from within yarn2-pnp-project.

```
cd yarn2-pnp-project && yarn node index.js
```

Will return true which is correct.

```
cd yarn2-pnp-project && yarn build
```

After building, search for "yarn1-nm-project/node_modules/react-dom/index.js" in the dist/bundle.js file. It's the node_modules!
