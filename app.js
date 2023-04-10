const fs = require("fs");
const readline = require("readline-sync");
const chalk = require("chalk");
const { write, read, deleteNote, updateNote } = require("./actions");

while (true) {
  let userD = readline.question(
    chalk.white.bgCyan.bold(
      "Enter the no for\n 1 to enter note \n 2 to see the note \n 3 to delete the note \n 4 to update note  \n 0 to exit "
    )
  );

  if (userD == 1) {
    write();
  }

  if (userD == 2) {
    read();
  }

  if (userD == 3) {
    deleteNote();
  }

  if (userD == 4) {
    updateNote();
  }

  if (userD == 0) break;
}

// if(userD==0) break;

// }

// notes.forEach((element, index) =>
// 			console.log(chalk.blue.inverse(element.title))
// 		);
