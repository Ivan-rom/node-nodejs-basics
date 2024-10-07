const parseEnv = () => {
  const prefix = "RSS_";
  const keys = Object.keys(process.env).filter((key) => key.startsWith(prefix));
  keys.forEach((key) => console.log(`${key}=${process.env[key]}`));
};

parseEnv();
