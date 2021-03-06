#!/usr/bin/env node

const { exec, readLineSync } = require("./_utils");

(async function () {
  const ans = await readLineSync(`Have you committed? [Y/n]`);
  if (ans !== "Y" && ans !== "y") return;

  const name = await readLineSync(`Enter name of branch to be merged to DEV: `);

  console.log("\n### switch to DEV ###\n");
  await exec("git switch dev");

  console.log(`\n### merge ${name} to DEV ###\n`);
  await exec(`git merge ${name} --no-ff`);

  console.log(`\n### delete branch: ${name} ###\n`);
  await exec(`git branch -D ${name}`);

  console.log("\n\n# # # # # # # # # # # #");
  console.log("#       ALL DONE      #");
  console.log("# # # # # # # # # # # #");
})();
