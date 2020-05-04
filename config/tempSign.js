const date = Math.floor(Date.now() / 1000) + (10);
function getJwtList() {
  const list = { secret: 'supersecret', exp: date };
  return list;
}

module.exports.getJwtList = getJwtList;
