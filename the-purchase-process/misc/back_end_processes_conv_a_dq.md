---
title: Back End Processes - Convert an Existing Debit Quote to a Debit Order
---

# Back End Processes - Convert an Existing Debit Quote to a Debit Order


When a debit quote is converted to a debit order, the following back end processes occur:

- The debit quote is converted to a debit order with the status ‘open’. It can no longer be retrieved as a quote.
- The sequence number of the debit order is automatically generated by the system.



![]({{site.pp_baseurl}}/img/lens.gif)[Document Number]({{site.pp_baseurl}}/return-proc/doc-prof/contents/document-information/document_number_pr.html)

- The total quantity **On** **Debit** for each item increases by quantity of the item ordered.
- The available quantity of the item decreases by the quantity requested.

