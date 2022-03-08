---
sidebar_position: 4
---

# Project Management & Documentation

Now that the startup knows which open source license to obtain, let's help set the startup for open source success!

## Is your project source code already on a git-hosting platform?

Below is taken as an example from UNICEF Innovation Fund: Standards and best practices for starting and managing your open-source repository, and other related open-source documentation.

This guide is meant to serve as an introduction to using a GitHub account for hosting and maintaining code, as well as provide a few best practices for open source documentation of code and other technological documents.

To help you meet the aforementioned requirements, you can find here guidance on (1) setting up, managing and maintaining open repositories, as well as (2) best practices for developing in the open (or, engineering in an open, collaborative environment).

## Open-source Repositories

To meet the Innovation Fund requirements, you will need to create an accessible open source repositories on GitHub/GitLab/Bitbucket that track changes. For other digital content outside of code, you are free to use other repositories (thingiverse, instructables) or centralized ones (such as your own website / domain).

At minimum, we are asking you to setup git, ([Please follow steps here](https://help.github.com/articles/set-up-git/)) and create a github repository ([Follow steps here](https://help.github.com/articles/create-a-repo/)).

**Your repositories must:** 

* Provide open source code

* Publish documentation

* Provide design files that include photos / drawings, written instructions, other explanations for product setup / installation

* Provide design schematics / explanations using standard components and open source tools, when possible

* When distributing software and hardware, label versions, and define open and closed source tools included

**Please include in the project format on GitHub the following elements:**
* A quick project overview (short description of the project’s goals & background)

* Info about the directory structure (brief description of what’s there, including aliases, commands)

* Info about how developers can get started developing (how to clone the repository, create a branch, install, copy a database)

* Code promotion workflow (this might be dependent on the license you choose, but outline if people should fork your repository, create feature branches, or commit to master branch? 

* Dev environment: outline development environment, and how to get code to various places in the environments

* Links to more information and project details including documentation, BOM, or schematics

* Test coverage metrics and process for running test coverage that can be reproduced

** For documentation stacks please include: **

* **Hardware / Mechanical Diagrams Dimensions** for enclosures, mechanical subsystems, off-the-shelf materials / parts in their design. 

    * For 2D models, preferred document type: vector graphics ﬁle, with dimension prints, DXF, AI, etc. 

    * Materials used. Fabrication & installation methods described, including lessons learned and troubleshooting guidelines.

* **Schematics & Circuit Diagrams Symbolic** diagrams of electronic circuitry and all the components, including parts list / BOM. 

    * Preferred document type is any sort of image (PDF, BMP, GIF, PNG, etc). Often paired with matching layout diagram. 

    * Layout Diagrams of the physical layout of electronic circuitry, including the placement of parts in their system, the PCB copper prints (if they have any custom circuits), and a drill ﬁle. This is often paired with a schematic (2). 

* **Parts List (BOM):** A list of what parts are used, where to get them, part numbers, cost, etc. Ideally with data sheets, where to get them locally if possible (generic/easy to get items if possible), notes and speciﬁcations. 

    * Standard format is a text ﬁle for BOM (bill of materials). 

* **Core/Firmware:** If they have custom code, The source code runs on a microcontroller/microprocessor often in C, Assembly. In some cases, the code may be the design of the chip hardware itself. Preferred format for distribution: text ﬁle with source code in it, as well as compiled ‘binary’ for the chip. 

* **Software/API:** The source code for the application layer, including well-documented instructions for setting up the multiple components, deploying docker images, Any drivers necessary for the chipsets should be included here as well. This should all be linked to on github. 

## Developing in the Open – Project Management
The following guidelines are resources for best practices during engineering and project development that can allow for the community and volunteers to understand and contribute to your project. 

1. [**Keep a changelog**](https://keepachangelog.com/en/1.0.0/) to help stakeholders and community members keep up with your project without having to read every commit. 

2. [**Semantic versioning**](https://semver.org/) is a low-bandwidth way to quickly communicate to stakeholders (the community as well as API clients) what has changed in your project. 

3. [**Open a pull request.**](https://github.com/blog/1124-how-we-use-pull-requests-to-build-github) As described on the link, pull requests are a great way to start a conversation about a feature, so starting one as soon as possible is good practice (even before you are finished with the code!). Your team can comment on the feature as it evolves, instead of providing all their feedback at the very end. Aside from being a great development practice, it can also be a great way to work in the open and co-build with your community.
  * Examples:
    * An [unmerged WIP PR](https://github.com/processing/p5.js/pull/1287) (work in progress pull request) from p5.js - while it was never merged, it still documented a useful conversation about how to move forward with a feature. 
    * A [merged WIP PR](https://github.com/exercism/exercism.io/pull/2760) from exercism.io - a conversation with multiple participants. 

4. [**Avoid jargon**](https://www.plainlanguage.gov/guidelines/words/avoid-jargon/) - Going beyond necessary technical terms to write in jargon can alienate potential contributors, especially those who may have valuable expertise to contribute to your project but may be unfamiliar with some aspect of it. 

5. [**Continuous integration:**](https://www.martinfowler.com/articles/continuousIntegration.html) Services like [Travis CI](https://travis-ci.org/) (which we recommend for code testing) or [Circle CI](https://circleci.com/) are free for open-source projects, and can be a great way to reduce friction for new contributors. 

6. [**Write a great README**](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3) - this is very important for the community to be able to understand what your repository contains and how to navigate through it 
   * Example: [CBoard's README](https://github.com/shayc/cboard#readme)

7. [**Establish a code of conduct**](https://opensource.guide/code-of-conduct/) to foster healthy and constructive community behavior. 

8. Empathizing with contributors: Understand where potential contributors are coming from, and what kind of ways they can contribute to your project. Here are some ideas: 
   * [Exercism's "Finding Your Way" guide](https://github.com/exercism/docs/blob/master/finding-your-way.md)

   * [p5.js's "Getting Started" guide](https://github.com/processing/p5.js/wiki/Development#getting-started)

   * [Mozilla's volunteering page](https://www.mozilla.org/en-US/contribute/)

9. Other resources for developing in the open

   * [Request for Commits podcast](https://changelog.com/rfc) - Really good podcast about open-source sustainability and the "human side" of open-source development.

   * [opensource.guide](https://opensource.guide/) is a set of guides by GitHub on starting an open source project, finding users for it, leadership and governance, and more.

   * [The Case For Open-Source Design: Can Design By Committee Work?](https://www.smashingmagazine.com/2010/09/the-case-for-open-source-design-can-design-by-committee-work/) is a particularly good critique of the role of design in open-source.

## Documentation

The following technical resources can be found [here](https://unicef.github.io/inventory/documentation/):

* Code of Conducts

* Contributing guidelines

* Developer documentation

* FAQs

* READMEs

* User documentation

## Project management

The following technical resources can be found [here](https://unicef.github.io/inventory/project-management/):

* Project boards

* Issue Templates

* Outreach reading list

### Continuous Integration and health checks
* Testing (e.g. frameworks and automation)

* Code base health and overall maintainability

* [Continuous Integration (C.I.) ](https://unicef.github.io/inventory/dev-tools/)

### Community outreach
* Developer blog

* Social media

* Upstream collaboration

* Website strategy