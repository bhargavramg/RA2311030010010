const getTopNotifications = require("./notification");

const sampleData = [
  { Type: "Placement", Timestamp: "2026-05-02T09:00:00" },
  { Type: "Placement", Timestamp: "2026-05-01T08:00:00" },
  { Type: "Placement", Timestamp: "2026-05-01T07:00:00" },
  { Type: "Result", Timestamp: "2026-05-01T12:00:00" },
  { Type: "Result", Timestamp: "2026-05-01T11:00:00" },
  { Type: "Event", Timestamp: "2026-05-01T10:00:00" }
];

console.log(getTopNotifications(sampleData));
