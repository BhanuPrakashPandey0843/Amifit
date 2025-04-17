const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

const scriptMap = {
  "Push ups": "Pushup.py",
  "Bicep Curles": "Bicepcurl.py",
  "Lunges": "Lunges.py",
  "Situps": "Situps.py",
  "Squart": "Squat.py",
};

app.post("/start-exercise", (req, res) => {
  const { exercise } = req.body;
  const scriptName = scriptMap[exercise];

  if (!scriptName) return res.status(400).send("Invalid exercise name");

  const scriptPath = path.join(__dirname, "counter", scriptName);

  const command = `python "${scriptPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error executing script: ${error}`);
      return res.status(500).send("Failed to start exercise counter");
    }
    console.log(`✅ Started ${scriptName}`);
    res.send(`Exercise "${exercise}" counter started`);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
