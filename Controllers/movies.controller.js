export const MoviesRead = (req, res) => {
  res.json({ name: "Madhavaraj C" });
};

export const MoviesCreate = (req, res) => {
  res.send("Hello world ");
};

export const MoviesUpdate = (req, res) => {
  res.send("This is for the updation");
};

export const MoviesDelete = (req, res) => {
  res.send("This is the deletion");
};
