const Config = require('../config.js');
const fetch = require('node-fetch');

module.exports = {
  sendOtp: async (mobile,otp) => {
		try {
      const res = await fetch('http://2factor.in/API/V1/'+Config.sms_apikey+'/SMS/'+mobile+'/'+otp+'/swipecrush');
      const response = await res.json();
      if(response.Status=='Success')
        return true
      else return false
    }
    catch (err) {
      HandleServerError(res, req, err)
    }
  }
}