export class Task {
    constructor(id, name, frequency, assignment = null ) { // add duration, difficulty, overdue = false
        this.id = id;
        this.name = name;
        this.frequency = frequency;
        // this.duration = duration;
        // this.difficulty = difficulty;
        this.assignment = assignment;
        // this.overdue = overdue;
    }
}

