import fs from 'fs'

export function updatePackageJsonVersion(args: string[]) {
  const version = args[0]
  const packagePath = args[1] ?? './package.json'
  const data = fs.readFileSync(packagePath, 'utf8')
  const packageJson = JSON.parse(data)
  packageJson.version = version
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
}
