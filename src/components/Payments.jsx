import React, { useState } from "react";

export default function Payments() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const pay = () => {
    if (!amount) return;
    setNote(`Demo only: no payment of ₹${amount} was processed. Connect a PSP (e.g. Razorpay/Stripe) to go live.`);
  };

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: "16px 0" }}>
      <h3>Payments</h3>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (INR)"
             inputMode="numeric" style={{ padding: 8, width: 160 }} />
      <button onClick={pay} style={{ padding: 8, marginLeft: 8 }}>Pay (demo)</button>
      {note && <p style={{ fontSize: 13, color: "#666" }}>{note}</p>}
    </section>
  );
}
