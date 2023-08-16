//Setting up server
const express = require('express')
const application = express();
application.use(express.json());
const cors = require('cors');
application.use(cors({
 origin: "https://64dc84ba50bc8c43376bc755--animated-marigold-8e403a.netlify.app/"
}))
//Database-connection
require('./databaseConnect.js')

//Importing routers
//1. Credential router
const credentialRoutes = require('./ROUTER/credentialRouter.js');
application.use('/Credential', credentialRoutes)
//2. Project router
const projectRoutes = require('./ROUTER/projectRouter.js')
application.use('/Project', projectRoutes)


//Starting-up server
const serverPort = 8000;
application.listen(serverPort, () => {
 console.log("Server started")
 console.log(`URL : http://localhost:${serverPort}/`)
})