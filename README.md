# NPM packaging

## Process

- Select a name for the package. Check in npm-registry for new name.
- Initialize git repo and run npm init to initialize the npm project
- Entry point for the code: default: index.ts

```bash
pnpm i typescript @types/nodes tsup —save-dev
pnpm tsc —init
```

- Add build script in package.json

```bash
{
  "name": "csv-to-prismadb",
  "version": "0.0.1",
  "description": "Convert your csv to a prisma schema ",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsup index.ts --format cjs,esm --dts",
    "release": "pnpm run build && changeset publish",
    "lint": "tsc"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/Pratyush-Udhani/csv-to-prismadb.git"
  },
  "keywords": [
    "prisma",
    "csv"
  ],
  "author": "Pratyush Udhani",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Pratyush-Udhani/csv-to-prismadb/issues"
  },
  "homepage": "https://github.com/Pratyush-Udhani/csv-to-prismadb#readme",
  "devDependencies": {
    "@changesets/cli": "^2.26.2",
    "@types/node": "^20.5.2",
    "changeset": "^0.2.6",
    "tsup": "^7.2.0",
    "typescript": "^5.1.6"
  }
}
```

- Configure tsconfig.json

```bash
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "noEmit": true,                                      /* Disable emitting files from a compilation. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noUncheckedIndexedAccess": true,                    /* Add 'undefined' to a type when accessed using an index. */
    "skipLibCheck": true,                                 /* Skip type checking all .d.ts files. */
  }
}
```

- Add a package versioning tool. changesets:

[https://github.com/changesets/changesets](https://github.com/changesets/changesets)

```bash
pnpm add -D @changesets/cli
pnpm changeset init

# Usage 
➜ pnpm changeset
🦋  What kind of change is this for csv-to-prismadb? (current version is 0.0.1) … 
▸ patch
  minor
  major

➜ pnpm changeset
🦋  What kind of change is this for csv-to-prismadb? (current version is 0.0.1) · patch
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary ‣ Enter the summary
```

- add a .npmrc config file for pnpm to set auto-install

```bash
auto-install-peers=true
```

- add .gitignore with

```bash
node_modules/
dist/
```

- For github automation for script publishing with npm add a .github/workflows/main.yml in the root directory.

```yaml
name: CI
on:
  push:
    branches:
      - "**"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: "pnpm"

      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint && pnpm run build
```

- Add another file publish.yml to run on each push to the repo which contains secrets

```yaml
name: Publish
on:
  workflow_run:
    workflows: ["CI"]
    types:
      - completed
  push:
    branches:
      - "main"

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  publish:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: "pnpm"

      - run: pnpm install --frozen-lockfile
      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- The secret NPM token should be from npm registry added into the github repo’s
    
    settings > secrets & variables > actions 
    
- Grant read and write repo permissions to GITHUB_TOKEN for pull request generation by
    
    settings > actions > general > workflow permissions (Read and Write Permissions)
  
