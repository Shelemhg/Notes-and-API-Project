import { makeRequest } from "../json-server/script.js";

  

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'    
});

