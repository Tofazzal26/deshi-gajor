"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const session = useSession();
  const router = useRouter();
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const donate = parseInt(amount);

  useEffect(() => {
    if (typeof donate !== "number") {
      return setErrorMessage("Please write a valid amount");
    }

    const payment = async () => {
      try {
        const resp = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-payment-intent`,
          { donate }
        );
        setClientSecret(resp?.data?.clientSecret);
      } catch (error) {
        toast.error("Failed to create payment intent.");
      }
    };

    if (donate > 0) payment();
  }, [donate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const card = elements.getElement(CardElement);
    if (card == null) {
      setLoading(false);
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
      setLoading(false);
      return;
    } else {
      setErrorMessage("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: "anonymous@gmail.com",
            name: "anonymous",
          },
        },
      });

    if (confirmError) {
      setLoading(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: session?.data?.user?.email || "anonymous@gmail.com",
        donate: donate,
        transaction: paymentIntent.id,
        status: "pending",
      };
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddPayment`,
        payment
      );
      if (resp?.status === 200) {
        router.push("/api/israel");
        toast.success(
          `Payment successful. Transaction ID: ${paymentIntent.id}`
        );
      }
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 border-[1px] border-[#e5e5e5] p-4"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <div className="text-right mt-4">
        <button
          type="submit"
          className={`px-3 text-[15px] py-[6px] rounded-md text-white cursor-pointer ${
            loading || !stripe || !clientSecret
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600"
          }`}
          disabled={loading || !stripe || !clientSecret}
        >
          {loading ? "Processing..." : "Pay"}
        </button>

        <p className="text-red-600 font-semibold">{errorMessage}</p>
        {transactionId && (
          <p className="text-green-600 font-semibold">
            Your transaction id: {transactionId}
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
