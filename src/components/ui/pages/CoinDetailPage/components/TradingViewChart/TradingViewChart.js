// TradingViewWidget.js

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CoinService } from '../../../../../../services/coinService/coin.service';
import './tradingview.scss';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const {id} = useParams()

  const {data, isLoading} = useQuery(['coins symbol info', id], () => CoinService.getSymbol(id))



  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (!isLoading) {
          if (data?.data) {
            console.log(data)
            if (document.getElementById('tradingview_ba2dd') && 'TradingView' in window) {
              new window.TradingView.widget({
                autosize: true,
                symbol: `${data.data[0].symbol.toUpperCase()}USDT`,
                interval: "D",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "ru",
                toolbar_bg: "#0E1119",
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: "tradingview_ba2dd"
              });
            }
          }
        }
      }
    },
    [data]
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ba2dd' />
    </div>
  );
}
