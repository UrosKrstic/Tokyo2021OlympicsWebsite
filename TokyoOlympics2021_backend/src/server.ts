import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import country from './model/country';
import sport from './model/sport';
import athlete from './model/athlete';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/TokyoOlympics2021');
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('mongo open');
});

const router = express.Router();

router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username + ' ' + password);
    user.findOne({'username': username, 'password': password}, (err, u) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(u);
            console.log(u);
        }
    });
});

router.route('/register').post((req, res) => {
    let u = new user(req.body);
    u.save().then(() => {
        res.status(200).json({'user':'ok'});
    }).catch(err => {
        res.status(400).json({'user':'no'});
    });
});

router.route('/changepassword').post((req, res) => {
    user.updateOne({username: req.body.username}, { $set: {password: req.body.password} }, (err, u) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(u);
        }
    });
});

router.route('/getallusers').post((req, res) => {
    user.find(null, (err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
            console.log(users);
        }
    });
});

router.route('/allcountries').post((req, res) => {
    country.find(null, (err, countries) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(countries);
        }
    });
});

router.route('/addsport').post((req, res) => {
    let name = req.body.name;
    let discipline = req.body.discipline;
    console.log('sport: ' + name + ', discipline: ' + discipline);
    sport.findOne({'name': name}, (err, found) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(found);
            if (found) {
                console.log('Sport exists: ' + found);
                let found_sport = found.toObject();
                if (found_sport.disciplines.includes(discipline)) {
                    console.log('disciple already exists');
                    res.status(200).json({'user':'no'});
                }
                else {
                    console.log('Update existing sport with new discipline');
                    sport.updateOne({name: name}, { $push: {disciplines: discipline} }, (er, s) => {
                        if (er) {
                            console.log(er);
                        }
                        else {
                            res.status(200).json({'user':'ok'});
                        }
                    });
                }
            }
            else {
                console.log('Adding new sport');
                let new_sport = new sport({
                    name: name,
                    disciplines: [discipline]
                });
                new_sport.save().then(() => {
                    res.status(200).json({'user':'ok'});
                }).catch(er => {
                    res.status(400).json({'user':'no'});
                });
            }
        }
    });
});

router.route('/getallsports').post((req, res) => {
    sport.find(null, (err, sports) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(sports);
        }
    });
});

router.route('/addathlete').post((req, res) => {
    let name = req.body.name;
    let gender = req.body.gender;
    let coun = req.body.country;
    let sport_name = req.body.sport;
    let discipline = req.body.discipline;
    console.log('athlete: ' + name + ', discipline: ' + discipline);
    athlete.findOne({'name': name}, (err, found) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(found);
            if (found) {
                console.log('Athlete exists: ' + found);
                let found_sport = found.toObject();
                if (found_sport.disciplines.includes(discipline)) {
                    console.log('discipline already exists');
                    res.status(200).json({'user':'already registered for the same discipline'});
                }
                else if (found_sport.name != sport_name) {
                    console.log('different sport!');
                    res.status(200).json({'user':'already registered to a different sport'});
                }
                else {
                    console.log('Register existing athlete to new discipline');
                    athlete.updateOne({name: name}, { $push: {disciplines: discipline} }, (e, a) => {
                        if (e) {
                            console.log(e);
                        }
                        else {
                            res.status(200).json({'user':'ok'});
                        }
                    });
                }
            }
            else {
                console.log('Adding new athlete');
                let new_athlete = new athlete({
                    name: name,
                    gender: gender,
                    country: coun,
                    sport: sport_name,
                    disciplines: [discipline]
                });
                new_athlete.save().then(() => {
                    res.status(200).json({'user':'ok'});
                }).catch(er => {
                    res.status(400).json({'user':'no'});
                });
            }
        }
    });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
