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

