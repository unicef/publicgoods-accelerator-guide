---
sidebar_position: 1
---

# DPG Nomination Process

**_What if I have questions about a project on the registry?_**
If you have a question about a project on the registry, including if you have identified a DPG nominee as promising for potential pathfinding piloting and need to ensure that it is swiftly assessed against the DPG Standard, please reach out to nominations@digitalpublicgoods.net. 

_**What if a project is missing from the registry?**_
Projects can be added as nominees to the DPG Registry at any time via an open process. You can [You can nominate a DPG here.](https://digitalpublicgoods.net/nominate). 

Please check the [submission guide](https://digitalpublicgoods.net/submission-guide) in advance to know what information will be requested. If you do not have all of the information about a project you may still submit it. Please provide as much information as possible. Projects with more complete information will move more quickly through the vetting process.

_**What supporting documents or evidence can be used for each indicator?**_
_**Before nominating a Digital Public Good, take the eligibility questionnaire: https://digitalpublicgoods.net/eligibility/**_

## Submitting the full nomination process vs short nomination process: 

* At the time of the submission, if you have partial information, you can nominate, so the DPGA team can collect SDG relevance and Use of Approved Open Licenses. 
* DPGA Team prefers to get full information from someone working closely with the project to be able to get all the answers about the relation to the indicators. 
* DPGA team does a re-review process annually after the DPG is nominated, and crowd-sources the reviews on the registry. 

**To get the basic nomination (short nomination), you need provide information about:** 

1. Relevance of SDG 

2. Approved Open License 

_**After a full nomination is submitted, what happens?**_ 

1. It makes a pull request on the [https://github.com/DPGAlliance/publicgoods-candidates/pulls](https://github.com/DPGAlliance/publicgoods-candidates/pulls), publicly.  It will be triaged to the DPG pending review – start it by Adding nominee. 

2. Any feedback or comments are directly inputted into the github process, and an email is sent from the DPGA team to the DPG nominee. - There are 3 reviewers before the DPG is a successful nominated. 

3. Once you are successfully nominated, you will receive an email from the DPGA team. 

_**How long does it take?**_ Timeline varies based on the current pipeline of nominees, but the DGA technical team will review submissions as soon as possible.

## Additional Tips and Evidence/Documentation Required for DPG Nomination 

**To understand the full nomination process, check out these resources:** 

* _How to Nominate a Digital Public Good:_

   * [Approved Licenses for DPGs](https://github.com/unicef/publicgoods-candidates/blob/main/docs/licenses.md)

   * [Documentation Resources](https://github.com/unicef/publicgoods-candidates/blob/main/docs/help-center/documentation.md) 

   * [Best Practices Resources](https://github.com/unicef/publicgoods-candidates/blob/main/docs/help-center/best-practices.md) 

   * [Open Standards Resources](https://github.com/unicef/publicgoods-candidates/blob/main/docs/help-center/open-standards.md) 

   * [Data Privacy Resources](https://github.com/unicef/publicgoods-candidates/blob/main/docs/help-center/privacy.md)

*  **DPG Resources:** https://resources.digitalpublicgoods.net/ 

## Tips and Evidence Required For Each Indicator 

### 1. SDG Relevance
Check the DPG Standard for more information related to SDG relevance and accepted Open Source Licenses.

* Information: Make sure the website has enough information on the project and how it works. 

* In some instances, they do not meet the SDG relevance. Is there any evidence text or content to add to justify the SDG Relevance? 
   * _**Tip**_: Blog or articles published on impact towards SDGs and back it up with an explanation.

### 2. Open Licensing (Most Important):
* To become a DPG, firstly, ensure the digital solution is open source and operates with an open source license. 

* Does this follow the right licenses? [https://github.com/unicef/publicgoods-candidates/blob/main/docs/licenses.md](https://github.com/unicef/publicgoods-candidates/blob/main/docs/licenses.md)
   * _**Tip:**_ Provide a URL in the repo for example. 

* Provide an explicit URL link to the repository, specific application or project that has clear contributions - not the organization's repository.

   * _**Tip:**_: Instead of providing a link of github.com/unicef/, provide the specific URL of the project under the organization. 

   * _**Tip:**_:  They can provide more than 1 type of open source license (if it fits other categories, open content, open software) 

   * _**Tip:**_: OSI list (Software), Non-derivative (Content), Open Data Commons (Open Data) 

### 3. Is the project ownership clearly defined?:
If the project actually belongs to the organization, verify by looking at the website, and to what extent is the ownership is talked about by the organization (trademark and copyright information).


### 4. Platform Independence 
*  Those that make data available only on certain platforms pose a challenge. 
*  Does it depend on proprietary software? If so, it also needs to be compatible with open source. 
* _**Tip:**_: For example, it cannot heavily rely on backend proprietary software, even with a front end open source software. If this is the case, then they need to provide alternatives to open source backend.


### 5. Documentation: 

Refer to the [Help Center Documentation](https://github.com/unicef/publicgoods-candidates/blob/main/docs/help-center/documentation.md) 


* Overview – (Approximate duration to write/prepare: 5 minutes)

* Architectural Diagrams (the most important!) - (Approximate duration to write/prepare: 5 minutes)

* Technology Stack/Platform - (Approximate duration to write/prepare: 5 minutes) 

* Installation Guide – (Approximate duration to write/prepare: 2-3 hours)

* User Guide - (Approximate duration to write/prepare: 2-3 hours)

### 6. Is there non PII data and/or content?
* If you use or collect non PII data, how do you extract this?  In what format, JSON, Rest APIs, CSVs? 

* We want to understand if we can extract non-PII from the system in a non-proprietary process.

### 7. Privacy and applicable international and domestic laws? - Need more guidance & back & forth
* If it is already GDPR compliant, it helps to demonstrate the seriousness of privacy. It is the responsibility of the DPG to comply in the country of which they are deployed in.  
   * _**Tip:**_ You can use this: https://unctad.org/page/data-protection-and-privacy-legislation-worldwide to see what privacy laws exist in various countries. 

   * _**Tip:**_ For privacy templates, consider reaching out to a lawyer who understands compliance with the privacy laws in the applicable countries.

### 8. Open Standard
* There is a list of open standards. Please provide a link to validate this. [https://github.com/DPGAlliance/publicgoods-candidates/blob/main/docs/help-center/best-practices.md](https://github.com/DPGAlliance/publicgoods-candidates/blob/main/docs/help-center/best-practices.md)
   * _**Tip:**_ If they used a certain standard, there is documentation on a specific API to show they comply to the open standard.

### 9. Does the Project do no harm?
* **Takes steps to anticipate, prevent and do no harm?** Look at it related to privacy (what steps have they taken to secure data and security)
   * _**Tip:**_ Access control rights of data, i.e., data security, or data accessed only by those over the age of 18. And is the system only used by the employees of the organization?
   * _**Tip:**_ Have a disclaimer regarding protocols in place for security of data.

* **Data Privacy & Security** 
   * _**Tip:**_ (IT Procedures that the project has implemented) - If data is shared, there needs to be security and privacy of data collection. I.e, access control, encryption during distribution, using a certain open standard that can't be tampered with/tested in industry.
   * _**Tip:**_ Some projects don't have a privacy policy (this is how they disclose or manage a customer or client's data).

* **Collecting Content**  
   * Is there any inappropriate & illegal content?
   * _**Tip:**_ Provide a mechanism or something to detect inappropriate content, and what steps do you take to get rid of this content?

* **Protection from Harassment** 
   * What mechanisms are in place to protect underage users? 
   * _**Tip:**_ If there are users below 18, how do you protect these users?
   * _**Tip:**_  If users are attacked/abused/harassment, is there a code of conduct or community/contributing conduct and guidelines? If any abusive behaviour is detected, how are these messages handled by an administrator?

## Examples of DPG Nominations Application

1. [DHIS-2](https://digitalpublicgoods.net/registry/dhis2.html) - DHIS2 is a free, open-source, fully customizable platform for collecting, analyzing, visualizing, and sharing aggregate and individual-data for district-level, national, regional, and international system and program management in health, education, and other domains.

2. [Apache Fineract](https://digitalpublicgoods.net/registry/apache-fineract.html) Fineract provides a reliable, robust, and affordable solution for entrepreneurs, financial institutions, and service providers to offer financial services to the world’s 2 billion underbanked and unbanked.

You can find more examples of DPG Nominations by visiting the [DPG Registry](https://digitalpublicgoods.net/registry/) and clicking on the ***DPG Badge*** next to the recognized DPGs.
