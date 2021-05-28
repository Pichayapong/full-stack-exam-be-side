const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/full-stack-exam-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
