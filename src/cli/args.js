const parseArgs = () => {
  const variables = process.argv.slice(2);

  const result = [];

  for (let i = 0; i < variables.length; i += 2) {
    const key = variables[i].slice(2);
    const variable = variables[i + 1];

    result.push(`${key} is ${variable}`);
  }

  console.log(result.join(", "));
};

parseArgs();
