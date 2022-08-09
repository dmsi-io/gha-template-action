# gha-template-action
A template for new GitHub Actions

# GHA Template README

[![release][release-badge]][release]

The purpose of this GitHub Action is to ____

## Inputs

| NAME   | DESCRIPTION                     | TYPE     | REQUIRED | DEFAULT |
|:-------|:--------------------------------|----------|----------|---------|
| `name` | The name to print in the action | `string` | `false`  | `World` |

## Example

```yaml
name: Template

on:
  pull_request:
    branches:
      - main
      - develop

jobs:
  publish:
    name: Update Doc
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Check Code
        uses: dmsi-io/gha-template-action@main
        with:
          name: 'Taylor'
```

<!-- badge links -->

[release]: https://github.com/dmsi-io/gha-template-action/releases
[release-badge]: https://img.shields.io/github/v/release/dmsi-io/gha-template-action?style=for-the-badge&logo=github