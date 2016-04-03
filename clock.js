
/**
 * Module dependencies.
 */

var CronJob = require('cron').CronJob;

/**
 * Initiate Cronjob.
 */

new CronJob({
  cronTime: "0 * * * *", // every hour
  onTick: start(),
  start: true,
  timeZone: "America/Los_Angeles"
});

/**
 * Function to be initiated by cron.
 */

function start() {
  // Do stuff.
}
