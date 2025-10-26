const parseEnv = () => {
  let res = "";
  Object.keys(process.env).forEach((key, i) => {
    if (key.startsWith("RSS_")) {
      if (res !== "") res += "; ";
      res += `${key}=${process.env[key]}`;
    }
  });
  console.log(res);
};

parseEnv();
