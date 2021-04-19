#!/bin/bash

set -e

cd yarn1-nm-project
yarn

cd ../yarn2-pnp-project
yarn

yarn node index.js

