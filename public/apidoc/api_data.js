define({ "api": [
  {
    "type": "post",
    "url": "/admins/signup",
    "title": "Add admin account",
    "name": "AdminSignup",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Admins unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name contains alphabets only.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password must contain atleast one number, one capital alphabet, one small alphabet, one special character and between 8-24 character.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Admin type as ENUM[ admin, analyst ].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": {\n\t\t\t\t\"_id\": \"5f62722a4bf8b92249c9caa6\",\n\t\t\t\t\"name\": \"Demo Admin\",\n\t\t\t\t\"email\": \"demo@demo.com\",\n\t\t\t\t\"type\": \"admin\",\n\t\t\t\t\"createdAt\": \"2020-09-16T20:14:34.112Z\",\n\t\t\t\t\"updatedAt\": \"2020-09-16T20:14:34.112Z\"\n\t\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Error\n{\n  \"status\": \"failed\", message: \"Email already exists.\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admins/login",
    "title": "Admin Login",
    "name": "Admin_Login",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Admins unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admins password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/getallusers",
    "title": "List All Users",
    "name": "List_All_Users",
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t {\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"5f67ac2e9a599b177fba55b5\",\n            \"provider\": {\n                \"service\": \"\",\n                \"description\": \"\"\n            },\n            \"name\": \"Demo\",\n            \"gender\": \"male\",\n            \"mobile\": \"919903614706\",\n            \"address\": \"india\",\n            \"status\": \"approved\",\n            \"profile_picture\": \"/images/1601090029587.jpg\",\n            \"provider_task\": [\n                {\n                    \"_id\": \"5f6ca1f95700d45738d6c86c\",\n                    \"cost\": {\n                        \"total\": 0\n                    },\n                    \"title\": \"Tap Repair\",\n                    \"status\": \"Hiring\",\n                    \"createdAt\": \"2020-09-24T13:41:14.000Z\"\n                }\n            ],\n            \"consumer_task\": [\n                {\n                    \"_id\": \"5f6ca1f95700d45738d6c86c\",\n                    \"cost\": {\n                        \"total\": 0\n                    },\n                    \"title\": \"Tap Repair\",\n                    \"status\": \"Hiring\",\n                    \"createdAt\": \"2020-09-24T13:41:14.000Z\"\n                }\n            ],\n            \"reviews\": [\n                {\n                    \"rating\": 2,\n                    \"username\": \"Demo\",\n                    \"feedback\": \"Good Boy\"\n                }\n            ],\n            \"average_rating\": 3.3333333333333335\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admins/updateuserstatus",
    "title": "Update User Status",
    "name": "Update_User_Status",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status text [approved or suspended].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/auth/login-by-token/:mobile/:token",
    "title": "Login with token",
    "name": "LoginWithToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Refresh token of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Registered mobile number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \n{\n    \"status\": \"success\",\n    \"data\": {\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                88.1567362,\n                22.8258274\n            ]\n        },\n        \"provider\": {\n            \"verification_document\": null,\n            \"service\": \"\",\n            \"description\": \"\"\n        },\n        \"is_switched_provider\": false,\n        \"is_available\": true,\n        \"_id\": \"5f6e252a761041600f5146fd\",\n        \"name\": \"Demo Consumer\",\n        \"gender\": \"male\",\n        \"mobile\": \"919903614705\",\n        \"address\": \"\",\n        \"status\": \"approved\",\n        \"active_session_refresh_token\": \"d7o0I0K30lZi15c0\",\n        \"profile_picture\": \"/images/1601053994590.jpg\",\n        \"createdAt\": \"2020-09-25T17:13:14.616Z\",\n        \"updatedAt\": \"2020-09-27T14:35:26.281Z\",\n        \"__v\": 0,\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmUyNTJhNzYxMDQxNjAwZjUxNDZmZCIsIm1vYmlsZSI6IjkxOTkwMzYxNDcwNSIsIm5hbWUiOiJEZW1vIENvbnN1bWVyIiwiaWF0IjoxNjAxMjE3MzI2LCJleHAiOjE2MDEzMDM3MjZ9.XbCj5mAqxudjH0bJ8LV71TI3pgV99Uf1OM_1oQ53Yfo\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login to user account",
    "name": "Login_User",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>User's unique mobile number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>OTP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \n{\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"5f67ac2e9a599b177fba55b5\",\n        \"provider\": {\n            \"verification_document\": null,\n            \"service\": \"\",\n            \"description\": \"\"\n        },\n        \"is_switched_provider\": false,\n        \"is_available\": true,\n        \"name\": \"Demo\",\n        \"gender\": \"male\",\n        \"mobile\": \"919903614706\",\n        \"address\": \"kjhkd kjdhfbk\",\n        \"status\": \"approved\",\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                -110.8571443,\n                32.4586858\n            ]\n        },\n        \"active_session_refresh_token\": \"5OwDBqzHLUFj54TJ\",\n        \"profile_picture\": \"/images/1600629806826.jpg\",\n        \"createdAt\": \"2020-09-20T19:23:26.855Z\",\n        \"updatedAt\": \"2020-09-20T19:26:52.477Z\",\n        \"__v\": 0,\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjdhYzJlOWE1OTliMTc3ZmJhNTViNSIsIm1vYmlsZSI6IjkxOTkwMzYxNDcwNiIsIm5hbWUiOiJEZW1vIiwiaWF0IjoxNjAwNjMwMDc0LCJleHAiOjE2MDA3MTY0NzR9.FMZe0ttT1qtzvXbCbO_uKLj_EHwIDslDO4uq_IVw2_E\",\n        \"isUserExists\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/refresh-token/:mobile/:token",
    "title": "Refresh access token",
    "name": "RefreshToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Refresh token of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Registered mobile number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \n{\n    \"status\": \"success\",\n    \"data\": {\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjdhYzJlOWE1OTliMTc3ZmJhNTViNSIsIm1vYmlsZSI6IjkxOTkwMzYxNDcwNiIsIm5hbWUiOiJEZW1vIiwiaWF0IjoxNjAwNjMyMDgxLCJleHAiOjE2MDA3MTg0ODF9.Uj642GC9-b_dkoTR1lrq2Z3PouybDz1Q-gzAw2TRCCI\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Add user account",
    "name": "Signup_User",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Users unique mobile with ISD code i.e 919903614705.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>ENUM[male,female].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address in text (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "profile_picture",
            "description": "<p>Form encoded image file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>(applicable for provider only).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>(optional &amp; application for provider only).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>JSON stringify string with coordinates i.e {&quot;longitude&quot;:&quot;-110.8571443&quot;,&quot;lattitude&quot;:&quot;32.4586858&quot;}.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "verification_document",
            "description": "<p>(optional &amp; applicable only for certain services in provider).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \n{\n    \"status\": \"success\",\n    \"data\": {\n        \"location\": {\n            \"type\": \"Point\",\n            \"coordinates\": [\n                -110.8571443,\n                32.4586858\n            ]\n        },\n        \"provider\": {\n            \"verification_document\": null,\n            \"service\": \"\",\n            \"description\": \"\"\n        },\n        \"is_switched_provider\": false,\n        \"is_available\": true,\n        \"_id\": \"5f6504df4619710c2354cbf4\",\n        \"name\": \"Demo\",\n        \"gender\": \"male\",\n        \"mobile\": 919903614705,\n        \"address\": \"21 Parking Street\",\n        \"status\": \"approved\",\n        \"active_session_refresh_token\": \"sfYP6WRAoF9q2GPG\",\n        \"profile_picture\": \"/images/1600455903339.jpg\",\n        \"createdAt\": \"2020-09-18T19:05:03.461Z\",\n        \"updatedAt\": \"2020-09-18T19:05:03.799Z\",\n        \"__v\": 0,\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjUwNGRmNDYxOTcxMGMyMzU0Y2JmNCIsIm1vYmlsZSI6OTE5OTAzNjE0NzA1LCJuYW1lIjoiRGVtbyIsImlhdCI6MTYwMDQ1NTkwMywiZXhwIjoxNjAwNTQyMzAzfQ._Aey4GEfFhWzmVrWgccfzbPL3lvmGEzGvM6Ndc1QkPk\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Error\n{\n  \"status\": \"failed\", message: \"Email already exists.\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/user/getchatlist",
    "title": "Get Chatlist",
    "name": "Get_Chatlist",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": [\n            {\n                \"_id\": \"5f727e6544f33432a4b498e9\",\n                \"consumer_id\": \"5f6e2d65afce8e1078f429fd\",\n                \"provider_id\": \"5f67ac2e9a599b177fba55b5\",\n                \"chats\": [\n                    {\n                        \"seen\": false,\n                        \"_id\": \"5f727e6544f33432a4b498ea\",\n                        \"sender_id\": \"5f6e2d65afce8e1078f429fd\",\n                        \"receiver_id\": \"5f67ac2e9a599b177fba55b5\",\n                        \"message\": \"hi\",\n                        \"createdAt\": \"2020-09-29T00:23:01.054Z\",\n                        \"updatedAt\": \"2020-09-29T00:23:01.054Z\"\n                    }\n                ],\n                \"task\": [\n                    {\n                        \"_id\": \"5f6ae1daa31dc3228c3f6ab5\",\n                        \"title\": \"Tap Repair\"\n                    }\n                ],\n                \"consumer\": [\n                    {\n                        \"_id\": \"5f6e2d65afce8e1078f429fd\",\n                        \"name\": \"Captain America\",\n                        \"mobile\": \"919804985304\",\n                        \"address\": \"india\",\n                        \"profile_picture\": \"/images/1601056101315.jpg\"\n                    }\n                ],\n                \"provider\": [\n                    {\n                        \"_id\": \"5f67ac2e9a599b177fba55b5\",\n                        \"name\": \"Demo\",\n                        \"mobile\": \"919903614706\",\n                        \"address\": \"india\",\n                        \"profile_picture\": \"/images/1601090029587.jpg\"\n                    }\n                ]\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "socket",
    "url": "$",
    "title": "Send Message",
    "name": "Send_Message",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "chat_id",
            "description": "<p>Id of the chat.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Id of the receiver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Text Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": false,
            "field": "images",
            "description": "<p>List of images.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/user/startinterview",
    "title": "Start Interview",
    "name": "Start_Interview",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "provider_id",
            "description": "<p>Id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "task_id",
            "description": "<p>Id of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "proposal_id",
            "description": "<p>Id of the proposal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"_id\": \"5f7295f882b2a92da43a6587\",\n            \"consumer_id\": \"5f6e2d65afce8e1078f429fd\",\n            \"provider_id\": \"5f67ac2e9a599b177fba55b5\",\n            \"task_id\": \"5f6ae1daa31dc3228c3f6ab5\",\n            \"chats\": [\n                {\n                    \"images\": [],\n                    \"seen\": false,\n                    \"_id\": \"5f7295f882b2a92da43a6588\",\n                    \"sender_id\": \"5f6e2d65afce8e1078f429fd\",\n                    \"receiver_id\": \"5f67ac2e9a599b177fba55b5\",\n                    \"message\": \"hi\",\n                    \"createdAt\": \"2020-09-29T02:03:36.517Z\",\n                    \"updatedAt\": \"2020-09-29T02:03:36.517Z\"\n                }\n            ],\n            \"createdAt\": \"2020-09-29T02:03:36.518Z\",\n            \"updatedAt\": \"2020-09-29T02:03:36.518Z\",\n            \"__v\": 0\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/admin/createcoupon",
    "title": "Create Coupon",
    "name": "Create_Coupon",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code without extra spaces and alphanumeric.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPercent",
            "description": "<p>True or False.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>A number greater than 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "expiry",
            "description": "<p>Date in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>True or False.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/admin/deletecoupon",
    "title": "Delete Coupon",
    "name": "Delete_Coupon",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the coupon.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": true\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/admin/editcoupon",
    "title": "Edit Coupon",
    "name": "Edit_Coupon",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of coupon code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code without extra spaces and alphanumeric.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPercent",
            "description": "<p>True or False.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>A number greater than 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "expiry",
            "description": "<p>Date in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>True or False.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/consumer/getcouponbycode",
    "title": "Get Coupon Details By Code",
    "name": "Get_Coupon_Details_By_Code",
    "group": "Coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code of the coupon.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Coupon"
  },
  {
    "type": "get",
    "url": "/admin/getallcoupon",
    "title": "List All Coupons",
    "name": "List_All_Coupons",
    "group": "Coupon",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/AdminController.js",
    "groupTitle": "Coupon"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "InRange-backend/public/apidoc/main.js",
    "group": "D:\\projects\\InRange-backend\\public\\apidoc\\main.js",
    "groupTitle": "D:\\projects\\InRange-backend\\public\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/consumer/acceptproposal",
    "title": "Accept Proposal",
    "name": "Accept_Proposal",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "task_id",
            "description": "<p>Id of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "provider_id",
            "description": "<p>Id of the provider.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t32.4586858\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t\"cost\": {\n\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\"total\": 0\n\t\t\t\t},\n\t\t\t\t\"images\": [\n\t\t\t\t\t\"/images/1600954873857.jpg\",\n\t\t\t\t\t\"/images/1600954873978.jpg\"\n\t\t\t\t],\n\t\t\t\t\"_id\": \"5f6ca1f95700d45738d6c86c\",\n\t\t\t\t\"title\": \"Tap Repair\",\n\t\t\t\t\"service\": \"repair\",\n\t\t\t\t\"description\": \"broken tap\",\n\t\t\t\t\"instruction\": \"Not specified\",\n\t\t\t\t\"name\": \"souradeep\",\n\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\"address\": \"india\",\n\t\t\t\t\"consumer\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\"proposals\": [],\n\t\t\t\t\"createdAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\"updatedAt\": \"2020-09-24T14:34:24.676Z\",\n\t\t\t\t\"__v\": 0,\n\t\t\t\t\"provider\": \"5f67ac2e9a599b177fba55b5\"\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/consumer/createtask",
    "title": "Create Task",
    "name": "Create_Task",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact name without extra spaces and within 25 length</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title without extra spaces and within 25 length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Users unique mobile with ISD code i.e 919903614705.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "service",
            "description": "<p>Service type in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instruction",
            "description": "<p>Service instruction (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>Address landmark (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "houseno",
            "description": "<p>Address houseno (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "status",
            "description": "<p>ENUM['Hiring', 'In-progress', 'Completed', 'Cancelled'].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>JSON stringify string with coordinates i.e {&quot;longitude&quot;:&quot;-110.8571443&quot;,&quot;lattitude&quot;:&quot;32.4586858&quot;}.</p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": false,
            "field": "images",
            "description": "<p>Service images (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": {\n\t\t\t\t\"cost\": {\n\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\"total\": 0\n\t\t\t\t},\n\t\t\t\t\"images\": [\n\t\t\t\t\t\"/images/1600954873857.jpg\",\n\t\t\t\t\t\"/images/1600954873978.jpg\"\n\t\t\t\t],\n\t\t\t\t\"_id\": \"5f6ca1f95700d45738d6c86c\",\n\t\t\t\t\"title\": \"Tap Repair\",\n\t\t\t\t\"service\": \"repair\",\n\t\t\t\t\"description\": \"broken tap\",\n\t\t\t\t\"instruction\": \"Not specified\",\n\t\t\t\t\"name\": \"souradeep\",\n\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\"address\": \"india\",\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t32.4586858\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t\"consumer\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\"proposals\": [],\n\t\t\t\t\"createdAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\"updatedAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\"__v\": 0\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/consumer/deletetask",
    "title": "Delete Task",
    "name": "Delete_Task",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the task.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": true\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/consumer/edittask",
    "title": "Edit Task",
    "name": "Edit_Task",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact name without extra spaces and within 25 length</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title without extra spaces and within 25 length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Users unique mobile with ISD code i.e 919903614705.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "service",
            "description": "<p>Service type in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instruction",
            "description": "<p>Service instruction (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>Address landmark (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "houseno",
            "description": "<p>Address houseno (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "status",
            "description": "<p>ENUM['Hiring', 'In-progress', 'Completed', 'Cancelled'].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>JSON stringify string with coordinates i.e {&quot;longitude&quot;:&quot;-110.8571443&quot;,&quot;lattitude&quot;:&quot;32.4586858&quot;}.</p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": false,
            "field": "images",
            "description": "<p>Service images (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/provider/gettaskbyid",
    "title": "Get Task By Id",
    "name": "Get_Task_By_Id",
    "group": "Task",
    "description": "<p>use /consumer/gettaskbyid for consumer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the task.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"5f6ac1019b088f4c6cc2ed48\",\n\t\t\t\t\t\"cost\": {\n\t\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\t\"total\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"images\": [\n\t\t\t\t\t\t\"/images/1600831745264.jpg\",\n\t\t\t\t\t\t\"/images/1600831745479.jpg\"\n\t\t\t\t\t],\n\t\t\t\t\t\"title\": \"Tap need\",\n\t\t\t\t\t\"service\": \"Tap repair\",\n\t\t\t\t\t\"description\": \"Good Task\",\n\t\t\t\t\t\"instruction\": \"Need Faster\",\n\t\t\t\t\t\"name\": \"Test\",\n\t\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\t\"address\": \"India\",\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t\t32.4586858\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t\"proposals\": [],\n\t\t\t\t\t\"createdAt\": \"2020-09-23T03:29:05.501Z\",\n\t\t\t\t\t\"updatedAt\": \"2020-09-23T03:29:05.501Z\",\n\t\t\t\t\t\"__v\": 0\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"5f6ca1f95700d45738d6c86c\",\n\t\t\t\t\t\"cost\": {\n\t\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\t\"total\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"images\": [\n\t\t\t\t\t\t\"/images/1600954873857.jpg\",\n\t\t\t\t\t\t\"/images/1600954873978.jpg\"\n\t\t\t\t\t],\n\t\t\t\t\t\"title\": \"Tap Repair\",\n\t\t\t\t\t\"service\": \"repair\",\n\t\t\t\t\t\"description\": \"broken tap\",\n\t\t\t\t\t\"instruction\": \"Not specified\",\n\t\t\t\t\t\"name\": \"souradeep\",\n\t\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\t\"address\": \"india\",\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t\t32.4586858\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t\"consumer\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\t\"proposals\": [],\n\t\t\t\t\t\"createdAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\t\"updatedAt\": \"2020-09-24T14:34:24.676Z\",\n\t\t\t\t\t\"__v\": 0,\n\t\t\t\t\t\"provider\": \"5f67ac2e9a599b177fba55b5\"\n\t\t\t\t}\n\t\t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/consumer/gettasks",
    "title": "List Tasks Consumer",
    "name": "List_Tasks_Consumer",
    "group": "Task",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"_id\": \"5f6ca1f95700d45738d6c86c\",\n\t\t\t\t\t\"cost\": {\n\t\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\t\"total\": 0\n\t\t\t\t\t},\n\t\t\t\t\t\"images\": [\n\t\t\t\t\t\t\"/images/1600954873857.jpg\",\n\t\t\t\t\t\t\"/images/1600954873978.jpg\"\n\t\t\t\t\t],\n\t\t\t\t\t\"title\": \"Tap Repair\",\n\t\t\t\t\t\"service\": \"repair\",\n\t\t\t\t\t\"description\": \"broken tap\",\n\t\t\t\t\t\"instruction\": \"Not specified\",\n\t\t\t\t\t\"name\": \"souradeep\",\n\t\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\t\"address\": \"india\",\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t\t32.4586858\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t\"consumer\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\t\"proposals\": [],\n\t\t\t\t\t\"createdAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\t\"updatedAt\": \"2020-09-24T13:41:14.000Z\",\n\t\t\t\t\t\"__v\": 0\n\t\t\t\t}\n\t\t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/provider/gettasks",
    "title": "List Tasks Provider",
    "name": "List_Tasks_Provider",
    "group": "Task",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/provider/sendproposal",
    "title": "Send Proposal",
    "name": "Send_Proposal",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "task_id",
            "description": "<p>Id of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "cover_letter",
            "description": "<p>Proposal letter in text.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t-110.8571443,\n\t\t\t\t\t\t32.4586858\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t\"cost\": {\n\t\t\t\t\t\"service_cost\": 0,\n\t\t\t\t\t\"other_cost\": 0,\n\t\t\t\t\t\"discount\": 0,\n\t\t\t\t\t\"total\": 0\n\t\t\t\t},\n\t\t\t\t\"images\": [\n\t\t\t\t\t\"/images/1600840282151.jpg\",\n\t\t\t\t\t\"/images/1600840282166.jpg\"\n\t\t\t\t],\n\t\t\t\t\"_id\": \"5f6ae25a9647803978867259\",\n\t\t\t\t\"title\": \"Tap Repair test\",\n\t\t\t\t\"service\": \"repair\",\n\t\t\t\t\"description\": \"broken tap\",\n\t\t\t\t\"instruction\": \"Not specified\",\n\t\t\t\t\"name\": \"souradeep\",\n\t\t\t\t\"mobile\": \"919804985304\",\n\t\t\t\t\"status\": \"Hiring\",\n\t\t\t\t\"address\": \"india\",\n\t\t\t\t\"proposals\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"5f6ae76860814f139cc9feb4\",\n\t\t\t\t\t\t\"provider\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\t\t\"cover_letter\": \"hi\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"_id\": \"5f6b28f1039e8158f879431b\",\n\t\t\t\t\t\t\"provider\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\t\t\"cover_letter\": \"hi\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"createdAt\": \"2020-09-23T05:51:22.187Z\",\n\t\t\t\t\"updatedAt\": \"2020-09-23T10:52:33.909Z\",\n\t\t\t\t\"__v\": 0\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/consumer/sendreview",
    "title": "Send Review",
    "name": "Send_Review",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating value between 1 and 5</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "provider",
            "description": "<p>Id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of user in text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback in text.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t{\n\t\t\t\"status\": \"success\",\n\t\t\t\"data\": {\n\t\t\t\t\"rating\": 2,\n\t\t\t\t\"_id\": \"5f6c381085dad029f085cc8e\",\n\t\t\t\t\"provider\": \"5f67ac2e9a599b177fba55b5\",\n\t\t\t\t\"username\": \"Demo\",\n\t\t\t\t\"feedback\": \"Good Boy\",\n\t\t\t\t\"createdAt\": \"2020-09-24T06:09:20.464Z\",\n\t\t\t\t\"updatedAt\": \"2020-09-24T06:09:20.464Z\",\n\t\t\t\t\"__v\": 0\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/user/changeprofilepic",
    "title": "Change Profile Pic",
    "name": "Change_Profile_Pic",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "profile_picture",
            "description": "<p>Picture to change.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    -110.8571443,\n                    32.4586858\n                ]\n            },\n            \"provider\": {\n                \"verification_document\": null,\n                \"service\": \"\",\n                \"description\": \"\"\n            },\n            \"is_switched_provider\": false,\n            \"is_available\": true,\n            \"_id\": \"5f67ac2e9a599b177fba55b5\",\n            \"name\": \"Demo\",\n            \"gender\": \"male\",\n            \"mobile\": \"919903614706\",\n            \"address\": \"kjhkd kjdhfbk\",\n            \"status\": \"approved\",\n            \"active_session_refresh_token\": \"5OwDBqzHLUFj54TJ\",\n            \"profile_picture\": \"/images/1601090029587.jpg\",\n            \"createdAt\": \"2020-09-20T19:23:26.855Z\",\n            \"updatedAt\": \"2020-09-26T03:13:49.600Z\",\n            \"__v\": 0,\n            \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjdhYzJlOWE1OTliMTc3ZmJhNTViNSIsIm1vYmlsZSI6IjkxOTkwMzYxNDcwNiIsIm5hbWUiOiJEZW1vIiwiaWF0IjoxNjAwNjMyMDgxLCJleHAiOjE2MDA3MTg0ODF9.Uj642GC9-b_dkoTR1lrq2Z3PouybDz1Q-gzAw2TRCCI\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/editprofile",
    "title": "Edit Profile",
    "name": "Edit_Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Users unique mobile with ISD code i.e 919903614705.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>ENUM[male,female].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Need if mobile number is different.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"otp\": 1255\n        }\n    }\n    // OR,\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    88.1567362,\n                    22.8258274\n                ]\n            },\n            \"provider\": {\n                \"verification_document\": \"/images/1601093261125.jpg\",\n                \"service\": \"Truck\",\n                \"description\": \"Hello I a taxi driver\"\n            },\n            \"is_switched_provider\": true,\n            \"is_available\": true,\n            \"_id\": \"5f6e2d65afce8e1078f429fd\",\n            \"name\": \"Captain America\",\n            \"gender\": \"male\",\n            \"mobile\": \"917003096982\",\n            \"address\": \"\",\n            \"status\": \"pending\",\n            \"active_session_refresh_token\": \"cxi6IrWNcbA0F2bf\",\n            \"profile_picture\": \"/images/1601056101315.jpg\",\n            \"createdAt\": \"2020-09-25T17:48:21.450Z\",\n            \"updatedAt\": \"2020-09-26T05:07:43.969Z\",\n            \"__v\": 0,\n            \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmUyZDY1YWZjZThlMTA3OGY0MjlmZCIsIm1vYmlsZSI6IjkxNzAwMzA5Njk4MiIsIm5hbWUiOiJDYXB0YWluIEFtZXJpY2EiLCJpYXQiOjE2MDEwOTY4MjQsImV4cCI6MTYwMTE4MzIyNH0.F_qDFd3Ze0kZAUGXrBG8ktDXvvmbljU3Bt5NUFY_aAI\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/editproviderprofile",
    "title": "Edit Provider Profile",
    "name": "Edit_Provider_Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>Provider service type.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "verification_document",
            "description": "<p>Certificate is mandatory for taxi or truck service.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    88.1567362,\n                    22.8258274\n                ]\n            },\n            \"provider\": {\n                \"verification_document\": \"/images/1601093261125.jpg\",\n                \"service\": \"Truck\",\n                \"description\": \"Hello I a truck driver\"\n            },\n            \"is_switched_provider\": true,\n            \"is_available\": true,\n            \"_id\": \"5f6e2d65afce8e1078f429fd\",\n            \"name\": \"Demo Provider\",\n            \"gender\": \"female\",\n            \"mobile\": \"919804315065\",\n            \"address\": \"\",\n            \"status\": \"pending\",\n            \"active_session_refresh_token\": \"0jmxzffnLD4kCsWD\",\n            \"profile_picture\": \"/images/1601056101315.jpg\",\n            \"createdAt\": \"2020-09-25T17:48:21.450Z\",\n            \"updatedAt\": \"2020-09-26T04:07:41.157Z\",\n            \"__v\": 0,\n            \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmUyZDY1YWZjZThlMTA3OGY0MjlmZCIsIm1vYmlsZSI6IjkxOTgwNDMxNTA2NSIsIm5hbWUiOiJEZW1vIFByb3ZpZGVyIiwiaWF0IjoxNjAxMDU2MTAxLCJleHAiOjE2MDExNDI1MDF9.lPo1kHgYGxJXV4Ainod1twFKbXwlcbtmaNFGgiobcCg\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Error\n    {\n        \"status\": \"failed\",\n        \"error\": \"You should give a verification document.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/switchprofile",
    "title": "Switch Profile",
    "name": "Switch_Profile",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    -110.8571443,\n                    32.4586858\n                ]\n            },\n            \"provider\": {\n                \"verification_document\": null,\n                \"service\": \"\",\n                \"description\": \"\"\n            },\n            \"is_switched_provider\": false,\n            \"is_available\": true,\n            \"_id\": \"5f67ac2e9a599b177fba55b5\",\n            \"name\": \"Demo\",\n            \"gender\": \"male\",\n            \"mobile\": \"919903614706\",\n            \"address\": \"kjhkd kjdhfbk\",\n            \"status\": \"approved\",\n            \"active_session_refresh_token\": \"5OwDBqzHLUFj54TJ\",\n            \"profile_picture\": \"/images/1600629806826.jpg\",\n            \"createdAt\": \"2020-09-20T19:23:26.855Z\",\n            \"updatedAt\": \"2020-09-26T00:15:53.977Z\",\n            \"__v\": 0,\n            \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjdhYzJlOWE1OTliMTc3ZmJhNTViNSIsIm1vYmlsZSI6IjkxOTkwMzYxNDcwNiIsIm5hbWUiOiJEZW1vIiwiaWF0IjoxNjAwNjMyMDgxLCJleHAiOjE2MDA3MTg0ODF9.Uj642GC9-b_dkoTR1lrq2Z3PouybDz1Q-gzAw2TRCCI\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Error\n    {\n        \"status\": \"failed\",\n        \"error\": \"All pending tasks should be completed to switch profile.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updatelocation",
    "title": "Update Location",
    "name": "Update_Location",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>JSON stringify string with coordinates i.e {&quot;longitude&quot;:&quot;-110.8571443&quot;,&quot;lattitude&quot;:&quot;32.4586858&quot;}.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"status\": \"success\",\n        \"data\": {\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    -110.8571443,\n                    32.4586858\n                ]\n            },\n            \"provider\": {\n                \"verification_document\": \"/images/1601093261125.jpg\",\n                \"service\": \"Truck\",\n                \"description\": \"Hello I a taxi driver\"\n            },\n            \"is_switched_provider\": true,\n            \"is_available\": true,\n            \"_id\": \"5f6e2d65afce8e1078f429fd\",\n            \"name\": \"Captain America\",\n            \"gender\": \"male\",\n            \"mobile\": \"919804985304\",\n            \"address\": \"india\",\n            \"status\": \"pending\",\n            \"active_session_refresh_token\": \"XsHAdWYVc2kRKCPq\",\n            \"profile_picture\": \"/images/1601056101315.jpg\",\n            \"createdAt\": \"2020-09-25T17:48:21.450Z\",\n            \"updatedAt\": \"2020-09-30T15:45:17.386Z\",\n            \"__v\": 0,\n            \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmUyZDY1YWZjZThlMTA3OGY0MjlmZCIsIm1vYmlsZSI6IjkxOTgwNDk4NTMwNCIsIm5hbWUiOiJDYXB0YWluIEFtZXJpY2EiLCJpYXQiOjE2MDE0ODA2NTgsImV4cCI6MTYwMTU2NzA1OH0.lxtj5Ftub-EYx1XE25DjSJW7J0U48r6O2fizyw-IUkk\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "InRange-backend/controllers/UserController.js",
    "groupTitle": "User"
  }
] });
