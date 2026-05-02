function getTopNotifications(data) {
  const grouped = {};

  data.forEach(item => {
    if (!grouped[item.Type]) grouped[item.Type] = [];
    grouped[item.Type].push(item);
  });

  const result = [];

  for (let key in grouped) {
    grouped[key]
      .sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp))
      .slice(0, 2)
      .forEach(item => result.push(item));
  }

  return result;
}

module.exports = getTopNotifications;
