import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { verify } from "../../../services/auth/api/verify";

export const VerifyEmail = () => {
  const [seachParams] = useSearchParams();
  const token = seachParams.get("token");

  const handleVerify = async (token: string) => {
    await verify(token);
    location.href = "/dashboard";
  };

  useEffect(() => {
    if (!token) return;
    handleVerify(token);
  }, [token]);

  return (
    <div>
      <h2>Email verification</h2>
      {!token && 'You should have received an email with a link to verify your account.'}
    </div>
  );
};
