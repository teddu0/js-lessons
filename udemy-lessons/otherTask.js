let segmentStatus = "COMPUTED";
let taskStatuses = ["CREATED", "IN_PROGRESS", "COMPLETED", "ERROR"];
let getRandomIndex = () => Math.floor(Math.random() * taskStatuses.length);

let getTaskStatus = () => {
  let randomStatus;
  while (true) {
    randomStatus = taskStatuses[getRandomIndex()];
    if (randomStatus === "ERROR" || randomStatus === "COMPLETED") {
      break;
    }
  }
  return randomStatus;
};

let segmentIsComputed = () => {
  let taskStatus = getTaskStatus();
  if (taskStatus === "COMPLETED" && segmentStatus === "COMPUTED") {
    console.log(`Статус таски ${taskStatus}, сегмент собрался успешно!!`);
  } else {
    console.log(`Статус таски ${taskStatus}, сегмент не соберется..`);
  }
};

segmentIsComputed();
