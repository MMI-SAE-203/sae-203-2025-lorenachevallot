/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "file4182342110",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "bande_annonce",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2471982478",
    "maxSelect": 1,
    "name": "langue",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Français",
      "Anglais",
      "Espagnol",
      "Allemand",
      "Japonais",
      "Chinois",
      "Coréen"
    ]
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4150093999",
    "hidden": false,
    "id": "select3226342881",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("file4182342110")

  // remove field
  collection.fields.removeById("select2471982478")

  // remove field
  collection.fields.removeById("select3226342881")

  return app.save(collection)
})
