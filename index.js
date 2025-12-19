// require date module
const DateJS = require('datejs');

function combineUsers(...args){

  const combinedObject = {
    users: []
  };

  // step 2: loop through args and merge the arrays
  for(const array of args) {

    // step 3 & 4: make sure we're working with an array and spread it into the users array 
    if(Array.isArray(array)) {
      combinedObject.users.push(...array);
    }
  }

  // step 5: add todays date 
  const today = new Date()
  const formatDate = today.toString('M/d/yyyy')
  combinedObject.merge_date = formatDate;

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};