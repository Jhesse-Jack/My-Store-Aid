import { useParams } from 'react-router-dom';
import SearchResults from './index';


export const getBranchResults = async () => {
    //   const myHeaders = new Headers({
    //     "content-type": "application/json",
    //     "X-El-Parah-Hash": "sjfvbkjwn382929dnjbd9292nsgskfn2343",
    //     "X-El-Parah-Client": "elp-test-app",
    //   });
    let finalResponse = {
      success: false,
      code: 0,
      msg: "There was a problem processing your request, please try again later",
      data: null,
    };
    try {
      const response = await fetch(
        "https://core-api-dev.mystoreaid.net/v1/client/react/branches",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-El-Parah-Hash": "sjfvbkjwn382929dnjbd9292nsgskfn2343",
            "X-El-Parah-Client": "elp-test-app",
          },
        }
      );
      console.log(response);
      const data = await response.json();
  
      if (response.status === 200) {
        finalResponse["success"] = true;
        finalResponse["data"] = data;
        return finalResponse;
      }
  
      if (response.status === 500) {
        finalResponse["msg"] =
          "There was a problem processing your request, please try again later";
        return finalResponse;
      }
    } catch (error) {
      console.log(error);
      return finalResponse;
    }
  };

  export const GetSalesMade = async () => {
    //   const myHeaders = new Headers({
    //     "content-type": "application/json",
    //     "X-El-Parah-Hash": "sjfvbkjwn382929dnjbd9292nsgskfn2343",
    //     "X-El-Parah-Client": "elp-test-app",
    //   });
    let finalResponse = {
      success: false,
      code: 0,
      msg: "There was a problem processing your request, please try again later",
      data: null,
    };
    //let branch_id = {nrow.id}
    //let branch_id = <SearchResults branch_id={branch_id}/>
    let branch_id = localStorage.getItem('id');
    console.log("sam",branch_id)
    try {
      const response = await fetch(
        `https://core-api-dev.mystoreaid.net/v1/client/react/branches/${branch_id}/sales`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-El-Parah-Hash": "sjfvbkjwn382929dnjbd9292nsgskfn2343",
            "X-El-Parah-Client": "elp-test-app",
          },
        }
      );
      console.log("Resp is")
      
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        finalResponse["success"] = true;
        finalResponse["data"] = data;
        return finalResponse;
      }
  
      if (response.status === 500) {
        finalResponse["msg"] =
          "There was a problem processing your request, please try again later";
        return finalResponse;
      }
    }
     catch (error) {
      console.log(error);
      return finalResponse;
    }
  };


  export const getSalesConstituents = async () => {
    let finalResponse = {
      success: false,
      code: 0,
      msg: "There was a problem processing your request, please try again later",
      data: null,
    };
    let branch_id = localStorage.getItem('id');
    let sale_id = localStorage.getItem('forsales');
    console.log("sam",branch_id)
    console.log("const",sale_id)
    try {
      const response = await fetch(
        `https://core-api-dev.mystoreaid.net/v1/client/react/branches/${branch_id}/sales/${sale_id}/sale_entries`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-El-Parah-Hash": "sjfvbkjwn382929dnjbd9292nsgskfn2343",
            "X-El-Parah-Client": "elp-test-app",
          },
        }
      );
      console.log("Resp is")
      
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        finalResponse["success"] = true;
        finalResponse["data"] = data;
        return finalResponse;
      }
  
      if (response.status === 500) {
        finalResponse["msg"] =
          "There was a problem processing your request, please try again later";
        return finalResponse;
      }
    }
     catch (error) {
      console.log(error);
      return finalResponse;
    }
  };