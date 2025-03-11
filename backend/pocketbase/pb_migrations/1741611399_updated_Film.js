/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("text2203071480")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 11,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Drame",
      "Comédie",
      "Action",
      "Aventure",
      "Science-fiction",
      "Fantastique",
      "Horreur",
      "Thriller",
      "Policier",
      "Animation",
      "Romance"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2203071480",
    "max": 0,
    "min": 0,
    "name": "genre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2203071480")

  return app.save(collection)
})
