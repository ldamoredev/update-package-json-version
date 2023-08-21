"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePackageJsonVersion = updatePackageJsonVersion;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function updatePackageJsonVersion(args) {
  const version = args[0];
  const packagePath = args[1] ?? './package.json';
  const data = _fs.default.readFileSync(packagePath, 'utf8');
  const packageJson = JSON.parse(data);
  packageJson.version = version;
  _fs.default.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}
//# sourceMappingURL=updatePackageJsonVersion.js.map