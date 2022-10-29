const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next){
        // Course.find({}, function (err, courses){
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
                
        //     }
        // });
        Course.find({})
        // .then(courses => res.json(courses))
        // .then(courses => res.render('home',{courses}))
        .then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('home', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }
    // [GET] /search

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
