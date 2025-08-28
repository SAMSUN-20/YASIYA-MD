const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~Cxw0FKQS#07W_xsSi7SFiAnAVNEtD-WnGM7-yWeI2Uvph6pF2hgg'
};
