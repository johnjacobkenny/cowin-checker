const { available, covishield, above18, dose2, covaxin } = require("./filters");

module.exports = {
  locations: [
    {
      type: "district",
      districtId: 304,
      title: "Kottayam",
      filters: [available, above18],
    },
    {
      type: "district",
      districtId: 296,
      title: "Trivandrum",
      filters: [available],
    },
    {
      type: "district",
      districtId: 380,
      title: "Nagpur",
      filters: [available, covaxin, above18],
    },
  ],
};
