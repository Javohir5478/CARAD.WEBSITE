   import axios from "axios";

export const getCars =  () => {
  return async (dispatch) => {
    try {
    let {data}  = await  axios.get(
        "https://carapi.pythonanywhere.com/car/api/?format=json"
        );
            console.log(data);
        dispatch ( {
        type: 'get-posts',
        payload: data,
    });

    } catch {
    console.log(console.error())
    }
};
};