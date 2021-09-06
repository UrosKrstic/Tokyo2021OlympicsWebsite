conn = new Mongo('localhost:27017')
db = conn.getDB('TokyoOlympics2021_test')
db.Athletes.insert([
{
    "disciplines" : [
        "100m running",
        "200m running"
    ],
    "name" : "Boban Marjanovic",
    "gender" : "female",
    "country" : "Iceland",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Bogdan Bebic",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Athletics",
},
{
    "disciplines" : [
        "Road 225km"
    ],
    "name" : "Nikola Kojo",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Cycling"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Han Solo",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Lando Calrissian",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Thor Odinsson",
    "gender" : "male",
    "country" : "American Samoa",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Ragnar Lothbrok",
    "gender" : "male",
    "country" : "Myanmar",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Haftor Bjornsson",
    "gender" : "male",
    "country" : "Myanmar",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Nemanja Vidic",
    "gender" : "male",
    "country" : "Myanmar",
    "sport" : "Athletics"
},
{
    "disciplines" : [
        "400m running",
        "100m running"
    ],
    "name" : "Vuk Karadzic",
    "gender" : "male",
    "country" : "Myanmar",
    "sport" : "Athletics"
},
{
    "name" : "Thomas Shelby",
    "gender" : "male",
    "country" : "Great Britain",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Bjorn Ragnarsson",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Nemanja Bjelica",
    "gender" : "male",
    "country" : "Serbia",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Kobe Bryant",
    "gender" : "male",
    "country" : "United States of America",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Martin Jankowski",
    "gender" : "male",
    "country" : "Poland",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Kyle Lowry",
    "gender" : "male",
    "country" : "Canada",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Aca Lukas",
    "gender" : "male",
    "country" : "Montenegro",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "name" : "Steve Nash",
    "gender" : "male",
    "country" : "South Africa",
    "sport" : "Tennis",
    "disciplines" : [
        "singles"
    ]
},
{
    "disciplines" : [
        "Road 225km"
    ],
    "name" : "LeBron James",
    "gender" : "male",
    "country" : "Iceland",
    "sport" : "Cycling"
}
])

db.Users.insertMany([
  {
      "username" : "Boban",
      "password" : "123",
      "first_name" : "Boban",
      "last_name" : "Rajovic",
      "country" : "Montenegro",
      "type" : "organizer"
  },
  {
      "username" : "Filip",
      "password" : "123",
      "first_name" : "Filip",
      "last_name" : "Ferlan",
      "country" : "Iceland",
      "type" : "leader"
  },
  {
      "username" : "Leader2",
      "password" : "123",
      "first_name" : "Lead",
      "last_name" : "er2",
      "country" : "American Samoa",
      "type" : "leader"
  },
  {
      "username" : "Leader3",
      "password" : "123",
      "first_name" : "Lea",
      "last_name" : "der3",
      "country" : "Myanmar",
      "type" : "leader"
  },
  {
      "username" : "Del1",
      "password" : "123",
      "first_name" : "Del",
      "last_name" : "egate",
      "country" : "Liechtenstein",
      "type" : "delegate"
  }
])

db.Sports.insertMany([
  {
      "disciplines" : [
          "100m running",
          "200m running",
          "400m running"
      ],
      "name" : "Athletics"
  },
  {
      "disciplines" : [
          "Road 225km"
      ],
      "name" : "Cycling"
  },
  {
      "disciplines" : [
          "singles"
      ],
      "name" : "Tennis"
  }
])

