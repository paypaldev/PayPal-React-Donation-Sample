import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "./DonateForm";
import DonateCardText from "./DonateCardText";
import DonateCard from "./DonateCard";

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        components: "buttons",
        currency: "USD",
        enableFunding: "venmo",
      }}
    >
      <DonateCard>
        <DonateCardText />
        <DonateForm />
      </DonateCard>
    </PayPalScriptProvider>
  );
}
