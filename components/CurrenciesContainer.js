import { useState } from "react";

const CurrenciesContainer = (props) => {
    const { currency } = props;
    const [dateRate, setDateRate] = useState("1d");
    return (
        <div className="currencies">
            {currency.map((currency) => {
                const priceChange = currency[dateRate].price_change_pct * 100;
                const priceChangePercent = currency[dateRate].price_change_pct;
                return (
                    <div key={currency.id} className="card">
                        <div className="head">
                            <div className="title">
                                <img src={currency.logo_url} />

                                <h3>{currency.name}</h3>
                            </div>
                            <h5 className="symbol">{currency.symbol}</h5>
                        </div>

                        <div className="body"></div>
                        <div className="footer">
                            <h2>{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(currency.price)}</h2>
                            <h5
                                className={
                                    priceChangePercent > 0 ? "up" : "down"
                                }
                            >
                                {priceChange.toFixed(2)}%
                            </h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CurrenciesContainer;
