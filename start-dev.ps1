$ErrorActionPreference = "Stop"
$env:BROWSER = "none"
if (-not $env:PORT) {
  $env:PORT = "3000"
}
npm.cmd start
