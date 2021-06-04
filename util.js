function get3Dates() {
  const dates = [];
  for (let i = 1; i <= 3; i++) {
    const date = new Date();
    dates.push(date.setDate(date.getDate() + i));
  }

  return dates.map((date) => new Date(date));
}

function prettyTitle(title, date) {
  let result = `${title} | ${new Date(date).toLocaleDateString()}\n`;
  const length = title.length;
  for (i = 0; i < length; i++) result += "=";

  return result;
}

function prettyCenter({ name, fee }) {
  return `${name} (Cost: ${fee})`;
}

function prettySession({
  vaccine,
  min_age_limit: age,
  available_capacity_dose1: dose1,
  available_capacity_dose2: dose2,
}) {
  return `${vaccine} for age ${age}+. Dose 1: ${dose1}, Dose 2: ${dose2}`;
}

module.exports = {
  get3Dates,
  prettyCenter,
  prettySession,
  prettyTitle,
};
