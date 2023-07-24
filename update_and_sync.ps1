packwiz refresh --pack-file ".\src\pack.toml" --meta-folder-base ".\src"
Write-Host "Updating mods" -ForegroundColor Yellow
packwiz update --all --pack-file ".\src\pack.toml" --meta-folder-base ".\src"
Write-Host "Update finished" -ForegroundColor Green

Remove-Item -Path '.\dist' -Recurse

$distpaths = @(
  '.\dist\client', '.\dist\server',
  '.\dist\client\defaultconfigs', '.\dist\server\defaultconfigs'
)
foreach ($path in $distpaths) {
  if (-Not (Test-Path $path)) {
    mkdir -Path $path
  }
}

Write-Host "Syncing client side" -ForegroundColor Yellow
Copy-Item -Path ".\src\*" -Destination ".\dist\client" -Recurse -Force
Copy-Item -Path ".\dist\client\config\*" -Destination ".\dist\client\defaultconfigs" -Recurse -Force

Write-Host "Syncing server side" -ForegroundColor Yellow
Copy-Item -Path ".\src\*" -Destination ".\dist\server" -Recurse -Force -Exclude "icon.png"
Copy-Item -Path ".\src\icon.png" -Destination ".\dist\server\server-icon.png" -Force
Copy-Item -Path ".\src\config\*" -Destination ".\dist\server\defaultconfigs" -Recurse -Force

Write-Host "Removing clientside-only mods from server dist"

$regex = ''
foreach ($mod in Get-Content -Path ".\clientside-only.txt") {
  if ($mod -match $regex) {
    packwiz remove $mod --pack-file ".\dist\server\pack.toml" --meta-folder-base ".\dist\server"
  }
}

packwiz refresh --pack-file ".\dist\client\pack.toml" --meta-folder-base ".\dist\client"
packwiz refresh --pack-file ".\dist\server\pack.toml" --meta-folder-base ".\dist\server"

Write-Host "Sync finished" -ForegroundColor Yellow