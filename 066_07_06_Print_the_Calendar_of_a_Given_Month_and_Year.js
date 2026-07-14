const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function getCalendar(year, month) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const sunShift = firstDay === 0 ? 6 : firstDay - 1;
  let calendar = `${monthNames[month - 1]} ${year}\n${dayNames.join(' ')}\n`;
  for (let i = 0; i < sunShift; i++) calendar += '   ';
  for (let day = 1; day <= daysInMonth; day++) {
    calendar += String(day).padStart(2, ' ') + ' ';
    if ((day + sunShift) % 7 === 0) calendar += '\n';
  }
  return calendar;
}
async function main() {
  const year = parseInt(await question("Enter the year: "));
  const month = parseInt(await question("Enter the month: "));
  console.log(getCalendar(year, month));
  rl.close();
}
main();
