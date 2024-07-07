
export const TASKS = [
    {
        id: 0,
        name: "Wash the dishes",
        frequency: "Daily",
        assignment: 'pending',
    }, 

    {
        id: 1,
        name: "cut the grass",
        frequency: "Bi-Weekly",
        assignment: 'pending',
    },

    {
        id: 2,
        name: "clean the bathrooms",
        frequency: "Monthly",
        assignment: "Mom",
    }
];

// no longer using this class to define new tasks. I'm keeping this for now to remember what I want the object to hold
export class Task {
    constructor(id, name, frequency, assignment, dateCreated, dueDate ) { // add duration, difficulty, overdue = false
        this.id = id;
        this.name = name;
        this.frequency = frequency;
        // this.duration = duration;
        // this.difficulty = difficulty;
        this.assignment = assignment;
        this.dateCreated = dateCreated;
        this.dueDate = dueDate;
        // this.overdue = overdue;
    }
}

// time_rating options: 1: 0-30 minutes, 2: 30-60 minutes, 3: 1-2 hours, 4:2-4 hours, 5:4+ hours
// difficulty option? 1-5 scale
// frequency options: one-time, daily, weekly, bi-weekly, monthly, every _ months
// get points based on tasks completed and their difficulty/time 