db.Competitions.insertMany([
  {
      "format" : "individual - final 8",
      "type" : "male",
      "sport" : "Athletics",
      "discipline" : "100m running",
      "athletes" : [
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Bogdan Bebic",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Han Solo",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Lando Calrissian",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Thor Odinsson",
              "gender" : "male",
              "country" : "American Samoa",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Ragnar Lothbrok",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Haftor Bjornsson",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Nemanja Vidic",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Vuk Karadzic",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          }
      ],
      "delegate" : [
          {
              "username" : "Del1",
              "password" : "123",
              "first_name" : "Del",
              "last_name" : "egate",
              "country" : "Liechtenstein",
              "type" : "delegate"
          }
      ],
      "isScheduled" : true,
      "startdatetime" : ISODate("2021-09-29T23:01:00.000Z"),
      "venue" : "Tokyo Stadium"
  },
  {
      "format" : "individual - final 8",
      "type" : "male",
      "sport" : "Athletics",
      "discipline" : "400m running",
      "athletes" : [
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Bogdan Bebic",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Han Solo",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Lando Calrissian",
              "gender" : "male",
              "country" : "Iceland",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Haftor Bjornsson",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Thor Odinsson",
              "gender" : "male",
              "country" : "American Samoa",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Ragnar Lothbrok",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Nemanja Vidic",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          },
          {
              "disciplines" : [
                  "400m running",
                  "100m running"
              ],
              "name" : "Vuk Karadzic",
              "gender" : "male",
              "country" : "Myanmar",
              "sport" : "Athletics"
          }
      ],
      "delegate" : [
          {
              "username" : "Del1",
              "password" : "123",
              "first_name" : "Del",
              "last_name" : "egate",
              "country" : "Liechtenstein",
              "type" : "delegate"
          }
      ],
      "isScheduled" : false
  }
])

