import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const currencies = [
    "USD",
    "INR",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "SGD",
    "AED",
    "NZD",
    "PKR",
    "BDT",
  ];

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");
  const [rate, setRate] = useState("");
  const [loading, setLoading] = useState(false);

  const convertCurrency = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://open.er-api.com/v6/latest/${from}`
      );

      const exchangeRate = res.data.rates[to];

      setRate(exchangeRate);

      const converted = (amount * exchangeRate).toFixed(2);

      setResult(converted);
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [from, to]);

  const swapCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Currency Converter
        </h1>

        <label>Amount</label>

        <input
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>From</label>

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {currencies.map((cur) => (
                <option key={cur}>{cur}</option>
              ))}
            </select>
          </div>

          <button
            onClick={swapCurrencies}
            style={{
              marginTop: "25px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            ⇄
          </button>

          <div style={{ flex: 1 }}>
            <label>To</label>

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {currencies.map((cur) => (
                <option key={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertCurrency}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        {result && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h2>
              {amount} {from} = {result} {to}
            </h2>

            <p>
              1 {from} = {rate} {to}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;