---
sidebar_position: 1
---

# How do I design and deliver technical assistance to DPGs?
Whether the startup is new to open source or already creates open source products, it is important to understand if the startup has fully considered what it means to adopt open source and what technical support the startup needs. This section will cover:

1. [Should the startup adopt open source?](#should-the-startup-adopt-open-source) and
2. [Conduct a Needs Assessment on Startup Support](#conduct-a-needs-assessment-on-startup-support)


## Should the startup adopt open source?

A startup will need to consider how they license and share their work. **There are three main things that are important to know about -- licensing, repositories, and community building.** More details will be covered further in the guide.

### 1. Open Source Licensing

In order for a product to be considered open source, the product must be publicly released under an [Open Source License](https://opensource.org/licenses/). An Open Source license communicates to others that the software, hardware, or content is open source and can be freely used, modified, and shared.

The license text must be included as a new file in the root directory of your public repository. Often a license is also posted in a prominent place on the website for a particular product or in the download of a software package or hardware design package.

Licensing may seem like a technical detail and it is easy to overlook, but the type of license you choose can have wide-reaching and lasting effects on your company, so you must choose wisely. It is also important to decide at this stage whether you would like your license to be [copyleft](https://opensource.com/resources/what-is-copyleft), which ensures that downstream derivatives stay open source; or permissive, which allows downstream derivatives to be redistributed as closed source.  The guide will talk about the options for different licenses to explore: software, hardware and content.

### 2. Repositories
**Do they have an existing repository for collaboration?**

Open source projects often rely on many different people to contribute to the project. This collaboration can take many different forms, but often, an open source project will have a public repository, which is a directory or storage space where projects live that anyone can access, which is sometimes shortened to “repo.” Common platforms for software collaboration are GitHub, GitLab, Gogs, Gitea, Bitbucket, Sourceforge, OpenForge in India, CSDN in China, and iHub in Kenya.

Resource: Interested in trying out open source for yourself, you can try [making your own GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo) or a [GitLab project](https://docs.gitlab.com/ee/user/project/working_with_projects.html#create-a-project).

**Does the repository have public documentation?**

In order for others to participate, a project needs thoughtful documentation in public view. Depending on the size of a project, this could mean one or many of the following things:

* `README` file placed near the license text file
* Dedicated documentation website (e.g. `docs.example.org`)
* Public Q&A site

Effective technical documentation enables others to become contributors. These let others follow in your footsteps and move more quickly to meaningful contribution, instead of figuring out how to set up a project in your configuration. The technical documentation is instructional and should outline what a path to a successful contribution is. Additionally, when the documentation is published in public repositories, documentation becomes a more open project task for outside contribution and discussion.

> **Q: How do you make sure that contributions are relevant, helpful, and in working order?**

> _A: There is usually an approvals process where a collaborator can submit a contribution and other project leaders can decide which contributions are added to the final product.  Learn more about governance models in the next section of the guide._

### 3. Community building
It is a good idea for a startup to spend time interacting with an existing open source community. This builds a stronger understanding of experiences in collaborative open source projects. Ideally, the startup should select an open source product, component, or tool already used by the startup. When selecting a project, also look for good documentation and guidance for newcomers.

More established open source projects also have public fora for others to raise feedback and discuss about the project. These can look like web forums, discussion mailing lists, IRC or Matrix chat rooms, recurring team video meetings, Slack or Mattermost servers, and more.

Here are some examples of open source forums:
* [Fedora Linux Discussion](https://discussion.fedoraproject.org/): a certified DPG
* [OpenStreetMap forum](https://forum.openstreetmap.org/)
* [Drupal forum](https://www.drupal.org/forum)
* [Mozilla forum](https://www.mozilla.org/en-US/about/forums/)
* [React forum](https://discuss.reactjs.org/)
* [Discourse forum](https://meta.discourse.org/)
* [phpBB forum](https://www.phpbb.com/community/)
* [D3.js forum](https://groups.google.com/forum/#!forum/d3-js)

_**Resource: See [this CHAOSS metric on Chat Platform Inclusivity](https://chaoss.community/metric-chat-platform-inclusivity/).**_


## Conduct a needs assessment on startup support
Before designing or supporting the startup's open source journey and becoming a DPG, you will need to conduct a needs assessment on what support they will need.  This needs assessment includes, but not limited to:

1. Company's Problem Statement
2. Company's Solution Statement
3. Piloting plan/experiment summary
4. Piloting challenges
5. Business Model/Scalability after pilot
6. Product and User Development – what needs to be changed/fixed for the product to qualify as beta DPG?
7. Company performance to date
8. Team skills/expertise - what other areas of expertise are missing on the team and why are they crucial for the pilot?
9. Business Strategy (business model, user/customer acquisition, potential CO scale/LTA, Potential for public funds, potential for private funds)
10. Technical Support Plan Summary

_**Resource: The detailed [needs assessment template can be found here](https://docs.google.com/document/d/1nZ9YsVc-ENKXzoMP2KEQjHIc-k_X_1-N/edit).**_
