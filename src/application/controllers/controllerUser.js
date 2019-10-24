const fetch = require('node-fetch');
const logicUser = require('../../domain/businessLogic/logicUser');

const URL = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
const options = { method: 'GET' };
const logOk = require('../../utils/logOk');
const logOut = require('../../utils/logOut');

const userCtrl = {};

userCtrl.getUrl = (url, method) => fetch(url, method)
  .then((res) => res.json())
  .catch((err) => {
    console.error(`Error ${err}`);
  });

userCtrl.getUser = async (req, res) => {
  try {
    const data = await userCtrl.getUrl(URL, options);

    const result = await logicUser.getUserFilter(data.users);
    if (result) {
      res.status(200).json({
        success: true,
        msg: 'User found!',
        user: result,
      });
      logOk.info('Data OK!');
    } else {
      res.status(404).json({
        msg: 'User not found',
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      msg: `Error ${error}`,
    });
    logOut.info(`Data error ${error}`);
  }
};


module.exports = userCtrl;
