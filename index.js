import express from 'express';
import Provider from 'oidc-provider';
import * as path from 'node:path';
import { dirname } from 'desm';

const __dirname = dirname(import.meta.url); //fix this

const app = express();

app.use(express.static(__dirname + '/public'));  //fix this
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// client_id : oidcCLIENT

const configuration = {

    clients: [{
        client_id: "ping",
        client_secret: "abc",
        grant_types: ["authorization_code"],
        redirect_uris: ["http://localhost:8080", "http://localhost:8080/callback", "http://localhost:8080/connect", "http://localhost:8080/auth/callback", "https://oidcdebugger.com/debug"],
        response_types: ["code"],
        //other configurations if needed
    }],
    pkce: {
        required: () => false,
    },
};

const oidc = new Provider('http://localhost:3000', configuration);

app.use("/oidc", oidc.callback());

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`OIDC is listening on port ${port}`);
});
