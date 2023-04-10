const fs = require("fs");
const readline = require("readline-sync");
const chalk = require("chalk");

const write = async () => {
  let temp = 0;
  const tempArray = [];
  if (fs.existsSync("./notes.json")) {
    let fileData = fs.readFileSync("./notes.json", "utf-8");
    fileData = JSON.parse(fileData);
    for (let kk = 0; kk < fileData.notes.length; kk++) {
      if (fileData.notes[kk] != null) {
        temp = fileData.notes[kk].ID;
        tempArray[kk] = fileData.notes[kk];
      }
    }
  }

  const count = readline.question(chalk.white.bgCyan.bold("Number of user "));
  for (let i = 1; i <= count; i++) {
    console.log(chalk.white.bgCyan.bold("Id: " + (temp + 1).toString()));
    const title = readline.question(chalk.white.bgCyan.bold("Title: "));
    const body = readline.question(chalk.white.bgCyan.bold("Body: "));
    tempArray[temp] = { ID: temp + 1, Title: title, Body: body };
    temp++;
  }

  const data = JSON.stringify({ notes: tempArray });
  fs.writeFileSync("./notes.json", data);
};

const read = () => {
  if (fs.existsSync("./notes.json")) {
    let userD = readline.question(
      chalk.white.bgCyan.bold(
        "Enter 1 to see paticular note and 2 for all the notes "
      )
    );
    if (userD == 1) {
      let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
      let a = fs.readFileSync("./notes.json");
      let j = JSON.parse(a);
      if (id > 0 && id <= j.notes.length) {
        console.log(
          chalk.black.bgMagenta.bold("ID          Title           Body")
        );
        console.log(
          chalk.white.bgMagenta(
            j.notes[id - 1].ID +
              "            " +
              j.notes[id - 1].Title +
              "         " +
              j.notes[id - 1].Body
          )
        );
      } else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"));
    }
    if (userD == 2) {
      let a = fs.readFileSync("./notes.json", "utf-8");
      a = JSON.parse(a);
      console.log(chalk.white.bgMagenta.bold("ID      Title       Body"));
      a.notes.forEach((element, index) => {
        if (element != null)
          console.log(
            chalk.white.bgMagenta(
              "" +
                element.ID +
                "         " +
                element.Title +
                "        " +
                element.Body
            )
          );
      });
    }
  } else console.log(chalk.white.bgRed("File does not exit"));
};

const deleteNote = () => {
  if (fs.existsSync("./notes.json")) {
    let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
    let a = fs.readFileSync("./notes.json");
    let uj = JSON.parse(a);
    if (id > 0 && id <= uj.notes.length) {
      for (let i = 0; i < uj.notes.length; i++) {
        if (uj.notes[i] == null && i == id - 1) {
          console.log(chalk.white.bgRed.bold("Already Deleted"));
        } else if (i == id - 1) {
          delete uj.notes[i];
        }
      }

      let data = JSON.stringify(uj);
      fs.writeFileSync("./notes.json", data);
      console.log(chalk.white.bgMagenta("User Deleted"));
    } else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"));
  } else console.log(chalk.white.bgRed("File Does not exit"));
};

const updateNote = () => {
  if (fs.existsSync("./notes.json")) {
    let file = fs.readFileSync("./notes.json", "utf-8");
    let j = JSON.parse(file);
    let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
    if (id > 0 && id <= j.notes.length) {
      let title = readline.question(chalk.white.bgCyan.bold("Enter the title"));
      let body = readline.question(chalk.white.bgCyan.bold("Enter the body"));
      for (let i = 0; i < j.notes.length; i++) {
        if (i == id - 1) {
          j.notes[i] = { ID: id, Title: title, Body: body };
        }
      }
      let data = JSON.stringify(j);
      fs.writeFileSync("./notes.json", data);
      console.log(chalk.white.bgMagentaBright.bold("Note updated"));
    } else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"));
  } else console.log(chalk.white.bgRed("File does not exit"));
};

module.exports = {
  write,
  read,
  deleteNote,
  updateNote,
};
