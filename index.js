const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/personalhealth/bmi", async (req, res) => {
  const { weight, height} = req.query; // extract weight and height from query parameters
  const options1 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bmi",
    params: { weight, height }, // use weight and height from query parameters
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options1);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/personalhealth/bfp", async (req, res) => {
  const { weight, height, age, gender } = req.query; // extract weight and height from query parameters

  if (
    !weight ||
    !height ||
    !age ||
    !gender
  ) {
    // check if weight and height are provided
    return res
      .status(400)
      .send(
        "Please provide weight, height, age, gender"
      );
  }
  const options3 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bfp",
    params: { weight, height, age, gender },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options3);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/personalhealth/ibw", async (req, res) => {
  const { weight, height, gender } = req.query; // extract weight and height from query parameters

  if (
    !weight ||
    !height ||
    !gender 

  ) {
    // check if weight and height are provided
    return res
      .status(400)
      .send(
        "Please provide weight, height, gender"
      );
  }
  const options4 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/ibw",
    params: { weight, height, gender },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options4);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/personalhealth/whr", async (req, res) => {
  const {gender, hip, waist } = req.query; // extract weight and height from query parameters

  if (

    !gender ||
    !hip ||
    !waist 
  ) {
    // check if weight and height are provided
    return res
      .status(400)
      .send(
        "Please provide  gender, hip, waist"
      );
  }
  const options5 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/whr",
    params: { waist, hip, gender },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options5);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
app.get("/personalhealth/absi", async (req, res) => {
  const { weight, height, age, gender, waist} = req.query; // extract weight and height from query parameters

  if (
    !weight ||
    !height ||
    !age ||
    !gender ||
    !waist 
  ) {
    // check if weight and height are provided
    return res
      .status(400)
      .send(
        "Please provide weight, height, age, gender, waist"
      );
  }
  const options6 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/absi",
    params: { weight, height, waist, age, gender },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options6);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/personalhealth/tdee", async (req, res) => {
  const { weight, height, age, gender, activitylevel } = req.query; // extract weight and height from query parameters

  if (
    !weight ||
    !height ||
    !age ||
    !gender ||
    !activitylevel
  ) {
    // check if weight and height are provided
    return res
      .status(400)
      .send(
        "Please provide weight, height, age, gender and activitylevel"
      );
  }
  const options7 = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/tdee",
    params: { weight, height, activitylevel, age, gender },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options7);
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
app.get("/search", (req, res) => {
  const query = req.query.q;
  const options = {
    method: "GET",
    url: "https://airvisual1.p.rapidapi.com/v2/auto-complete",
    params: {
      q: query,
      "x-user-lang": "en-US",
      "x-user-timezone": "Asia/Singapore",
      "x-aqi-index": "us",
      "x-units-pressure": "mbar",
      "x-units-distance": "kilometer",
      "x-units-temperature": "celsius",
      limit: 1,
    },
    headers: {
      'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
      "X-RapidAPI-Host": "airvisual1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const id = response.data.data.cities[0].id;
      const cityOptions = {
        method: "GET",
        url: "https://airvisual1.p.rapidapi.com/cities/get-information",
        params: {
          id: id, // add id variable as a query parameter
          "x-user-lang": "en-US",
          "x-user-timezone": "Asia/Singapore",
          "x-aqi-index": "us",
          "x-units-pressure": "mbar",
          "x-units-distance": "kilometer",
          "x-units-temperature": "celsius",
        },
        headers: {
          'X-RapidAPI-Key': '3a15242d40mshb39fad4b437591bp1ca967jsn7fa7f7e8b9b0',
          "X-RapidAPI-Host": "airvisual1.p.rapidapi.com",
        },
      };

      axios
        .request(cityOptions)
        .then(function (cityResponse) {
          res.send(cityResponse.data); // send city data back to client
        })
        .catch(function (cityError) {
          console.error(cityError);
          res
            .status(500)
            .send("Error occurred while fetching city data from API"); // send error response back to client
        });
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send("Error occurred while fetching data from API");
    });
});

app.get("/weather", (req, res) => {
const location = req.query.q;; // Replace with user input

// API endpoint and parameters
const endpoint = 'http://api.openweathermap.org/data/2.5/weather';
const params = {
  q: location,
  appid: '59fea568b86fdc7f82a9a68bdbfb78e6'
};

// Make GET request using Axios
axios.get(endpoint, { params })
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(error => {
    console.error(error);
  });
})

app.get("/forecast", (req, res) => {
  const location = req.query.q;; // Replace with user input
  
  // API endpoint and parameters
  const endpoint = 'http://api.openweathermap.org/data/2.5/forecast';
  const params = {
    q: location,
    appid: '59fea568b86fdc7f82a9a68bdbfb78e6'
  };
  
  // Make GET request using Axios
  axios.get(endpoint, { params })
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  })

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
