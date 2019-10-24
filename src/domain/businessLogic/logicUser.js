const moment = require('moment');

const logicUser = {};

logicUser.getUserFilter = async (data, resp) => {
  const user = data.filter((element) => element.is_active === true);
  const userSort = logicUser.sortLastName(user);
  resp = logicUser.userAge(userSort);
  return resp;
};

logicUser.sortLastName = (req, resp) => {
  resp = req.sort((a, b) => ((a.lastname > b.lastname) ? 1 : ((b.lastname > a.lastname) ? -1 : 0)));
  return resp;
};

logicUser.userAge = (req, resp) => {
  resp = req.map((element) => {
    const ageUser = {
      id: element.id,
      name: element.name,
      lastname: element.lastname,
      birthday: element.birthday,
      is_active: element.is_active,
      email: element.email,
      genere: element.genre,
      age: moment().diff(element.birthday, 'years')
    };
    return ageUser;
  });
  return resp;
};

module.exports = logicUser;
