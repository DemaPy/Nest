import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { getOne } from "./api/getOne";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const Resume = () => {
  const [secret, setSecret] = useState("");
  const mutate = useMutation({
    mutationFn: getOne,
    onSuccess: (data) => {
      setSecret(data.client_secret);
    },
  });
  return (
    <div>
      <h1>Resume</h1>
      <button
        onClick={() => {
          mutate.mutate();
        }}
        style={{
          display: "flex",
          gap: "12px",
          borderRadius: "4px",
          border: "1px solid #acacac",
        }}
      >
        Buy resume
      </button>
      {secret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: secret,
          }}
        >
          <CheckoutForm secret={secret} />
        </Elements>
      )}
    </div>
  );
};

export default Resume;
