import { execa, execaCommand, execaCommandSync } from "execa";
import chalk from "chalk";

async function run(cmd: string) {
  const { stdout } = await execaCommandSync(cmd);

  let prefix: string;

  prefix = chalk.blue("[stdout]");
  console.log(prefix + " " + stdout + "\n");

  prefix = chalk.green.underline("[stdout]");
  console.log(prefix + " " + stdout + "\n");

  prefix = chalk.hex("#DEADED").bgRgb(15, 100, 204).underline("[stdout]");
  console.log(prefix + " " + stdout + "\n");

  prefix = chalk.red.bgYellow("[stdout]");
  console.log(prefix + " " + stdout + "\n");

  prefix = chalk.black.bgRed.bold("[stdout]");
  console.log(prefix + " " + stdout + "\n");
}

async function main() {
  run("echo test");
}

main();
console.warn;
