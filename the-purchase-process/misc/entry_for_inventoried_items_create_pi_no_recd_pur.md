---
title: Entry for Inventoried Items - No Items Received
---

# Entry for Inventoried Items - No Items Received


When you create a purchase invoice and no quantity is received on the  invoice, the following entries are made in a system Purchase Journal:


| Account | Path | Debit/<br/><br/><br/>Credit | Amount |
| Accounts Payable Account | The account specified in the **Accounts <br/> Payable** field (path: **File**  > **Setup** > **Accounting**  > **Posting Group** profile) of  **Vendor Posting Group** type.<br/><br/><br/>![]({{site.pp_baseurl}}/img/lens.gif) [Defaults  - Accounting]({{site.sc_chm}}/the-company-creation-wizard/accounting/accounting_defaults_setupco.html) | Credit | Total amount of the document (including recoverable  and non-recoverable portion of tax) |
| Accrued Purchases Account | The account specified in the **Accrued <br/> Purchases** field (path: **File**  > **Setup** > **Accounting**  > **Posting Group** profile) of  **Vendor Posting Group** type.<br/><br/><br/>![]({{site.pp_baseurl}}/img/lens.gif) [Defaults  - Accounting]({{site.sc_chm}}/the-company-creation-wizard/accounting/accounting_defaults_setupco.html) | Debit | Invoiced amount (including non-recoverable portion of  tax) |
| Tax Component Account (the asset account for Value  Added Tax recoverable in tax component in the purchase tax code) | The account selected for Tax Account Code in the Tax  Components profile (path: **File**  > **Setup** > **Accounting**  > **Taxes** > **Tax <br/> Components** > **Options**  > **Edit** > **In New Window** > **Purchase**  tab). | Debit | Amount of recoverable tax |



![]({{site.pp_baseurl}}/img/note.gif)If a negative quantity is included in the Invoiced column,  an accounting entry will be created for the net amount.


{:.see_also}
See also
: [Entry  for Inventoried Items - Items Received]({{site.pp_baseurl}}/misc/entry_for_inventoried_items_create_pi_qty_recd_pur.html)
: [Accounting  Entries - Create a Purchase Invoice]({{site.pp_baseurl}}/purc-proc/pis/create-pi/create-new-pi/accounting_entries_create_a_purchase_invoice_pur.html)
: [Default  Accounts for Purchase Transactions]({{site.pp_baseurl}}/misc/default_accounts_for_purchase_transactions.html)
: [Hierarchical  Order for Inventory Posting Group]({{site.bp_chm}}/misc/hierarchical_order_for_inventory_posting_group_doc_flow_control_misc_other2_tab.html)
