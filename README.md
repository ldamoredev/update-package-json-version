[![npm](https://img.shields.io/npm/v/update-package-json-version)](https://www.npmjs.com/package/update-package-json-version)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/ldamoredev/update-package-json-version/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/ldamoredev/update-package-json-version/actions)

# Update Package Json Version 
Tool for update the package.json version

## Installation

Yarn:
```shell
$ yarn add update-package-json-version
```

Then simply add a script with the name you prefer in your package.json that calls this package

package.json:
```json
{
  "scripts": {
    "update-version": "update-package-json-version"
  }
}
```

Then in your console:
```shell
$ yarn update-version [version-number] [package.json-path] 
```

The version number is required but the package.json path is not. By default, the path is ./package.json.

