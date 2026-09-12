function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

module.exports = { formatDate, capitalize, slugify };
