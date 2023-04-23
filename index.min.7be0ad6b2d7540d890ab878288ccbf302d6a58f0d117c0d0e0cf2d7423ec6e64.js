var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch({preset:"score",cache:!0,doc:{id:"id",field:["title","description","content"],store:["href","title","description"]}}),n=[{id:0,href:"/docs/intro/install-repository/",title:"Install Repository",description:"Instructions on how to install our DEB repository.",content:`\u003ch2 id="bootstrap"\u003eBootstrap\u003c/h2\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt -y install curl apt-transport-https gnupg2
curl 'https://keybase.io/mrstaker/pgp_keys.asc?fingerprint=C8FF9465DC43E057F5D592EEC190D4B4328516A1' | sudo apt-key add -
echo 'deb [arch=amd64] https://deb.staker.ltd stable main' | sudo tee /etc/apt/sources.list.d/staker.list
sudo apt update
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003en.b If Keybase doesn\u0026rsquo;t work (because it\u0026rsquo;s rate limited, for example), you can try our backup instructions:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt -y install curl apt-transport-https gnupg2
curl 'https://keys.openpgp.org/vks/v1/by-fingerprint/C8FF9465DC43E057F5D592EEC190D4B4328516A1' | sudo apt-key add -
echo 'deb [arch=amd64] https://deb.staker.ltd stable main' | sudo tee /etc/apt/sources.list.d/staker.list
sudo apt update
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="install-repository-package"\u003eInstall repository package\u003c/h2\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt -y install staker-repo
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThe repository package bundles the following:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eA GPG keyring to be used for further signature checks.\u003c/li\u003e
\u003cli\u003eAn updated \u003ccode\u003e/etc/apt/sources.list.d/staker.list\u003c/code\u003e file to use that GPG keyring.\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eAll of the packages published in this repository have a dependency on our staker-repo package. You must use the updated \u003ccode\u003estaker.list\u003c/code\u003e file to receive signature updates as our keyring\u0026rsquo;s purpose is to provide automatic signing key rotation.\u003c/p\u003e
\u003cp\u003eFollowing your installation of \u003ccode\u003estaker-repo\u003c/code\u003e, your \u003ccode\u003estaker.list\u003c/code\u003e configuration file must look like:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003edeb [arch=amd64 signed-by=/usr/share/keyrings/staker-keyring.gpg] https://deb.staker.ltd stable main
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="cleanup-distribution-keyring"\u003eCleanup distribution keyring\u003c/h2\u003e
\u003cp\u003eNow that the repository has been successfully installed and the signatures are checked via the bundled keyring, you can safely remove the GPG key imported during the bootstrap procedure.\u003c/p\u003e
\u003cp\u003eDouble check that you\u0026rsquo;re removing my signing key imported from Keybase i.e the fingerprint must match.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt-key del C8FF9465DC43E057F5D592EEC190D4B4328516A1
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="maintenance"\u003eMaintenance\u003c/h2\u003e
\u003cp\u003eYou must update \u003ccode\u003estaker-repo\u003c/code\u003e at least once per year to make sure you have up to date release keys.\u003c/p\u003e
`},{id:1,href:"/docs/intro/install-elrond/",title:"Install Elrond Packages",description:"Instructions on how to install our Elrond packages.",content:`\u003ch2 id="elrond-networks"\u003eElrond Networks\u003c/h2\u003e
\u003cp\u003eWe produce three flavours for our packages:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ccode\u003eelrond-main\u003c/code\u003e - targeting Elrond Mainnet.\u003c/li\u003e
\u003cli\u003e\u003ccode\u003eelrond-test\u003c/code\u003e - targeting Elrond Testnet.\u003c/li\u003e
\u003cli\u003e\u003ccode\u003eelrond-dev\u003c/code\u003e - targeting Elrond Devnet.\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThese packages are built using our \u003ca href="https://github.com/mr-staker/build-pkg/tree/main/recipes/elrond"\u003eelrond build-pkg\u003c/a\u003e build environment, then signed and published by our \u003ca href="https://github.com/mr-staker/repo-mgr"\u003erepo-mgr\u003c/a\u003e tool.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003e# installs our latest elrond-test package
sudo apt install elrond-test

# check which versions are available
apt-cache madison elrond-test
elrond-test |     1.1.51 | https://deb.staker.ltd stable/main amd64 Packages
elrond-test |     1.1.50 | https://deb.staker.ltd stable/main amd64 Packages

# install older version because $reasons
sudo apt install elrond-test=1.1.50
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eWe don\u0026rsquo;t plan to hold more than the last three versions for any particular build, but in general, you should be keeping up, otherwise, there\u0026rsquo;s a risk of your node getting slashed.\u003c/p\u003e
\u003ch2 id="supported-distributions"\u003eSupported distributions\u003c/h2\u003e
\u003cp\u003eThese are binaries built by \u003ca href="https://golang.org/"\u003eGo\u003c/a\u003e, so in general they should work pretty well across multiple Linux/amd64 distributions. Our builds should work well on Debian and Ubuntu. These are built and tested under Ubuntu 20.04. The original builds have been done under Ubuntu 18.04 and they worked on Ubuntu 20.04 without any modifications, for example.\u003c/p\u003e
\u003cp\u003eThe only actual limitation compatibility wise is our use of \u003ccode\u003exz\u003c/code\u003e compression for the deb packages themselves. To the best of our knowledge, none of the actively maintained (LTS) versions of Debian and Ubuntu have compatibility issues with this compression scheme. This should be true for any Debian/Ubuntu derrivatie based on the last two LTS versions.\u003c/p\u003e
\u003ch2 id="configure-the-installation"\u003eConfigure the installation\u003c/h2\u003e
\u003cp\u003eWhile the packages can be manually configured, they have been built for the purpose of being plugged into a proper automation pipeline. For this purpose, we also provide a \u003ca href="https://github.com/mr-staker/elrond-cookbook"\u003eChef/Cinc cookbook\u003c/a\u003e.\u003c/p\u003e
`},{id:2,href:"/docs/intro/install-zfs/",title:"Install ZFS Packages",description:"Instructions on how to install our ZFS packages.",content:`\u003ch2 id="zfs"\u003eZFS\u003c/h2\u003e
\u003cp\u003eZFS is a centrepiece on our storage design. BtrFS is not there yet. Our packages provide support for OpenZFS v2 as our supported Ubuntu 20.04 lacks any v2 support i.e the packages which are part of the distribution repositories are still the old 0.8.x ZFS on Linux, so they are missing the improvements made since ZoL merged with OpenZFS.\u003c/p\u003e
\u003cp\u003eThe package builds themselves are driven by the OpenZFS make targets, so our changes include:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eProperly set package metadata, including defined package dependencies as the native build task converts them from rpm and it loses important information.\u003c/li\u003e
\u003cli\u003ePackage signatures as part of our publishing process.\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThe installation is straightforward:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt install zfs zfs-dkms
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003ccode\u003ezfs-dkms\u003c/code\u003e builds the actual kernel module for the ZFS driver. Note that on the first run, the \u003ccode\u003ezfs\u003c/code\u003e module is not automatically loaded, therefore, it needs to be manually loaded:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo modprobe zfs
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="supported-distributions"\u003eSupported distributions\u003c/h2\u003e
\u003cp\u003eOur builds were made under Ubuntu 20.04. Support for other related Debian-derrivatives may be limited in case of glibc mismatch. This is built against libc6 2.31-0ubuntu9.3.\u003c/p\u003e
\u003cp\u003eThis is not an issue with the kernel modules as this is delivered as dkms package and the modules are built on each machine based on the installed kernel. This may be an issue for the supporting tooling (zpool, zfs, etc).\u003c/p\u003e
`},{id:3,href:"/docs/intro/install-miscellaneous-packages/",title:"Install Miscellaneous Packages",description:"Instructions on how to install our miscellaneous packages.",content:`\u003ch2 id="createrepo"\u003ecreaterepo\u003c/h2\u003e
\u003cp\u003ecreaterepo is our build of \u003ca href="https://github.com/rpm-software-management/createrepo_c"\u003ecreaterepo_c\u003c/a\u003e made specifically for Ubuntu 20.04. This opens up the possibility for managing our rpm repository without the need of containers or virtual machines.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt install createrepo

# system and version info
cat /etc/issue
Ubuntu 20.04.2 LTS \\n \\l

createrepo -V
Version: 0.17.1 (Features: LegacyWeakdeps )
\u003c/code\u003e\u003c/pre\u003e
`},{id:4,href:"/docs/intro/uninstall-repository/",title:"Uninstall Repository",description:"Instructions on how to uninstall our DEB repository.",content:`\u003ch2 id="procedure"\u003eProcedure\u003c/h2\u003e
\u003cp\u003eWe\u0026rsquo;re sorry to see you go. Please provide feedback if you ran into difficulties and this is the reason for removing our package builds.\u003c/p\u003e
\u003cp\u003eWe make it easy for you to remove everything:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003esudo apt autoremove --purge staker-repo
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThat\u0026rsquo;s it. It removes all our packages, GPG keyring, and configuration files. It won\u0026rsquo;t remove the configuration files which you created as we have no way of tracking that.\u003c/p\u003e
`},{id:5,href:"/docs/advanced-topics/signing-key-rotation/",title:"Signing Key Rotation",description:"Describes our signing key rotation.",content:`\u003ch2 id="rotation-policy"\u003eRotation policy\u003c/h2\u003e
\u003cp\u003eOur keys have a cryptoperiod of 3 years which is the maximum recommended by \u003ca href="https://csrc.nist.gov/csrc/media/publications/sp/800-57-part-1/rev-3/archive/2012-07-10/documents/draft_sp800-57-part1-rev3_may2011.pdf"\u003eNIST SP 800-57\u003c/a\u003e. This is significantly shorter than most signing keys used by distribution/software maintainers, hence our use of bundled keyring via the \u003ccode\u003estaker-repo\u003c/code\u003e package to support key rotation.\u003c/p\u003e
\u003cp\u003eIn practical terms a key isn\u0026rsquo;t used to sign releases for the full 3 years period as the key rotation needs transition periods. Therefore, the key lifecycle is as follows:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e1 year in seed mode. The key is created, but it is not actively signing/validating releases. The purpose is to provide some overlap with the key which is currently used for signing and validation (i.e the active key) and allow this key to be installed before being actively used.\u003c/li\u003e
\u003cli\u003e1 year in active (sign/validate) mode. This is the key which is currently used to sign releases.\u003c/li\u003e
\u003cli\u003e1 year in validate mode. This is a previously used active key which can still verify signatures, but no new releases are produced using this key.\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThe only exception to this rule is the 1st key ever used for signing releases which shall be in active mode for 2 years. There\u0026rsquo;s no key to fulfil the seed mode for the 1st year.\u003c/p\u003e
\u003ch2 id="rotation-procedure"\u003eRotation procedure\u003c/h2\u003e
\u003cp\u003eYou need to update the \u003ccode\u003estaker-repo\u003c/code\u003e package at least once per year in order to get a keyring which contains the signing key that shall be active for future releases. Should you fail to do so, you must follow the repository installation procedure and go through the bootstrap steps again to fix your installation of this repository.\u003c/p\u003e
`},{id:6,href:"/docs/advanced-topics/package-signature-validation/",title:"Package Signature Validation",description:"Instructions for how to check our package signatures.",content:`\u003ch2 id="the-problem-with-package-signatures"\u003eThe problem with package signatures\u003c/h2\u003e
\u003cp\u003eDebian and derivatives (including Ubuntu) do a poor job (read: none) at checking the signatures of the packages themselves. \u003ca href="https://wiki.debian.org/SecureApt"\u003eSecureApt\u003c/a\u003e is only signing the repository manifest and the repository manifest contains hashes for all of the packages which are part of a release.\u003c/p\u003e
\u003cp\u003eNonetheles, we sign all of the packages which we include in our repository using \u003ca href="https://manpages.debian.org/buster/dpkg-sig/dpkg-sig.1.en.html"\u003edpkg-sig\u003c/a\u003e. So, for the paranoids out there (which is factory settings for seasoned security professionals), there\u0026rsquo;s a digital signature to indicate that the package build happened under our control.\u003c/p\u003e
\u003ch2 id="import-key-in-users-keyring"\u003eImport key in user\u0026rsquo;s keyring\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003edpkg-sig\u003c/code\u003e is unable to check the signature against a non-standard keyring i.e \u003ccode\u003e--gpgoptions\u003c/code\u003e doesn\u0026rsquo;t work in conjuction with \u003ccode\u003e--verify\u003c/code\u003e. Therefore a user\u0026rsquo;s keyring must be used. Note that this user doesn\u0026rsquo;t need to be privileged or have sudo access.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003e# from keybase
curl 'https://keybase.io/mrstaker/pgp_keys.asc?fingerprint=C8FF9465DC43E057F5D592EEC190D4B4328516A1' | gpg --import

# the public key for C8FF9465DC43E057F5D592EEC190D4B4328516A1
# is also available as PEM-format export
# you must install staker-repo for this though
gpg --import /etc/staker-repo/release-signing-key-2023.gpg.pem
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="check-package-signature"\u003eCheck package signature\u003c/h2\u003e
\u003cpre\u003e\u003ccode class="language-bash"\u003ecurl -LO https://deb.staker.ltd/pool/main/s/staker-repo/staker-repo_23.04.01_amd64.deb
dpkg-sig --verify staker-repo_23.04.01_amd64.deb
Processing staker-repo_23.04.01_amd64.deb...
GOODSIG _gpgbuilder C8FF9465DC43E057F5D592EEC190D4B4328516A1 1681169439
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThe output of the \u003ccode\u003edpkg-sig --verfiy\u003c/code\u003e is structured as follows:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ccode\u003eGOODSIG\u003c/code\u003e - indicates the obvious.\u003c/li\u003e
\u003cli\u003e\u003ccode\u003e_gpgbuilder\u003c/code\u003e - signed by the \u003ccode\u003ebuilder\u003c/code\u003e role (i.e subtract the _gpg prefix).\u003c/li\u003e
\u003cli\u003e\u003ccode\u003eC8FF9465DC43E057F5D592EEC190D4B4328516A1\u003c/code\u003e - the signing key fingerprint.\u003c/li\u003e
\u003cli\u003e\u003ccode\u003e1681169439\u003c/code\u003e - signature timestamp (UNIX time).\u003c/li\u003e
\u003c/ul\u003e
`},{id:7,href:"/docs/advanced-topics/infrastructure/",title:"Infrastructure",description:"Describes our repository infrastructure.",content:`\u003ch2 id="design"\u003eDesign\u003c/h2\u003e
\u003cp\u003eThe DEB repositories themselves are nothing fancy. All they require is a basic HTTP server to be delivered.\u003c/p\u003e
\u003cp\u003eOur repositories are published as Cloudflare pages and delivered via Cloudflare. This allows us to provide them at no cost for the community besides our use cases.\u003c/p\u003e
\u003ch2 id="signing-key-delivery"\u003eSigning key delivery\u003c/h2\u003e
\u003cp\u003eOur signing keys are delivered initially from Keybase i.e for repository bootstrap procedure. This is by design. If the signing key and the repository are delivered by the same server (which is a common example for quite a few software vendors), then the trust can not be established as the chain of custody may be broken. A compromised server could simply deliver a compromised signing key as well as a set of compromised packages signed with the key delivered by the same server. Essentially, all of the systems that use TOFU (no, not the fake cheese, but Trust On First Use) are subjected to this limitation as the supply chain can be attacked in this initial phase if not enough care is exercised.\u003c/p\u003e
\u003cp\u003eWhile we deliver a keyring via our \u003ccode\u003estaker-repo\u003c/code\u003e package, the release itself is signed via a key initially delivered though Keybase. Furthermore, all of our DEB packages are also signed. You can check the signatures of individual packages as well, albeit, this isn\u0026rsquo;t a trivial exercise.\u003c/p\u003e
`},{id:8,href:"/docs/advanced-topics/",title:"Advanced Topics",description:"Advanced Topics documentation.",content:""},{id:9,href:"/docs/intro/",title:"Intro",description:"Intro documentation.",content:""},{id:10,href:"/docs/",title:"Docs",description:"Docs Doks.",content:""}];e.add(n),userinput.addEventListener("input",s,!0),suggestions.addEventListener("click",o,!0);function s(){var n,i=this.value,s=e.search(i,5),o=suggestions.childNodes,r=0,c=s.length;for(suggestions.classList.remove("d-none"),s.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.href,t.textContent=e.title,d.textContent=e.description,suggestions.appendChild(n)});o.length>c;)suggestions.removeChild(o[r])}function o(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})()