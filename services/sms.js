const Config = require('../config.js');
const AWS = require('aws-sdk');
const SNS = new AWS.SNS({apiVersion: '2010-03-31'})

module.exports = (mobile,otp) => {
  return new Promise((resolve, reject) => {
    try {
        var params = {
          Message: 'Your Tow Wheel OTP is '+otp+'.',
          PhoneNumber: mobile
        };
        SNS.publish(params,(err,data)=>{
          console.log('aws otp >>>',err,data)
          if (err)
            reject(err)

          if(data.MessageId)
            resolve(true)
        })
        /*SNS.checkIfPhoneNumberIsOptedOut({phoneNumber: mobile},(err,data)=>{
          if (err)
            reject(err)
            
          if(!data.isOptedOut)
            
        })*/
    }
    catch (err) {
      console.log(err)
      reject(err)
    }
  })
}