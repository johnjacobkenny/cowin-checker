const available = (session) => session.available_capacity > 0;
const dose1 = (session) => session.available_capacity_dose1 > 0;
const dose2 = (session) => session.available_capacity_dose2 > 0;
const above18 = (session) => session.min_age_limit === 18;
const above45 = (session) => session.min_age_limit === 45;
const covishield = (session) => session.vaccine === "COVISHIELD";
const covaxin = (session) => session.vaccine === "COVAXIN";

module.exports = {
  available,
  dose1,
  dose2,
  above18,
  above45,
  covishield,
  covaxin,
};
