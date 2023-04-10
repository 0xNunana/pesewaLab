const Amadeus = require("amadeus")
const express = require("express")
const router = express.Router()

const amadeus = new Amadeus({
    clientId: "0SnIDJXDGXU0vwx0phuvLFxNNSvTZ3QJ",
    clientSecret: "ts31AGU8POnmmu2d",
  });

  const API = "api";

  router.get(`/${API}/search`, async (req, res) => {
    try {
      const { keyword } = req.query;
      const response = await amadeus.referenceData.locations.get({
        
        subType: Amadeus.location.any,
        keyword
      });
  
      await res.json(response);
    } catch (err) {
      await res.json(err);
    }
  });

  router.get(`/${API}/shopping`, async (req, res) => {
    try {
      const { dept,arr,deptDate,adults,child } = req.query;
     
      const response = await amadeus.shopping.flightOffersSearch.get({
      
            originLocationCode:dept,
            destinationLocationCode:arr,
            departureDate:deptDate,
            adults:adults,
            children:child
      }
      );
  
      await res.json(JSON.parse(response.body));
    } catch (err) {
      await res.json(err);
    }
  });
module.exports = router;