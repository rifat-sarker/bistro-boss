import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: add stripePromise
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading={"Payment"} subHeading={"Pay for eat"}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>  
    )
};

export default Payment;