db.Countries.insertMany(
  [
    {
      "name": "Afghanistan",
      "flagImgSrc": "../../assets/Afghanistan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Albania",
      "flagImgSrc": "../../assets/Albania.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Algeria",
      "flagImgSrc": "../../assets/Algeria.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "American Samoa",
      "flagImgSrc": "../../assets/American Samoa.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Andorra",
      "flagImgSrc": "../../assets/Andorra.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Angola",
      "flagImgSrc": "../../assets/Angola.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Antigua and Barbuda",
      "flagImgSrc": "../../assets/Antigua and Barbuda.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Argentina",
      "flagImgSrc": "../../assets/Argentina.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Armenia",
      "flagImgSrc": "../../assets/Armenia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Aruba",
      "flagImgSrc": "../../assets/Aruba.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Australia",
      "flagImgSrc": "../../assets/Australia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Austria",
      "flagImgSrc": "../../assets/Austria.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Azerbaijan",
      "flagImgSrc": "../../assets/Azerbaijan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bahamas",
      "flagImgSrc": "../../assets/Bahamas.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bahrain",
      "flagImgSrc": "../../assets/Bahrain.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bangladesh",
      "flagImgSrc": "../../assets/Bangladesh.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Barbados",
      "flagImgSrc": "../../assets/Barbados.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Belarus",
      "flagImgSrc": "../../assets/Belarus.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Belgium",
      "flagImgSrc": "../../assets/Belgium.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Belize",
      "flagImgSrc": "../../assets/Belize.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Benin",
      "flagImgSrc": "../../assets/Benin.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bermuda",
      "flagImgSrc": "../../assets/Bermuda.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bhutan",
      "flagImgSrc": "../../assets/Bhutan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bolivia",
      "flagImgSrc": "../../assets/Bolivia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bosnia and Herzegovina",
      "flagImgSrc": "../../assets/Bosnia and Herzegovina.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Botswana",
      "flagImgSrc": "../../assets/Botswana.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Brazil",
      "flagImgSrc": "../../assets/Brazil.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Brunei Darussalam",
      "flagImgSrc": "../../assets/Brunei Darussalam.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Bulgaria",
      "flagImgSrc": "../../assets/Bulgaria.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Burkina Faso",
      "flagImgSrc": "../../assets/Burkina Faso.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Burundi",
      "flagImgSrc": "../../assets/Burundi.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cambodia",
      "flagImgSrc": "../../assets/Cambodia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cameroon",
      "flagImgSrc": "../../assets/Cameroon.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Canada",
      "flagImgSrc": "../../assets/Canada.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cape Verde",
      "flagImgSrc": "../../assets/Cape Verde.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cayman Islands",
      "flagImgSrc": "../../assets/Cayman Islands.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Central African Republic",
      "flagImgSrc": "../../assets/Central African Republic.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Chad",
      "flagImgSrc": "../../assets/Chad.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Chile",
      "flagImgSrc": "../../assets/Chile.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Chinese Taipei",
      "flagImgSrc": "../../assets/Chinese Taipei.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Colombia",
      "flagImgSrc": "../../assets/Colombia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Comoros",
      "flagImgSrc": "../../assets/Comoros.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Congo",
      "flagImgSrc": "../../assets/Congo.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cook Islands",
      "flagImgSrc": "../../assets/Cook Islands.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Costa Rica",
      "flagImgSrc": "../../assets/Costa Rica.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Côte d'Ivoire",
      "flagImgSrc": "../../assets/Côte d'Ivoire.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Croatia",
      "flagImgSrc": "../../assets/Croatia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cuba",
      "flagImgSrc": "../../assets/Cuba.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Cyprus",
      "flagImgSrc": "../../assets/Cyprus.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Czech Republic",
      "flagImgSrc": "../../assets/Czech Republic.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Democratic Republic of the Congo",
      "flagImgSrc": "../../assets/Democratic Republic of the Congo.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Democratic Republic of Timor-Leste",
      "flagImgSrc": "../../assets/Democratic Republic of Timor-Leste.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Denmark",
      "flagImgSrc": "../../assets/Denmark.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Djibouti",
      "flagImgSrc": "../../assets/Djibouti.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Dominica",
      "flagImgSrc": "../../assets/Dominica.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Dominican Republic",
      "flagImgSrc": "../../assets/Dominican Republic.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Ecuador",
      "flagImgSrc": "../../assets/Ecuador.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Egypt",
      "flagImgSrc": "../../assets/Egypt.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "El Salvador",
      "flagImgSrc": "../../assets/El Salvador.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Equatorial Guinea",
      "flagImgSrc": "../../assets/Equatorial Guinea.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Eritrea",
      "flagImgSrc": "../../assets/Eritrea.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Estonia",
      "flagImgSrc": "../../assets/Estonia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Eswatini",
      "flagImgSrc": "../../assets/Eswatini.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Ethiopia",
      "flagImgSrc": "../../assets/Ethiopia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Federated States of Micronesia",
      "flagImgSrc": "../../assets/Federated States of Micronesia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Fiji",
      "flagImgSrc": "../../assets/Fiji.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Finland",
      "flagImgSrc": "../../assets/Finland.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "France",
      "flagImgSrc": "../../assets/France.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Gabon",
      "flagImgSrc": "../../assets/Gabon.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Gambia",
      "flagImgSrc": "../../assets/Gambia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Georgia",
      "flagImgSrc": "../../assets/Georgia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Germany",
      "flagImgSrc": "../../assets/Germany.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Ghana",
      "flagImgSrc": "../../assets/Ghana.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Great Britain",
      "flagImgSrc": "../../assets/Great Britain.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Greece",
      "flagImgSrc": "../../assets/Greece.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Grenada",
      "flagImgSrc": "../../assets/Grenada.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Guam",
      "flagImgSrc": "../../assets/Guam.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Guatemala",
      "flagImgSrc": "../../assets/Guatemala.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Guinea",
      "flagImgSrc": "../../assets/Guinea.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Guinea-Bissau",
      "flagImgSrc": "../../assets/Guinea-Bissau.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Guyana",
      "flagImgSrc": "../../assets/Guyana.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Haiti",
      "flagImgSrc": "../../assets/Haiti.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Honduras",
      "flagImgSrc": "../../assets/Honduras.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Hong Kong, China",
      "flagImgSrc": "../../assets/Hong Kong, China.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Hungary",
      "flagImgSrc": "../../assets/Hungary.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Iceland",
      "flagImgSrc": "../../assets/Iceland.png",
      "numberOfAthletes": 7,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "India",
      "flagImgSrc": "../../assets/India.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Indonesia",
      "flagImgSrc": "../../assets/Indonesia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Iraq",
      "flagImgSrc": "../../assets/Iraq.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Ireland",
      "flagImgSrc": "../../assets/Ireland.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Islamic Republic of Iran",
      "flagImgSrc": "../../assets/Islamic Republic of Iran.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Israel",
      "flagImgSrc": "../../assets/Israel.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Italy",
      "flagImgSrc": "../../assets/Italy.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Jamaica",
      "flagImgSrc": "../../assets/Jamaica.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Japan",
      "flagImgSrc": "../../assets/Japan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Jordan",
      "flagImgSrc": "../../assets/Jordan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kazakhstan",
      "flagImgSrc": "../../assets/Kazakhstan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kenya",
      "flagImgSrc": "../../assets/Kenya.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kiribati",
      "flagImgSrc": "../../assets/Kiribati.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kosovo",
      "flagImgSrc": "../../assets/Kosovo.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kuwait",
      "flagImgSrc": "../../assets/Kuwait.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Kyrgyzstan",
      "flagImgSrc": "../../assets/Kyrgyzstan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Lao People's Democratic Republic",
      "flagImgSrc": "../../assets/Lao People's Democratic Republic.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Latvia",
      "flagImgSrc": "../../assets/Latvia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Lebanon",
      "flagImgSrc": "../../assets/Lebanon.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Lesotho",
      "flagImgSrc": "../../assets/Lesotho.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Liberia",
      "flagImgSrc": "../../assets/Liberia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Libya",
      "flagImgSrc": "../../assets/Libya.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Liechtenstein",
      "flagImgSrc": "../../assets/Liechtenstein.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Lithuania",
      "flagImgSrc": "../../assets/Lithuania.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Luxembourg",
      "flagImgSrc": "../../assets/Luxembourg.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Madagascar",
      "flagImgSrc": "../../assets/Madagascar.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Malawi",
      "flagImgSrc": "../../assets/Malawi.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Malaysia",
      "flagImgSrc": "../../assets/Malaysia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Maldives",
      "flagImgSrc": "../../assets/Maldives.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mali",
      "flagImgSrc": "../../assets/Mali.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Malta",
      "flagImgSrc": "../../assets/Malta.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Marshall Islands",
      "flagImgSrc": "../../assets/Marshall Islands.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mauritania",
      "flagImgSrc": "../../assets/Mauritania.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mauritius",
      "flagImgSrc": "../../assets/Mauritius.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mexico",
      "flagImgSrc": "../../assets/Mexico.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Monaco",
      "flagImgSrc": "../../assets/Monaco.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mongolia",
      "flagImgSrc": "../../assets/Mongolia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Montenegro",
      "flagImgSrc": "../../assets/Montenegro.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Morocco",
      "flagImgSrc": "../../assets/Morocco.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Mozambique",
      "flagImgSrc": "../../assets/Mozambique.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Myanmar",
      "flagImgSrc": "../../assets/Myanmar.png",
      "numberOfAthletes": 4,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Namibia",
      "flagImgSrc": "../../assets/Namibia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Nauru",
      "flagImgSrc": "../../assets/Nauru.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Nepal",
      "flagImgSrc": "../../assets/Nepal.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Netherlands",
      "flagImgSrc": "../../assets/Netherlands.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "New Zealand",
      "flagImgSrc": "../../assets/New Zealand.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Nicaragua",
      "flagImgSrc": "../../assets/Nicaragua.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Niger",
      "flagImgSrc": "../../assets/Niger.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Nigeria",
      "flagImgSrc": "../../assets/Nigeria.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "North Macedonia",
      "flagImgSrc": "../../assets/North Macedonia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Norway",
      "flagImgSrc": "../../assets/Norway.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Oman",
      "flagImgSrc": "../../assets/Oman.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Pakistan",
      "flagImgSrc": "../../assets/Pakistan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Palau",
      "flagImgSrc": "../../assets/Palau.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Palestine",
      "flagImgSrc": "../../assets/Palestine.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Panama",
      "flagImgSrc": "../../assets/Panama.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Papua New Guinea",
      "flagImgSrc": "../../assets/Papua New Guinea.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Paraguay",
      "flagImgSrc": "../../assets/Paraguay.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "People's Republic of China",
      "flagImgSrc": "../../assets/People's Republic of China.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Peru",
      "flagImgSrc": "../../assets/Peru.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Philippines",
      "flagImgSrc": "../../assets/Philippines.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Poland",
      "flagImgSrc": "../../assets/Poland.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Portugal",
      "flagImgSrc": "../../assets/Portugal.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Puerto Rico",
      "flagImgSrc": "../../assets/Puerto Rico.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Qatar",
      "flagImgSrc": "../../assets/Qatar.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Refugee Olympic Team",
      "flagImgSrc": "../../assets/Refugee Olympic Team.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Republic of Korea",
      "flagImgSrc": "../../assets/Republic of Korea.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Republic of Moldova",
      "flagImgSrc": "../../assets/Republic of Moldova.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "ROC",
      "flagImgSrc": "../../assets/ROC.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Romania",
      "flagImgSrc": "../../assets/Romania.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Rwanda",
      "flagImgSrc": "../../assets/Rwanda.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Saint Kitts and Nevis",
      "flagImgSrc": "../../assets/Saint Kitts and Nevis.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Saint Lucia",
      "flagImgSrc": "../../assets/Saint Lucia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Samoa",
      "flagImgSrc": "../../assets/Samoa.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "San Marino",
      "flagImgSrc": "../../assets/San Marino.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Sao Tome and Principe",
      "flagImgSrc": "../../assets/Sao Tome and Principe.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Saudi Arabia",
      "flagImgSrc": "../../assets/Saudi Arabia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Senegal",
      "flagImgSrc": "../../assets/Senegal.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Serbia",
      "flagImgSrc": "../../assets/Serbia.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Seychelles",
      "flagImgSrc": "../../assets/Seychelles.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Sierra Leone",
      "flagImgSrc": "../../assets/Sierra Leone.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Singapore",
      "flagImgSrc": "../../assets/Singapore.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Slovakia",
      "flagImgSrc": "../../assets/Slovakia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Slovenia",
      "flagImgSrc": "../../assets/Slovenia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Solomon Islands",
      "flagImgSrc": "../../assets/Solomon Islands.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Somalia",
      "flagImgSrc": "../../assets/Somalia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "South Africa",
      "flagImgSrc": "../../assets/South Africa.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "South Sudan",
      "flagImgSrc": "../../assets/South Sudan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Spain",
      "flagImgSrc": "../../assets/Spain.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Sri Lanka",
      "flagImgSrc": "../../assets/Sri Lanka.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "St Vincent and the Grenadines",
      "flagImgSrc": "../../assets/St Vincent and the Grenadines.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Sudan",
      "flagImgSrc": "../../assets/Sudan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Suriname",
      "flagImgSrc": "../../assets/Suriname.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Sweden",
      "flagImgSrc": "../../assets/Sweden.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Switzerland",
      "flagImgSrc": "../../assets/Switzerland.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Syrian Arab Republic",
      "flagImgSrc": "../../assets/Syrian Arab Republic.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Tajikistan",
      "flagImgSrc": "../../assets/Tajikistan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Thailand",
      "flagImgSrc": "../../assets/Thailand.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Togo",
      "flagImgSrc": "../../assets/Togo.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Tonga",
      "flagImgSrc": "../../assets/Tonga.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Trinidad and Tobago",
      "flagImgSrc": "../../assets/Trinidad and Tobago.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Tunisia",
      "flagImgSrc": "../../assets/Tunisia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Turkey",
      "flagImgSrc": "../../assets/Turkey.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Turkmenistan",
      "flagImgSrc": "../../assets/Turkmenistan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Tuvalu",
      "flagImgSrc": "../../assets/Tuvalu.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Uganda",
      "flagImgSrc": "../../assets/Uganda.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Ukraine",
      "flagImgSrc": "../../assets/Ukraine.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "United Arab Emirates",
      "flagImgSrc": "../../assets/United Arab Emirates.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "United Republic of Tanzania",
      "flagImgSrc": "../../assets/United Republic of Tanzania.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "United States of America",
      "flagImgSrc": "../../assets/United States of America.png",
      "numberOfAthletes": 1,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Uruguay",
      "flagImgSrc": "../../assets/Uruguay.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Uzbekistan",
      "flagImgSrc": "../../assets/Uzbekistan.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Vanuatu",
      "flagImgSrc": "../../assets/Vanuatu.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Venezuela",
      "flagImgSrc": "../../assets/Venezuela.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Vietnam",
      "flagImgSrc": "../../assets/Vietnam.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Virgin Islands, British",
      "flagImgSrc": "../../assets/Virgin Islands, British.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Virgin Islands, US",
      "flagImgSrc": "../../assets/Virgin Islands, US.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Yemen",
      "flagImgSrc": "../../assets/Yemen.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Zambia",
      "flagImgSrc": "../../assets/Zambia.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    },
    {
      "name": "Zimbabwe",
      "flagImgSrc": "../../assets/Zimbabwe.png",
      "numberOfAthletes": 0,
      "goldMedals": 0,
      "silverMedals": 0,
      "bronzeMedals": 0
    }
  ]
)
