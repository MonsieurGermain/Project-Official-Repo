import schedule from "node-schedule";
import {
  jobsToRunEveryDay, jobsToRunEveryFiveMinutes, jobsToRunEveryHour, jobsToRunEveryMinute
} from "./jobTypes";

// To run your jobs you must import your job file
import "./expiry";

const startScheduler = () => {
  // it will run every minute
  schedule.scheduleJob("*/1 * * * *", () => {
    jobsToRunEveryMinute.forEach((job) => job());
  });

  // it will run every 5 minutes
  schedule.scheduleJob("*/5 * * * *", () => {
    jobsToRunEveryFiveMinutes.forEach((job) => job());
  });

  // it will run every hour at 00 minutes
  schedule.scheduleJob("0 * * * *", () => {
    jobsToRunEveryHour.forEach((job) => job());
  });

  // it will run every day at 00:00
  schedule.scheduleJob("0 0 * * *", () => {
    jobsToRunEveryDay.forEach((job) => job());
  });
};

// if you want more details about scheduling you can check this link
// https://crontab.guru/
// you can use this website to generate cron expression for your needs

export { startScheduler };