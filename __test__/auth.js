const request = require('supertest');
const app = request(global.config.apiurl);
var otp = ''
exports.Test = () => {

  /*
   * Auth
   */

  it("Auth - CheckUsername", async (done) => {
    app.get('/auth/check-username/demoswipecrush')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.isExists).toBe(false)
        return done();
      });
  });

  it("Auth - Signup", async (done) => {
    const filePath = `${__dirname}/assets/demopic.jpg`;
    app.post('/auth/signup')
      .field('name', 'Demo Tester')
      .field('gender', 'male')
      .field('mobile', '19804315065')
      .field('occupation', 'Student')
      .field('city', 'Kolkata')
      .field('username', 'demoswipecrush')
      .field('dob', 'Thu Mar 14 2002 20:28:32 GMT+0530 (IST)')
      .field('country', 'Canada')
      .field('bio', 'I am simple guy, looking for serious relationship.')
      .field('relation_status', 'Single')
      .field('hobbies', 'Travelling, Cooking')
      .attach('profile_picture', filePath)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.access_token).toEqual(expect.any(String))
        global.config.user = res.body
        return done();
      });
  });

  it("Auth - Login (send otp)", async (done) => {
    app.post('/auth/login')
      .send({
        mobile: '19804315065'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        otp = res.body.otp
        expect(res.body.otp).toEqual(expect.any(Number))
        return done();
      });
  });

  it("Auth - Login", async (done) => {
    app.post('/auth/login')
      .send({
        mobile: global.config.user.mobile,
        otp: otp
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.isUserExists).toBe(true)
        global.config.user = res.body
        return done();
      });
  });

  it("Auth - RefreshToken", async (done) => {
    app.get('/auth/refresh-token/' + global.config.user.mobile + '/' + global.config.user.active_session_refresh_token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.access_token).toEqual(expect.any(String))
        global.config.user.access_token = res.body.access_token
        return done();
      });
  });

  it("Auth - LoginByToken", async (done) => {
    app.get('/auth/login-by-token/' + global.config.user.mobile + '/' + global.config.user.active_session_refresh_token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.access_token).toEqual(expect.any(String))
        global.config.user = res.body
        return done();
      });
  });

}
