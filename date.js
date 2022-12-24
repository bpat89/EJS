
exports.getDate1 = function (){
const today = new Date();
const options = {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
};
return today.toLocaleString("en-US", options);

}

exports.getDate2 = function (){
const today = new Date();
const options = {
weekday: 'long',
day: 'numeric'
};
return today.toLocaleString("en-US", options);
}
