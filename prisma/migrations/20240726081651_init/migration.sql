-- CreateTable
CREATE TABLE "DateTimeSpent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateTimeStart" DATETIME NOT NULL,
    "dateTimeEnd" DATETIME,
    "taskId" INTEGER,
    CONSTRAINT "DateTimeSpent_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
