const Connector = require('./Connector.js');

var msg = {};
var userId = `USER_ID`;
msg.payload = {
    endpoint: `/users/${userId}/meetings`,
    body: {
        "topic": "Test from API",
        "type": 2,
        "start_time": "2019-06-20T18:00:00Z",
        "duration": 1,
        "timezone": "Asia/Shanghai",
        //"password": "1234",
        "agenda": "Meeting Agenda set by API",
        "settings": {
            "host_video": false,
            "participant_video": false,
            //"cn_meeting": "boolean",
            "in_meeting": true,
            "join_before_host": true,
            "mute_upon_entry": false,
            "watermark": false,
            "use_pmi": false,
            "approval_type": 2,
            //"registration_type": "integer",
            "audio": "both",
            "auto_recording": "none",
            "enforce_login": false,
            "enforce_login_domains": false,
            //"alternative_hosts": "string"
        }
    }
};

let instance = new Connector({
    API_KEY: '',
    API_SECRET: ''
});
instance.call(msg.payload).then(r => console.log(r)).catch(err => console.log(err));