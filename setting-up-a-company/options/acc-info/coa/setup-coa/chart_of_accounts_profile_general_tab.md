---
title: The Chart of Accounts Profile - General Tab
---
<script type="text/javascript" language="JavaScript1.2" x-save-method="compute-relative" src="{{site.sc_baseurl}}/misc/ehlpdhtm.js"></script><script type="text/javascript" language="JavaScript1.2">
<!-- 
if( typeof( kadovFilePopupInit ) != 'function' ) kadovFilePopupInit = new Function();if( typeof( kadovTextPopupInit ) != 'function' ) kadovTextPopupInit = new Function();
 //-->
</script>
| Account Category | Account Type |
| Asset account | Accounts Receivable Control<br/><br/><br/>Inventory control<br/><br/><br/>Vendor Advances Control<br/><br/><br/>Bank<br/><br/><br/>Other |
| Liability account | Accounts Payable Control<br/><br/><br/>Customer Advances Control<br/><br/><br/>Bank<br/><br/><br/>Other |
| Revenue account | Other |
| Expense account | Other |
| Equity account | Other |

# The Chart of Accounts Profile - General Tab


Use the **General** tab of the **Chart of Accounts** profile to specify  the basic account details such as the account code and name, the parent  account, and the type of account.


**Account Code**
: Enter a unique alphanumeric code used to identify  the account. This code cannot be modified once the account is defined.  This is a mandatory field.
: ![]({{site.sc_baseurl}}/img/lens.gif) [COA  - General Information]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/general_information_coa.html)
: If you are using segmented accounts, enter the **Account Code** without the segment separators.  The segment separators are added automatically.
: ![]({{site.sc_baseurl}}/img/lens.gif)[Segmented  Chart of Accounts]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/segmented_chart_of_accounts.html)
: ![]({{site.sc_baseurl}}/img/lens.gif)[Segmented  Accounts]({{site.sc_baseurl}}/misc/segmented_accounts_segmented_coa.html)


**Account Description**
: Enter a suitable description for this account using  1 to 40 characters in this field. This is a mandatory field.
: ![]({{site.sc_baseurl}}/img/lens.gif) [COA  - General Information]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/general_information_coa.html)


**Parent Account Code**
: Enter the account number of the parent account.
: ![]({{site.sc_baseurl}}/img/lens.gif) [Parent  Account Number]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/parent_account_number.html)


**Parent Account Description**
: This field displays the name of the parent account  and cannot be edited.
: ![]({{site.sc_baseurl}}/img/lens.gif) [Parent  Account Number]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/parent_account_number.html)


**Posting Level**
: Select whether the account is general or detail.  This is a mandatory field.
: ![]({{site.sc_baseurl}}/img/lens.gif) [Type  of Account]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/type_of_account.html)


**Account Category**
: This information is auto-generated by **Everest**,  and displays whether the account is an Asset, Liability, Revenue, or Expense  account.


**Account Type**
: By default the account type for any new account  is ???Other???. This indicates that the chart of account is not a control  account. The user may opt to change the account type from ???Other??? by Selecting  either ?????Bank???  or any of the control account types for any account being defined in this  profile. Control accounts can be created only for the ???Detail??? type of  account. An account must be set up in the base currency to be associated  with a control account.


{:.note}
**The **Others**  tab is enabled when the **Account Type**  is set to **Bank** for an account.**
: The type of accounts displayed in the drop down  depends on the account category you select in the **Account 
 Code** field. Details of Account types for the corresponding Account  Category is mentioned in this [table](javascript:kadovTextPopup(this)){:id="a1"}<script type="text/javascript" language="JavaScript1.2"><!--
kadovTextPopupInit('a1');
//--></script>.


{:.note}
**You must manually link a Work in Progress  account to an Inventory type of account since no account type is defined  for a Work in Progress account. You can also have the same account defined  for Inventory and Work in Progress.**


**You can modify a control account type as long  as it is not used in a manual or system accounting entry, or in a posting  group.**


**Last Check Number**
: Enter the number of the last check that was issued  from the bank account. This field is enabled only if you select the Account  Type as Bank.
: ![]({{site.sc_baseurl}}/img/lens.gif) [Bank Account]({{site.sc_baseurl}}/options/acc-info/coa/chart-of-accounts-details/bank_account.html)


**Cash Flow Activity**
: This field displays the cash flow activity designation  for accounts used in the **Statement of 
 Cash Flows** report. A **Cash Flow****Activity** of **None**  is not included in the Statement of Cash Flows report and is only available  for Revenue and Expense Accounts.
: Select the cash flow activity type for the account.  ??The four  valid values are:
: ??? **Operating**  (Default for all Asset, Liability, and Equity accounts)
: ??? **Investing**
: ??? **Financing**
: ??? **None** (Default  for Revenue and Expense Accounts)


{:.note}
The **Cash Flow Activity** field  is disabled for accounts with an Account Type of **Bank**.
: The **Cash Flow Activity**  field can be updated at any time.


{:.note}
**Revenue and Expense accounts can be included  in any activity, but it is recommended that you set the **Cash 
 Flow** **Activity** type for  these accounts to **None**.**
: Use the **Cash Flow 
 Activity** profile screen to change the Cash Flow Activity designation  of multiple accounts at the same time.
: ![]({{site.sc_baseurl}}/img/lens.gif)[Cash Flow Activity  Profile]({{site.sc_baseurl}}/options/acc-info/coa/setup-coa/cash_flow_activity_profile.html)


{:.see_also}
See also
: [The  **Chart of Accounts** Profile]({{site.sc_baseurl}}/options/acc-info/coa/setup-coa/the_chart_of_accounts_profile.html)
