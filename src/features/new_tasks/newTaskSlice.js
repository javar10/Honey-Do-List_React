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

export const calcDueDate = (dateCreated, frequency) => {
    const dateCreatedDay = dateCreated.getDay();
    const dateCreatedMonth = dateCreated.getMonth();
    console.log(frequency);

    let dueDateUnformatted;
    switch (frequency) {
        case 'One-Time':
            return;
        case 'Daily':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 1);
            break;
        case 'Weekly':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 7);
            break;
        case 'Bi-Weekly':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 14);
            break;
        case 'Monthly':
            dueDateUnformatted = dateCreated.setMonth(dateCreatedMonth + 1);
            break;
    }
    
    console.log(dueDateUnformatted)
    const dueDateObj = new Date(dueDateUnformatted);
    console.log(dueDateObj);
    const month = dueDateObj.getMonth() + 1;
    const day = dueDateObj.getDate();
    const year = dueDateObj.getFullYear();
    const dueDate = `${month}/${day}/${year}`
    console.log(dueDate);
    return dueDate;
}
