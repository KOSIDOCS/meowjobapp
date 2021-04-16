const path = require("path");
const axios = require("axios");
const cors = require("cors");
const express = require("express");
const _ = require("lodash");
const app = express();
const PORT = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "client/build");

app.use(express.static(buildPath));
app.use(cors());

const BASE_API_URL_1 = 'https://jobs.github.com';
const BASE_API_URL_2 = 'http://api.adzuna.com/v1/api/jobs/gb/search';

app.get("/jobs", async (req, res) => {
  let jobtypeGit , jobtypeAdz, salary_min, salary_max;
  try {
    
    let { description, location, jobtype, salary_range,  page = 1 } = req.query;
    description = description ? encodeURIComponent(description) : "";
    location = location ? encodeURIComponent(location) : "";
    jobtypeGit = jobtype === "full_time" ? "&full_time=true" : "";
    jobtypeAdz = jobtype !== "Job Type" ? `&${jobtype}=1` : "";
    salary_min = salary_range !== "Salary Range" ? `&salary_min=${salary_range.substring(1, 3)}000` : "";
    salary_max = salary_range !== "Salary Range" ? `&salary_max=${salary_range.substring(6, 8)}000` : "";

    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? "" : `&page=${page}`;
    }


    const query_1 = `${BASE_API_URL_1}/positions.json?description=${description}&location=${location}${jobtypeGit}${page}`;
    const query_2 = `${BASE_API_URL_2}/1?app_id=9b50993b&app_key=e6d1d6c644a35c0fc7cb7a2877337cd3&results_per_page=50&what=${description}&where=${location}${jobtypeAdz}${salary_min}${salary_max}&content-type=application/json`
    const result_1 = await axios.get(query_1);
    const result_2 = await axios.get(query_2);
    const allJobs = _.concat(result_1.data, result_2.data.results);

    res.send(allJobs)
  } catch (error) {
    res.status(400).send("Error while getting list of jobs.Try again later.");
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
