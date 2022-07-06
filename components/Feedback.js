/*
*/
import Axios from 'axios';

const url="https://damp-springs-29329.herokuapp.com";

/*
  The post must send an object with three fields: email, key, value
  email is used to specify the developer. but it could be any string
  key is used as in AsyncStorage to identify the kind of data
  value is what you are storing under that key ...
  This is built so the entire class can use this for their apps.
*/
const sendFeedback = async (feedback) => {
    const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'erichu@brandeis.edu',
                           key:'explorer',
                           value:feedback,
                          });
    console.dir(response.data);
};

const getFeedback = async (saveFeedback) => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'erichu@brandeis.edu',key:'explorer'});
  console.log('got feedback:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await Axios.post(url+"/cloud/clear",{email:'erichu@brandeis.edu'});
};

export {sendFeedback,getFeedback,clearData};
