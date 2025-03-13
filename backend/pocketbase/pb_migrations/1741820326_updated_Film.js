/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "file3070317105",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photosupp",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("file3070317105")

  return app.save(collection)
})
