"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItem = void 0;
class ToDoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements needed
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.ToDoItem = ToDoItem;
