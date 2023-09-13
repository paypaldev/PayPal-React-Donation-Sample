import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "./DonateForm";
import DonationCardText from "./DonationCardText";
import DonationCard from "./DonationCard";

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        components: "buttons",
        currency: "USD",
      }}
    >
      <DonationCard>
        <DonationCardText />
        <DonateForm />
      </DonationCard>
    </PayPalScriptProvider>
  );
}
