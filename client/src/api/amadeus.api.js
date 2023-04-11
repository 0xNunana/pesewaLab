import axios from "axios";

const { CancelToken } = axios;
const search = (input) => {
  if (input) {
    try {
      const source = CancelToken.source();
      const request = axios.get(`/api/search?keyword=${input}`, {
        cancelToken: source.token,
      });
      return {
        async process(callback) {
          request.then((response) => {
            const json = response.data;

            if (json && json.data) {
              callback(
                json.data.map(({ address }) => {
                  return {
                    city: address.cityName,
                    code: address.cityCode,
                    country: address.countryName,
                    state: address.stateCode,
                  };
                })
              );
            }
          });
        },
        cancel() {
          source.cancel();
        },
      };
    } catch (error) {
      console.error(error);
    }
  }
  return {
    process() {
      return [];
    },
    cancel() {},
  };
};
// const flight = ({first,second,depart}) => {
//     if () {
//       try {
//         const source = CancelToken.source();
//         const request = axios.get(`/api/search?keyword=${input}`, {
//           cancelToken: source.token,
//         });
//         return {
//           async process(callback) {
//             request.then((response) => {
//               const json = response.data;
  
//               if (json && json.data) {
//                 callback(
//                   json.data.map(({ address }) => {
//                     return {
//                       city: address.cityName,
//                       code: address.cityCode,
//                       country: address.countryName,
//                       state: address.stateCode,
//                     };
//                   })
//                 );
//               }
//             });
//           },
//           cancel() {
//             source.cancel();
//           },
//         };
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     return {
//       process() {
//         return [];
//       },
//       cancel() {},
//     };
//   };

const flight = async({first,second,depart})=>{
    
  try{
    const request= await axios.get(
    `api/shopping/flight-offers?originLocationCode=${first}&destinationLocationCode=${second}&departureDate=${depart}&adults=1&max=5`,
      
    );
    const json = request.data;

    if (json && json.data) {
      return json.data;
    }
  }catch(error){
    console.log(error)
  }
}

export { search ,flight};