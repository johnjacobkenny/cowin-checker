const cowin = require("cowin-api-wrapper");
const config = require("./config");
const { prettyCenter, prettySession, prettyTitle } = require("./util");

async function main() {
  console.log("");
  const responses = await Promise.all(
    config.locations.map(async (loc) => {
      let response;

      if (loc.type === "pincode") {
        response = await cowin.findAppointmentsByPin(loc.pincode);
      } else {
        response = await cowin.findAppointmentsByDistrict(loc.districtId);
      }

      const { error } = checkResponseForErrors(response);
      if (error) return { title: loc.title };

      return { data: response, title: loc.title };
    })
  );

  responses.forEach(({ title, data }) => {
    console.log(prettyTitle(title));
    if (data) listAvailableSlots(data.appointments);
    console.log("\n\n");
  });
}

function listAvailableSlots(appointments) {
  appointments.forEach((center) => {
    const { sessions } = center;
    if (!sessions || sessions.length === 0) {
      console.error(`No sessions available at ${center.name}`);
    } else {
      sessions.forEach((session) => {
        if (session.available_capacity > 0) {
          const _center = prettyCenter(center);
          const _session = prettySession(session);

          console.log(`${_center} - ${_session}`);
        }
      });
    }
  });
}

function checkResponseForErrors(response) {
  if (response.error) {
    return { error: response.error };
  }

  const { appointments } = response;

  if (!appointments || appointments.length === 0) {
    return { error: "No centres available" };
  }

  return { error: false };
}

main();
