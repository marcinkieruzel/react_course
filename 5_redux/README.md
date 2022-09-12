# Bank simulation

Lets simulate the bank app. Bank collects clients. Clients can take out loans and make deposits. Lets assume the percentage of loans is 5% per 5 seconds ( sorry :( ) and the percantage of deposits is 2% per 5 seconds (not too bad).


1. Create slices for bank balance and client balance. 
2. We assume that each client has just one loan and can increse its amount (take another loan). The same with deposits. 
3. Now calculate everything. Each 5 seconds add due amount to deposits. The same with loans (subtract due amount).
4. How does this affect the bank balance? Try to recalculate the balance.