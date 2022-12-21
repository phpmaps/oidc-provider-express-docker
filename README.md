# OIDC Starter

## Install & Run

```
npm install

npm run start
```

## Test Provider

https://oidcdebugger.com/debug (see Server line below)


## Online resources

https://medium.com/@nitesh_17214/oauth-2-0-authorization-server-using-nodejs-and-expressjs-cf65860fed1e (Server)

https://medium.com/@nitesh_17214/how-to-create-oidc-client-in-nodejs-b8ea779e0c64 (Client)



### Start authorization flow

http://localhost:3000/oidc/auth?client_id=ping&redirect_uri=https%3A%2F%2Foidcdebugger.com%2Fdebug&scope=openid&response_type=code&response_mode=query&state=dgj1zh30lrm&nonce=q8u8r4m00il

Details

```

http://localhost:3000/oidc/auth
?client_id=ping
&redirect_uri=https://oidcdebugger.com/debug
&scope=openid
&response_type=code
&response_mode=query
&state=dgj1zh30lrm
&nonce=q8u8r4m00il

```


### Exchange id token for access token

```curl
curl -X POST "http://localhost:3000/oidc/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=K4ODHHLXgFyMkTt71wsThum7vBvdSAVJousyQKVP_tH" \
     -d "client_id=ping" \
     -d "client_secret=abc" \
     -d "redirect_uri=https%3A%2F%2Foidcdebugger.com%2Fdebug"
```

