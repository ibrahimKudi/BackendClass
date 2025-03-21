const os = require('os');

const user = os.userInfo();
console.log(user .username);

const myLaptop = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
}

console.log(myLaptop);