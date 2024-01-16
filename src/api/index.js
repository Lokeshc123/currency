import axios from "axios";
export const fetchSupportedCurrencies = async () => {
  const options = {
    method: "GET",
    url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
    headers: {
      "X-RapidAPI-Key": "25832351f3mshf3e34e1e5c8cb45p1d5372jsn2af00fd1bdab",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const convert = async (from, to, amount) => {
  const options = {
    method: "GET",
    url: "https://currency-converter18.p.rapidapi.com/api/v1/convert",
    params: {
      from: from,
      to: to,
      amount: amount,
    },
    headers: {
      "X-RapidAPI-Key": "25832351f3mshf3e34e1e5c8cb45p1d5372jsn2af00fd1bdab",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
