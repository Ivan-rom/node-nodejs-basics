const parseArgs = () => {
  let res = "";

  process.argv.slice(2).forEach((el, i) => {
    if (i % 2 === 0) {
      if (i !== 0) res += ", ";

      res += `${el.slice(2)} is `;
    } else {
      res += `${el}`;
    }
  });

  console.log(res);
};

parseArgs();
