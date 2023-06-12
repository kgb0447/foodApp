/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SignIn from "./sign_in/SignIn";
import { useParams } from "react-router-dom";
import SignUp from "./sign_up/SignUp";
import useFetch from "../../../utils/hooks/useFetch";
import { USER_API } from "../../../const/commonService";

export default function EntryFormV2() {
  const { id } = useParams();
  console.log("id:", id);
  const [users, setUsers] = useState([]);
  const { data } = useFetch(USER_API);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
    return () => {
      setUsers([]);
    };
  }, []);

  return <div>{id === ":signup" ? <SignUp /> : <SignIn />}</div>;
}
