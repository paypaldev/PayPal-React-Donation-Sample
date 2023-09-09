import AmountPicker from "./AmountPicker";
import DonateButton from "./DonateButton";

import { useState } from "react";

export default function DonateForm() {
  // ** State for the `proudctId` selected in the `AmountPicker` component  The amount is set onChange in the `AmountPicker` fieldset **
  const [productId, setProductId] = useState("donation_5");

  return (
    <form className="DonateForm">
      <AmountPicker onAmountChange={(e) => setProductId(e.target.value)} />
      <div className=" w-full">
        <DonateButton productId={productId} />
      </div>
    </form>
  );
}
