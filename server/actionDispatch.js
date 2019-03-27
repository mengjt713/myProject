const action = {};

//引入login
const agent = require('./action/action-agent/agent');


action.dispatch = function (req, res, basepath) {
    let actionUrl = req.baseUrl;
    let param = req.query;
    if (req.method == 'POST') {
        param = req.body;
    }
    actionUrl = actionUrl.replace(basepath + '/', '');
    switch (actionUrl) {
        case 'action/agent/getAgent':
            var response = agent.getAgent();
            res.send(response);
            break;
    }
}

module.exports = action;