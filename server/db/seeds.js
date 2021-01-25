const { Db } = require("mongodb");

use mountains;
db.dropDatabase();

db.munros.insertMany([
    {
        "name": "Ben Nevis",
        "height": 1344,
        "latlng_lat": 56.796849,
        "latlng_lng": -5.003525,
        "metoffice_loc_id": "350377",
        "region": "Loch Linnhe to Loch Ericht",
        "meaning": "Possibly from an old Gaelic word meaning venomous"
    },
    {
        "name": "Ben Macdui",
        "height": 1309,
        "latlng_lat": 57.070368,
        "latlng_lng": -3.669099,
        "metoffice_loc_id": "350373",
        "region": "Deeside to Speyside - The Cairngorms",
        "meaning": "Hill of the son of Duff"
    },
    {
        "name": "Ben Lui (Beinn Laoigh)",
        "height": 1130,
        "latlng_lat": 56.397013,
        "latlng_lng": -4.81051,
        "metoffice_loc_id": "350372",
        "region": "Loch Fyne to Loch Tay",
        "meaning": "Calf hill"
    },
    {
        "name": "Ben Hope",
        "height": 927,
        "latlng_lat": 58.413113,
        "latlng_lng": -4.60786,
        "metoffice_loc_id": "350369",
        "region": "Loch Broom to the Pentland Firth",
        "meaning": "Hill of the bay"
    },
    {
        "name": "Ben More (Glen Dochart)",
        "height": 1174,
        "latlng_lat": 56.385952,
        "latlng_lng": -4.540103,
        "metoffice_loc_id": "350375",
        "region": "Loch Fyne to Loch Tay",
        "meaning": "Big hill"
    },
    {
        "name": "Lochnagar",
        "height": 1155,
        "latlng_lat": 56.960254,
        "latlng_lng": -3.24526,
        "metoffice_loc_id": "352399",
        "region": "Glen Shee to Glen Esk",
        "meaning": "Little loch of the noisy sound (Lochan na Gaire)"
    },
    {
        "name": "Bynack More",
        "height": 1090,
        "gridref_letters": "NJ",
        "gridref_eastings": "04190",
        "gridref_northings": "06373",
        "latlng_lat": 57.13822,
        "latlng_lng": -3.584716,
        "smcid": "M054",
        "metoffice_loc_id": "350704",
        "region": "Deeside to Speyside - The Cairngorms",
        "meaning": "Obscure"
        }   

]);


