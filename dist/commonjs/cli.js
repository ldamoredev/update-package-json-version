"use strict";

var _updatePackageJsonVersion = require("./commands/updatePackageJsonVersion");
const args = process.argv.slice(2); // Slice node executable and index
(0, _updatePackageJsonVersion.updatePackageJsonVersion)(args);
//# sourceMappingURL=cli.js.map