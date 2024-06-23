tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
for (let value of tiles.getTilesByType(assets.tile`acid`)) {
    tiles.setWallAt(value, false)
}