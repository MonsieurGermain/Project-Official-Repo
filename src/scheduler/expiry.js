import { jobsToRunEveryMinute, jobsToRunEveryFiveMinutes } from "./jobTypes";

const deleteExpiredMessages = async () => {
  console.log("deleteExpiredMessages");
};
const deleteExpiredConversation = async () => {
  console.log("deleteExpiredConversation");
};

// you just need to push your job to the array
jobsToRunEveryMinute.push(deleteExpiredMessages);
jobsToRunEveryFiveMinutes.push(deleteExpiredConversation);

