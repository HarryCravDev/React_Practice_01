import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aVJigTY2G5i1Oej27DXJs8p3bPAuIddBwvl_uzR8Npo",
  },
});
