const request = require('supertest');
const mongoose = require('mongoose');
const fs = require('fs')
const config = require('../config.js');
const { User, ProfilePicture, Otp } = require('../models')
const app = request(global.config.apiurl);

exports.Test = () => {

    try {

        beforeAll(async (done) => {
            await mongoose.connect(config.mongodb.connectionString, { auth: { authdb: "admin" }, useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true, useCreateIndex: true, useFindAndModify: false });
            // Clear test database
            const user = await User.findOne({ username: 'demoswipecrush' })
            if (user) {
                const profile_picture = await ProfilePicture.findOne({ user_id: user._id })
                if(profile_picture){
                    try{
                    fs.unlinkSync(__dirname+'/../public'+profile_picture.picture)
                    }
                    catch(e){
                        console.log(__dirname+'/../public'+profile_picture.picture)
                    }
                }
                await Otp.deleteMany({ mobile: user.mobile })
                await User.deleteMany({ _id: user._id })
                await ProfilePicture.deleteMany({ user_id: user._id })
            }
            done()
        });

        it("Testing server response.", async (done) => {
            app.get("/")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    expect(res.body.message).toEqual("API Server Running.");
                    return done();
                });
        });

        afterAll(async (done) => {
            mongoose.connection.close()
            done()
        });

    }
    catch (e) {
        console.log('Setup Error ==> ')
    }

}


/*
 * Additional Functions
 */