import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import country from './model/country';
import sport from './model/sport';
import athlete from './model/athlete';
import competition from './model/competition';

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

router.route('/getalldelegates').post((req, res) => {
    user.find({'type': 'delegate'}, (err, us) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(us);
            console.log(us);
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

router.route('/getathletes').post((req, res) => {
    let name = '^' + req.body.name + '$';
    let gender = '^' + req.body.gender + '$';
    let coun = '^' + req.body.country + '$';
    let sport_name = '^' + req.body.sport + '$';
    let discipline = '^' + req.body.discipline + '$';
    console.log(name + ',' + gender + ',' + coun + ',' + sport_name + ',' + discipline);
    athlete.find({'name': {$regex: name}, 'gender': {$regex: gender}, 'country': {$regex: coun}, 'sport': {$regex: sport_name}, 'disciplines': {$elemMatch: {$regex: discipline}}}, (err, athletes) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(athletes);
        }
    });
});

router.route('/getathletes2').post((req, res) => {
    let sport_name = req.body.sport;
    let discipline = req.body.discipline;
    let gender = req.body.gender;
    athlete.find({'sport': sport_name, 'disciplines': discipline, 'gender': gender}, (er, athletes) => {
        if (er) {
            console.log(er);
        }
        else {
            res.json(athletes);
        }
    });
});

router.route('/addcompetition').post((req, res) => {
    let name = req.body.name;
    let format = req.body.format;
    let type = req.body.type;
    let sport_name = req.body.sport;
    let discipline = req.body.discipline;
    let athletes = req.body.athletes;
    let delegate = req.body.delegate;
    console.log(JSON.stringify(delegate));
    let new_competition = new competition({
        name: name,
        format: format,
        type: type,
        sport: sport_name,
        discipline: discipline,
        athletes: athletes,
        delegate: delegate});
    new_competition.save().then(() => {
        res.status(200).json({'user':'ok'});
        console.log('ne plaki');
    }).catch(er => {
        console.log(er);
        res.status(400).json({'user':'no'});
    });
});

router.route('/getcompetition').post((req, res) => {
    // empty for now
});

router.route('/getcompetitionfordelegate').post((req, res) => {
    let username = req.body.username;
    competition.find({'delegate': {$elemMatch: {'username': username}}, 'venue': {$exists: false}, 'startdatetime': {$exists: false}}, (er, delegates) => {
        if (er) {
            console.log(er);
        }
        else {
            res.json(delegates);
        }
    });
});

router.route('/getscheduledcompetitionfordelegate').post((req, res) => {
    let username = req.body.username;
    competition.find({'delegate': {$elemMatch: {'username': username}}, 'finished': {$exists: false}, 'venue': {$exists: true}, 'startdatetime': {$exists: true}}, (err, competitions) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(competitions);
        }
    });
});

router.route('/updatecompetition').post((req, res) => {
    let sport_name = req.body.sport;
    let discipline = req.body.discipline;
    let type = req.body.type;
    let venue = req.body.venue;
    let startdatetime = req.body.startdatetime;
    console.log(startdatetime);
    competition.updateOne({sport: sport_name, discipline: discipline, type: type}, {$set: {'venue': venue, 'startdatetime': startdatetime}}, (err, response)=>{
        if (err) {
            console.log(err);
            res.status(200).json({'user':'no'});
        }
        else {
            res.status(200).json({'user':'ok'});
        }
    });
});

router.route('/saveresults').post((req, res) => {
    let sport_name = req.body.sport;
    let discipline = req.body.discipline;
    let type = req.body.type;
    let athletes_results_pair = req.body.athletes_results_pair;
    let response_counter = 0, total_responses = 7;
    let error_occured = false;
    console.log(JSON.stringify(athletes_results_pair));
    competition.updateOne({sport: sport_name, discipline: discipline, type: type}, {$set: {'finished': true}}, (error, response)=> {
        response_counter++;
        if (error) {
            console.log(error);
            res.status(200).json({'user':'no'});
            error_occured = true;
        }
        console.log(`response_counter: ${response_counter}, comp update to finished, error: ${error_occured}`);
        if (!error_occured && response_counter == total_responses) {
            res.status(200).json({'user': 'ok'});
        }
    });
    for (let i = 0; i < 3; i++) {
        athlete.updateOne({name: athletes_results_pair[i].athlete.name}, {$set: {'isMedalWinner': true}}, (err, response) => {
            response_counter++;
            if (err) {
                console.log(err);
                res.status(200).json({'user':'no'});
                error_occured = true;
            }
            console.log(`response_counter: ${response_counter}, athlete[${i}] updated, error: ${error_occured}`);
            if (!error_occured && response_counter == total_responses) {
                res.status(200).json({'user': 'ok'});
            }
        });
    }
    country.updateOne({name: athletes_results_pair[0].athlete.country}, {$inc: {'goldMedals': 1}}, (er, response) => {
        response_counter++;
        if (er) {
            console.log(er);
            res.status(200).json({'user':'no'});
            error_occured = true;
        }
        console.log(`response_counter: ${response_counter}, country[0] updated, error: ${error_occured}`);
        if (!error_occured && response_counter == total_responses) {
            res.status(200).json({'user': 'ok'});
        }
    });
    country.updateOne({name: athletes_results_pair[1].athlete.country}, {$inc: {'silverMedals': 1}}, (er, response) => {
        response_counter++;
        if (er) {
            console.log(er);
            res.status(200).json({'user':'no'});
            error_occured = true;
        }
        console.log(`response_counter: ${response_counter}, country[1] updated, error: ${error_occured}`);
        if (!error_occured && response_counter == total_responses) {
            res.status(200).json({'user': 'ok'});
        }
    });
    country.updateOne({name: athletes_results_pair[2].athlete.country}, {$inc: {'bronzeMedals': 1}}, (er, response) => {
        response_counter++;
        if (er) {
            console.log(er);
            res.status(200).json({'user':'no'});
            error_occured = true;
        }
        console.log(`response_counter: ${response_counter}, country[2] updated, error: ${error_occured}`);
        if (!error_occured && response_counter == total_responses) {
            res.status(200).json({'user': 'ok'});
        }
    });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
