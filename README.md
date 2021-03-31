# yarn-repro-linking-non-pnp

```
cd yarn2-pnp-project && yarn node index.js
```

Will return true which is correct.

```
cd yarn2-pnp-project && yarn build
```

After building, search for "yarn1-nm-project/node_modules/react-dom/index.js" in the dist/bundle.js file. It's the node_modules!
