import React, { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";

const appID = process.env.REACT_APP_ID;
const region = process.env.REACT_APP_REGION;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const wid = process.env.REACT_APP_W1;

function LiveChat() {
  const [load, setLoad] = useState(true);



  useEffect(() => {
    setLoad(true);
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then((response) => {
      console.log("Initialization completed successfully");
      //You can now call login function.
      let uid = localStorage.getItem("cc-uid");
      if (uid === null) {
        // create new user
        const uid = "user" + new Date().getSeconds().toString();
        const customer = new window.CometChatWidget.CometChat.User(uid);
        customer.setName(uid);

        window.CometChatWidget.createOrUpdateUser(customer).then((customer) => {
          // Proceed with user login
          window.CometChatWidget.login({
            uid: uid,
          }).then((loggedInUser) => {
            localStorage.setItem("cc-uid", loggedInUser.uid);
            // Proceed with launching your Chat Widget
            window.CometChatWidget.launch({
              widgetID: wid,
              roundedCorners: "true",
              docked: "true",
              height: "300px",
              width: "400px",
              defaultID: process.env.REACT_APP_AGENT_ID, //default UID (user) or GUID (group) to show,
              defaultType: "user", //user or group
            });
            setLoad(false);
          });
        });
      } else {
        window.CometChatWidget.login({
          uid: uid,
        }).then((customer) => {
          window.CometChatWidget.launch({
            widgetID: wid,
            roundedCorners: "true",
            docked: "true",
            height: "300px",
            width: "400px",
            defaultID: process.env.REACT_APP_AGENT_ID, //default UID (user) or GUID (group) to show,
            defaultType: "user", //user or group
          });
          setLoad(false);
        });
      }
    });

    return () => {
      window.CometChatWidget.logout().then((response) => {
        document
          .querySelectorAll("#cometchat__widget")
          .forEach((el) => el.remove());
      });
    };
  }, []);

  if (load) {
    return (
      <div className="container">
        <MDSpinner />
      </div>
    );
  }

  return <div className="App"></div>;
};

export default LiveChat;
