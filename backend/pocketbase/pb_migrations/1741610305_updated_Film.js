/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "date1278724480",
    "max": "",
    "min": "",
    "name": "date_projection",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1010815986",
    "max": "",
    "min": "",
    "name": "sortie_du_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text794262873",
    "max": 0,
    "min": 0,
    "name": "lieu_projection",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("date1278724480")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1010815986",
    "max": "",
    "min": "",
    "name": "sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text794262873",
    "max": 0,
    "min": 0,
    "name": "lieu",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
