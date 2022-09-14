# TivityLabs Boulder technical test
to start the server:
```powershell
npm start
```

1. Send an SMS to: `+18438915411` with task description
2. Twilio's API will send a request to backend webhook endpoint `/task-webhook`, and save it to MongoDB
3. To query all tasks in MongoDB send GET Request to `/tasks` endpoint
[Test Server Endpoint](https://madrasacloud.com:3000/tasks)

### Built using `typescript` + `express.js` + `mongoose` for MongoDB

### Test Server: `https://madrasacloud.com:3000`