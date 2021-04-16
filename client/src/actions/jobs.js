import axios from "axios";
import moment from "moment";
import { BASE_API_URL } from "../utils/constants";
import { setErrors } from "./errors";

export const initiateGetJobs = (data, isLoadMore) => {
  return async (dispatch) => {
    try {
      let { jobValue, jobtype, locaValue, selectSalary, page } = data;

      jobValue = jobValue ? encodeURIComponent(jobValue) : "";
      locaValue = locaValue ? encodeURIComponent(locaValue) : "";
      // jobtype = jobtype ? "&full_time=true" : "";
      selectSalary = selectSalary ? encodeURIComponent(selectSalary) : "";
      jobtype = jobtype ? encodeURIComponent(jobtype) : "";

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? "" : `&page=${page}`;
      }

      const jobs = await axios.get(
        `${BASE_API_URL}/jobs?description=${jobValue}&location=${locaValue}&jobtype=${jobtype}${page}&salary_range=${selectSalary}`
      );
      // const jobs = await axios.get('./jobs.json');
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );

      if (isLoadMore) {
        return dispatch(setLoadMoreJobs(sortedJobs));
      } else {
        return dispatch(setJobs(sortedJobs));
      }
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: "SET_JOBS",
  jobs,
});

export const setLoadMoreJobs = (jobs) => ({
  type: "LOAD_MORE_JOBS",
  jobs,
});
