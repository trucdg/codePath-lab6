import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CoinDetail() {
  let params = useParams();

  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
          API_KEY
      );

      const description = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
          API_KEY
      );

      const detailsJson = await details.json();
      const descripJson = await description.json();

      setFullDetails({
        numbers: detailsJson.DISPLAY,
        textData: descripJson.Data,
      });

      console.log(fullDetails);
    };

    getCoinDetail().catch(console.error);
  }, [dummyButton2]);

  const dummyButton2 = <button>dummyButton2</button>;

  return (
    <>
      {fullDetails && (
        <div>
          <h1>{fullDetails.textData[params.symbol].FullName}</h1>
          <img
            className="images"
            src={`https://www.cryptocompare.com${
              fullDetails.numbers[params.symbol].USD.IMAGEURL
            }`}
            alt={`Small icon for ${params.symbol} crypto coin`}
          />

          <div>{fullDetails.textData[params.symbol].Description}</div>
          <br></br>
          <div>
            This coin was built with the algorithm
            {fullDetails.textData[params.symbol].Algorithm}
          </div>

          <table>
            <tbody>
              <tr>
                <th>Launch Date </th>
                <td>{fullDetails.textData[params.symbol].AssetLaunchDate}</td>
              </tr>
              <tr>
                <th>Website </th>
                <td>{fullDetails.textData[params.symbol].AssetWebsiteUrl}</td>
              </tr>
              <tr>
                <th>Whitepaper </th>
                <td>
                  {fullDetails.textData[params.symbol].AssetWhitepaperUrl}
                </td>
              </tr>
              <tr>
                <th>Monetary Symbol</th>
                <td>{fullDetails.textData[params.symbol].Symbol}</td>
              </tr>
              <tr>
                <th>Market</th>
                <td>{fullDetails.numbers[params.symbol].USD.MARKET}</td>
              </tr>
              <tr>
                <th>Last Transaction </th>
                <td>
                  {fullDetails.numbers[params.symbol].USD.CONVERSIONLASTUPDATE}
                </td>
              </tr>
              <tr>
                <th>Last Transaction Value</th>
                <td>{fullDetails.numbers[params.symbol].USD.LASTVOLUMETO}</td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>{fullDetails.numbers[params.symbol].USD.VOLUMEDAYTO}</td>
              </tr>
              <tr>
                <th>Today's Open Price </th>
                <td>{fullDetails.numbers[params.symbol].USD.PRICE}</td>
              </tr>
              <tr>
                <th>Highest Price during the Day </th>
                <td>{fullDetails.numbers[params.symbol].USD.HIGHDAY}</td>
              </tr>
              <tr>
                <th>Lowest Price during the Day </th>
                <td>{fullDetails.numbers[params.symbol].USD.LOWDAY}</td>
              </tr>
              <tr>
                <th>Change from Previous Day </th>
                <td>{fullDetails.numbers[params.symbol].USD.CHANGEPCTDAY}</td>
              </tr>
              <tr>
                <th>Market Cap </th>
                <td>{fullDetails.numbers[params.symbol].USD.MKTCAP}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CoinDetail;
