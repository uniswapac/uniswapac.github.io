(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[82],{1567:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var a={messages:{Accept:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438",Acknowledge:"\u0412\u0438\u0437\u043d\u0430\u0439\u0442\u0435",Allow:"\u0414\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u0438","Allow in your wallet":"\u0414\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u0438 \u0432 \u0433\u0430\u043c\u0430\u043d\u0446\u0456","Allow {symbol} first":["\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0434\u043e\u0437\u0432\u043e\u043b\u044c\u0442\u0435 ",["symbol"]],"Allowance pending":"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u041f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0446\u0435\u0439 \u043e\u0431\u043c\u0456\u043d \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0430\u043c \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043a\u043e\u0432\u0437\u0430\u043d\u043d\u044f. \u042f\u043a\u0449\u043e \u0446\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0446\u044e\u0454, \u043c\u043e\u0436\u043b\u0438\u0432\u043e, \u0456\u0441\u043d\u0443\u0454 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c, \u044f\u043a\u0438\u043c \u0432\u0438 \u0442\u043e\u0440\u0433\u0443\u0454\u0442\u0435. \u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u043a\u0435\u043d\u0456\u0432 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0456 \u0437 Uniswap V3.","Approval pending":"\u041e\u0447\u0456\u043a\u0443\u0454 \u0441\u0445\u0432\u0430\u043b\u0435\u043d\u043d\u044f",Approve:"\u0421\u0445\u0432\u0430\u043b\u0438\u0442\u0438","Approve in your wallet":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u0443 \u0441\u0432\u043e\u0454\u043c\u0443 \u0433\u0430\u043c\u0430\u043d\u0446\u0456","Approve {symbol} first":["\u0421\u043f\u0435\u0440\u0448\u0443 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u044c\u0442\u0435 ",["symbol"]],Auto:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e","Auto Router":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440",Close:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438","Confirm in your wallet":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u044c\u0442\u0435 \u0432 \u0433\u0430\u043c\u0430\u043d\u0446\u0456","Confirm swap":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u044c\u0442\u0435 \u0437\u0430\u043c\u0456\u043d\u0443","Connect wallet":"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u0433\u0430\u043c\u0430\u043d\u0435\u0446\u044c","Connect wallet to swap":"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0456\u0442\u044c \u0433\u0430\u043c\u0430\u043d\u0435\u0446\u044c \u0434\u043b\u044f \u043e\u0431\u043c\u0456\u043d\u0443","Connecting\u2026":"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f\u2026","Convert {0} to {1}":["\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0456\u0442\u044c ",["0"]," \u0432 ",["1"]],"Disconnect wallet":"\u0412\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u0433\u0430\u043c\u0430\u043d\u0435\u0446\u044c",Dismiss:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438","Enter an amount":"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0443\u043c\u0443","Error details":"\u0414\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438","Error fetching trade":"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0442\u043e\u0440\u0433\u0456\u0432\u043b\u0456","Fetching best price\u2026":"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u043e\u0457 \u0446\u0456\u043d\u0438\u2026",For:"\u0414\u043b\u044f","High price impact":"\u0412\u0438\u0441\u043e\u043a\u0438\u0439 \u0432\u043f\u043b\u0438\u0432 \u043d\u0430 \u0446\u0456\u043d\u0443","High slippage":"\u0412\u0438\u0441\u043e\u043a\u0435 \u043a\u043e\u0432\u0437\u0430\u043d\u043d\u044f","High slippage increases the risk of price movement":"\u0412\u0438\u0441\u043e\u043a\u0435 \u043a\u043e\u0432\u0437\u0430\u043d\u043d\u044f \u0437\u0431\u0456\u043b\u044c\u0448\u0443\u0454 \u0440\u0438\u0437\u0438\u043a \u0440\u0443\u0445\u0443 \u0446\u0456\u043d\u0438","I don't have a wallet":"\u0423 \u043c\u0435\u043d\u0435 \u043d\u0435\u043c\u0430\u0454 \u0433\u0430\u043c\u0430\u043d\u0446\u044f","Insufficient liquidity in the pool for your trade":"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044f \u043b\u0456\u043a\u0432\u0456\u0434\u043d\u0456\u0441\u0442\u044c \u0443 \u043f\u0443\u043b\u0456 \u0434\u043b\u044f \u0432\u0430\u0448\u043e\u0457 \u0442\u043e\u0440\u0433\u0456\u0432\u043b\u0456","Insufficient {0} balance":["\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u0456\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 ",["0"]],"Invalid recipient":"\u041d\u0435\u0434\u0456\u0439\u0441\u043d\u0438\u0439 \u043e\u0434\u0435\u0440\u0436\u0443\u0432\u0430\u0447","Liquidity provider fee":"\u041a\u043e\u043c\u0456\u0441\u0456\u044f \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430 \u043b\u0456\u043a\u0432\u0456\u0434\u043d\u043e\u0441\u0442\u0456",Max:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c","Max slippage":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0435 \u043a\u043e\u0432\u0437\u0430\u043d\u043d\u044f","Maximum sent":"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0445","Minimum received":"\u041c\u0456\u043d\u0456\u043c\u0443\u043c \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u0438\u0445","Missing dependencies":"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c","No results found.":"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.","No tokens are available on this network. Please switch to another network.":"\u0423 \u0446\u0456\u0439 \u043c\u0435\u0440\u0435\u0436\u0456 \u043d\u0435\u043c\u0430\u0454 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043c\u0430\u0440\u043a\u0435\u0440\u0456\u0432. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 \u0456\u043d\u0448\u0443 \u043c\u0435\u0440\u0435\u0436\u0443.",OFF:"\u0412\u0418\u041c\u041a",ON:"\u0423\u0412\u0406\u041c\u041a","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["\u0412\u0438\u0445\u0456\u0434 \u043e\u0446\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f. \u0412\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u0442\u0435 \u0449\u043e\u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0435 ",["0"]," ",["1"]," , \u0430\u0431\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u0430."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["\u0412\u0438\u0445\u0456\u0434 \u043e\u0446\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f. \u0412\u0438 \u043d\u0430\u0434\u0456\u0448\u043b\u0435\u0442\u0435 \u0449\u043e\u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0435 ",["0"]," ",["1"]," , \u0430\u0431\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u0430."],"Please enter a valid slippage %":"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0438\u0439 % \u043f\u0440\u043e\u043c\u0430\u0445\u0443","Powered by the Uniswap protocol":"\u041f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 Uniswap","Price impact":"\u0412\u043f\u043b\u0438\u0432 \u043d\u0430 \u0446\u0456\u043d\u0443","Price updated":"\u0426\u0456\u043d\u0430 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0430","Recent transactions":"\u041e\u0441\u0442\u0430\u043d\u043d\u0456 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","Reload the page":"\u041f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443",Reset:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438","Review swap":"\u041e\u0431\u043c\u0456\u043d \u043e\u0433\u043b\u044f\u0434\u0443","Search by token name or address":"\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e \u0430\u0431\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u044e \u0442\u043e\u043a\u0435\u043d\u0430","Select a token":"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u043e\u043a\u0435\u043d",Settings:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f","Slippage tolerance":"\u0422\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043f\u0440\u043e\u043a\u043e\u0432\u0437\u0443\u0432\u0430\u043d\u043d\u044f","Something went wrong.":"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.",Swap:"\u041e\u0431\u043c\u0456\u043d","Swap confirmed":"\u041e\u0431\u043c\u0456\u043d \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e","Swap details":"\u041e\u0431\u043c\u0456\u043d \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438","Swap failed: {0}":["\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434\u043a\u0430\u0447\u043a\u0438: ",["0"]],"Swap pending":"\u041e\u0431\u043c\u0456\u043d \u043e\u0447\u0456\u043a\u0443\u0454 \u043d\u0430 \u0440\u043e\u0437\u0433\u043b\u044f\u0434","Swap summary":"\u041f\u0456\u0434\u0441\u0443\u043c\u043e\u043a \u0437\u0430\u043c\u0456\u043d\u0438",Switch:"\u041f\u0435\u0440\u0435\u043c\u0438\u043a\u0430\u0447","Switch network":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u043c\u0435\u0440\u0435\u0436\u0443","Switch network in your wallet":"\u0417\u043c\u0456\u043d\u0456\u0442\u044c \u043c\u0435\u0440\u0435\u0436\u0443 \u0432 \u0433\u0430\u043c\u0430\u043d\u0446\u0456","Switching network":"\u041a\u043e\u043c\u0443\u0442\u0430\u0446\u0456\u0439\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"\u0406\u043d\u0432\u0430\u0440\u0456\u0430\u043d\u0442 Uniswap x * y = k \u043d\u0435 \u0431\u0443\u0432 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u0438\u0439 \u0432 \u043e\u0431\u043c\u0456\u043d\u0456. \u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0446\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u043e\u0434\u0438\u043d \u0456\u0437 \u0442\u043e\u043a\u0435\u043d\u0456\u0432, \u044f\u043a\u0438\u0439 \u0432\u0438 \u043c\u0456\u043d\u044f\u0454\u0442\u0435, \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0443 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0443 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456.","The input token cannot be transferred. There may be an issue with the input token.":"\u0412\u0445\u0456\u0434\u043d\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0437 \u0432\u0445\u0456\u0434\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c.","The output token cannot be transferred. There may be an issue with the output token.":"\u0412\u0438\u0445\u0456\u0434\u043d\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0437 \u0432\u0438\u0445\u0456\u0434\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u0412\u0438\u0445\u0456\u0434\u043d\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443 \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0437 \u0432\u0438\u0445\u0456\u0434\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435: \u043a\u043e\u043c\u0456\u0441\u0456\u044f \u0437\u0430 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u0439 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u043a\u0435\u043d\u0456\u0432 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0430 \u0437 Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044e, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u0435\u0440\u043c\u0456\u043d \u043c\u0438\u043d\u0443\u0432. \u0423\u043f\u0435\u0432\u043d\u0456\u0442\u044c\u0441\u044f \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e \u0442\u0435\u0440\u043c\u0456\u043d \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u043d\u0435 \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u0426\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043d\u0435 \u0431\u0443\u0434\u0435 \u0443\u0441\u043f\u0456\u0448\u043d\u043e\u044e \u0447\u0435\u0440\u0435\u0437 \u0440\u0443\u0445 \u0446\u0456\u043d\u0438. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043f\u0440\u043e\u043a\u043e\u0432\u0437\u0443\u0432\u0430\u043d\u043d\u044f. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435: \u043a\u043e\u043c\u0456\u0441\u0456\u044f \u0437\u0430 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u0439 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u043a\u0435\u043d\u0456\u0432 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0430 \u0437 Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"\u0426\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u043d\u0435 \u0431\u0443\u0434\u0435 \u0443\u0441\u043f\u0456\u0448\u043d\u043e\u044e \u0430\u043d\u0456 \u0447\u0435\u0440\u0435\u0437 \u0440\u0443\u0445 \u0446\u0456\u043d\u0438, \u0430\u043d\u0456 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0456\u0441\u0456\u044e \u0437\u0430 \u043f\u0435\u0440\u0435\u043a\u0430\u0437. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043f\u0440\u043e\u043a\u043e\u0432\u0437\u0443\u0432\u0430\u043d\u043d\u044f.","Transaction confirmed":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u0430","Transaction deadline":"\u041a\u0456\u043d\u0446\u0435\u0432\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","Transaction pending":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u043e\u0447\u0456\u043a\u0443\u0454 \u043d\u0430 \u0440\u043e\u0437\u0433\u043b\u044f\u0434","Transaction rejected.":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044e \u0432\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043e.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043a\u043e\u0432\u0437\u0430\u043d\u043d\u044f.<0/>\u041f\u0420\u0418\u041c\u0406\u0422\u041a\u0410. \u041a\u043e\u043c\u0456\u0441\u0456\u044f \u0437\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0442\u0430 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u043c\u0430\u0440\u043a\u0435\u0440\u0456\u0432 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0430 \u0437 Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"\u041d\u0435\u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0446\u0456\u043d\u0438\u0442\u0438 \u0433\u0430\u0437 \u0434\u043b\u044f \u043e\u0431\u043c\u0456\u043d\u0443.","Unexpected issue with estimating the gas. Please try again.":"\u041d\u0435\u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0437 \u043e\u0446\u0456\u043d\u043a\u043e\u044e \u0433\u0430\u0437\u0443. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430",["0"],". \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0442\u043d\u0456\u0441\u0442\u044c \u0434\u043e \u043f\u0440\u043e\u043a\u043e\u0432\u0437\u0443\u0432\u0430\u043d\u043d\u044f. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435: \u043a\u043e\u043c\u0456\u0441\u0456\u044f \u0437\u0430 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u0439 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u043a\u0435\u043d\u0456\u0432 \u043d\u0435\u0441\u0443\u043c\u0456\u0441\u043d\u0430 \u0437 Uniswap V3."],"Unsupported network - switch to another to trade":"\u041d\u0435\u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430 - \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 \u0456\u043d\u0448\u0443 \u0434\u043b\u044f \u0442\u043e\u0440\u0433\u0456\u0432\u043b\u0456","Unwrap confirmed":"\u0420\u043e\u0437\u0433\u043e\u0440\u0442\u0430\u043d\u043d\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e","Unwrap pending":"\u041e\u0447\u0456\u043a\u0443\u0454 \u0440\u043e\u0437\u0433\u043e\u0440\u0442\u0430\u043d\u043d\u044f","View on Etherscan":"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u043d\u0430 Etherscan","Your transaction will revert if it has been pending for longer than this period of time.":"\u0412\u0430\u0448\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u0430, \u044f\u043a\u0449\u043e \u0432\u043e\u043d\u0430 \u0431\u0443\u043b\u0430 \u0432 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u0456 \u0434\u043e\u0432\u0448\u0435, \u043d\u0456\u0436 \u0446\u0435\u0439 \u043f\u0435\u0440\u0456\u043e\u0434 \u0447\u0430\u0441\u0443.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"\u0412\u0430\u0448\u0443 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044e \u0431\u0443\u0434\u0435 \u0441\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u043e, \u044f\u043a\u0449\u043e \u0446\u0456\u043d\u0430 \u0437\u043c\u0456\u043d\u0438\u0442\u044c\u0441\u044f \u0431\u0456\u043b\u044c\u0448 \u043d\u0456\u0436 \u043d\u0430 \u0446\u0435\u0439 \u0432\u0456\u0434\u0441\u043e\u0442\u043e\u043a.",minutes:"\u0445\u0432\u0438\u043b\u0438\u043d","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," \u043a\u043e\u043c\u0456\u0441\u0456\u044f"],"{min}m {sec}s":[["min"],"\u043c ",["sec"],"\u0441"],"{sec}s":[["sec"],"\u0441"]}}}}]);
//# sourceMappingURL=82.09d430f8.chunk.js.map