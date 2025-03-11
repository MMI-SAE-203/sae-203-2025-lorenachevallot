/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4150093999",
    "hidden": false,
    "id": "select3226342881",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "adresse_mail",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4150093999",
    "hidden": false,
    "id": "select3226342881",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "nom",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
