---
layout: post
title: How to Set Up a Personal VPN on macOS, or Goddamnit I Can't Believe This Is the Sort of Thing We Have to Write These Days
tags: 
- howto
---

*Thorough disclaimer: I am not a security researcher. I am a grad student in the humanities who studies technical systems. I have a general understanding of what I'm talking about here but I'm far from an expert. Throughout I try to link to folks who know a lot more than I do, so that you can see critiques of this process and judge for yourself if/how you might want to implement some of these systems. In essence: caveat emptor.*

*Also if you just want to skip to the tutorial section, <a href="#vpn1">click here</a>.*

By now, you've no doubt heard that our Congress [sold our browsing histories down the river](https://www.nytimes.com/2017/03/29/opinion/how-the-republicans-sold-your-privacy-to-internet-providers.html), and a rule that would have prevented ISPs from selling off our data to advertisers will no longer go into effect. Outrage around this is warranted though darkly amusing, in that we as consumers and citizens have not in fact lost any rights, but rather it's been revealed that we never had certain rights to begin with. But this isn't a thinkpiece about What This All Means: it means trouble, it means reduced privacy and security, it means that one more aspect of our lives on the internet is further commodified. 

But you knew that already! You're here because one of the first things that folks seemed to say after the repeal was that [you should get a VPN](https://www.nytimes.com/2017/03/29/technology/personaltech/what-the-repeal-of-online-privacy-protections-means-for-you.html). A "virtual private network," so the swirl of info went, would protect you from your insidious ISP. Immediately, a counterswirl, much from folks in computer security world, rose up and said ["Hey, maybe don't get a VPN, or at least never pay a company for one?"](https://gist.github.com/joepie91/5a9909939e6ce7d09e29) So what's a human to do? 

This is a guide that tries to help you sort through these contradictory sets of information, figure out if you even *want* a VPN (also what a VPN actually...is?), and then set up a personal one that's reasonably secure, or at least more secure than a shady one you found to help you watch the BBC. It doesn't assume any real technical knowhow, but it's written mostly to folks in the DH-adjacent world who have the time to fiddle with setting up servers (honestly though I'm talking like, a half hour to do all of this at most?), the marginal ability to Google for when things go wrong, and the internal peace the accept that this might fail utterly or not work in the way you might want it to work. 

## What's a VPN?

A virtual private network essentially tunnels your internet browsing activity from your local connection to a different one. Lots of folks who work at universities or companies might have VPNs that push their browsing activity to their institution's connection so that they can access certain servers and resources that they can't access at home (hi JStor!). You can also use a VPN to fool websites into thinking that you're somewhere that you're not—say, if you're outside the USA but you still want to watch Netflix. VPNs also (we might as well be frank) help obscure torrenting from your ISP, which doesn't make it any less illegal to download new episodes of *The Americans*, but makes it less likely that Comcast will send you a threatening letter. 

VPNs can be super useful for the reasons outlined above or, indeed, to obscure your browsing history from your immediate ISP so that they can't resell it or [intervene in it itself](https://www.eff.org/deeplinks/2014/11/verizon-x-uidh).[^1] But you might notice that this process really just shunts your browsing history off to a different (though maybe difficult to track down) location. VPNs don't actively scramble your actual *signals*—they just make the signals marginally more difficult to trace. This is also why security folks warn against commercial VPN services: none have been sufficiently vetted such that we know what *they're* doing with your data once it gets to their servers. For all we know, Private Internet Access and other VPN companies are selling off your browsing history just as much as Comcast. And we don't want to just replace one ISP for another. 

[^1]: Which between you and me is the reality I think is more likely: ISPs acquiring ad networks and serving targeted ads themselves on their own connections, thus bypassing the whole "having to sell it to anyone besides a subsidary of themselves" thing. 

## Why Would I Want A VPN?

Another phrase you might have seen floating around Twitter this week is "threat modeling." This is a thing we're supposed to be doing when considering what we do for privacy and security, and it's a more than intimidating phrase, I think. It's really a pretty benign concept: functionally just you being real with yourself about what the threats to your data really *are*, and then what level of vulnerability you're comfortable with. 

I try to phrase that last concern around "vulnerability" because I think it's more productive than "security" as a framework for thinking through these issues. No communicatons platform operates without some kind of vulnerability: openness and availability are the core ways that devices *work* in the first place. It stands to reason that if someone can communicate with you, then there is necessarily a vector through which someone else can attack you. So for me, threat modeling is more about you framing for yourself what trade-offs you're willing to accept in the name of continuing to use the internet effectively.

(For a more formal walkthrough of what threat modeling entails, [check out this article from the EFF](https://ssd.eff.org/en/module/introduction-threat-modeling).)

So: what is a threat model that might lead you to wanting to set up a VPN? You might want a VPN if: 

- You want to obscure your browsing history from your ISP, but are comfortable knowing that its contents might leak out in a different location, but one that is marginally more difficult to connect back to you than your current arrangement. 
- You frequently use insecure public Wi-fi networks and want to have the ability to funnel your activity through a connection you trust. 

Note that neither of these possibilities involve making your browsing activity *private*. For privacy, you're going to want to turn to different technologies, like [Tor](https://www.torproject.org/) (which is a whole 'nother ball of wax that I'm not going to get into here because I am *definitely* unqualified to offer pronouncements on it). But these technologies *can* help disarticulate your browsing activity from your immediate location, thus making it harder to match data to human for advertising purposes. 

## <span id="vpn1">How I Recommend Going About This</span>

There are plenty of commercial VPN options and I recommend none of them. As I wrote above, it's honestly better to just *not use a VPN at all* than to use one that you are not sure if you can trust. 

This tutorial will instead help you set up a suite of open source programs called [`streisand`](https://github.com/jlund/streisand) on a remote server that you control. `streisand` isn't one program, but rather a platform that automates all of the really hard stuff about setting up a VPN server for you, and then gives you easy instructions for connecting to it in a variety of ways. You can also then easily share these instructions with friends or family—and these instructions are so straightforward that I would be comfortable sharing them with even my least tech-savvy acquaintances. 

`streisand`'s documentation is honestly really good, so this tutorial is less a full walkthrough and more putting its core concepts into plain language. Its documentation assumes you know what the `git` command does or what an ssh key is: this tutorial doesn't! 

Note however that this tutorial is also pretty narrowly construed. I'm writing with the following assumptions: 

- You're using macOS or Linux. `streisand` doesn't work on Windows yet, although many of its individual components do. 
- You know the master root password to your computer, and your account had administrative access. So if you don't have full access to your computer (say, it's provided by your workplace), then this probably won't work for you. 
- That you're mildly acquainted with the terminal / command line, or at least know what those programs are. It's okay if you've never *used* the command line before, but just know that a lot of this tutorial takes place there. 

Finally: `streisand` is a new program to me too. I've been playing around with it for a week and it feels straightforward and easy to use, but I personally cannot judge whether or not it is sufficiently secure for *really* sensitive information. This is the active work of threat modeling: I'm willing to accept the possible vulnerabilities of one set up rather than those of another. So I'm *caveat emptor*-ing just as much as you might be right now!

### 1. Getting Your House in Order

First things first: you're going to want a server platform. I recommend [DigitalOcean](https://digitalocean.com). 

<img src="/assets/img/vpn-1.jpg"/>
<div class="caption">DigitalOcean</div>

There are lots of different server providers in this grand world of ours and they all do more or less the same thing: give you access to a computer, somewhere in an air-conditioned building in an anonymous suburb of New Jersey, running bare Linux and nothing else. And you can install whatever you want, more or less, on this computer. The whole "being in New Jersey" thing is actually what makes these server platforms valuable for our purposes: it's a location other than your home through which you can route your traffic. 

Now, you could use any of these other platforms. Many folks like [Amazon AWS](https://aws.amazon.com/), which is kind of the gold standard in server platforms. I don't recommend it for our purposes because: 1) AWS does *everything* and we don't need everything (i.e., I don't know what a "Hadoop framework" is and I don't think we need to be confused about it!); 2) AWS is less transparent about pricing than other platforms; and 3) I have a personal vendetta against Amazon as a company.

I like DigitalOcean because it's just servers, nothing more, and clearly priced. The lowest-end DO "droplet" (their #brand word for server) is $5/month, which is more than adequate, I've found, for running a small VPN.[^2]

[^2]: Yeah, you're gonna have to pay someone something, unfortunately. While in theory you could make a really effective VPN by setting up a Raspberry Pi in your own home, that wouldn't solve the whole "your ISP is spying on you" problem. (Although such a VPN would be really useful for when you're out and don't trust a café's connection.)

One of the great things about `streisand` is that it does a lot of the actual setting-up-a-server work for you, so there are only a few things you actually need to do in Digital Ocean's interface. After you've made an account and logged in, you'll want to do two things: 

#### a. Make an API token

`streisand` uses Digital Ocean's API to automate setting up the server. What's an API? "Application programming interface": essentially a grammar by which a web service, like Digital Ocean, allows third-party programs to access its data and control its operations. For example, a third-party Twitter client, like Tweetbot, relies on Twitter's API to function. API access is generally controlled by keys or tokens—passwords that let the main service (DigitalOcean) know that the application (`streisand`) is authorized to access it. So let's make one. 

Go to the API tab at the top of your screen: 

<img src="/assets/img/vpn-2.jpg"/>
<div class="caption">API Tab</div>

and click the "Generate New Token" button: 

<img src="/assets/img/vpn-3.jpg"/>
<div class="caption">Generate New Token</div>

Fill in whatever name you want, check both the "read" and "write" buttons, and then copy that token down. You'll need it when running `streisand`. 

#### b. Generate an ssh key

You're going to want some level of security on your server, otherwise anyone and their mother can log into it wherever. Passwords are too easily guessed, so what's the next level up in security?

Enter "ssh keys." An ssh key is a pair of files: a private and a public key. These two keys only like each other, as it were, so you can use them with `ssh` in place of a password. What we'll do here is generate an ssh key on your local computer, upload the public key to DigitalOcean, and then keep the private key secret and safe on your local computer. 

Click away from your web browser and open up your terminal program. Type in the following: 

``` bash
$ ssh-keygen -t rsa -b 4096
```

This instructs the `ssh-keygen` program built into your computer to generate a key with the *type* RSA (an encryption algorithm) and that's 4096 *bits*. 

It'll then return something like: 

``` bash
$ Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

You can ostensibly put the key anywhere on your hard drive but it's easier to just accept the defaults here. It'll also prompt you if you want to include a passphrase as an extra layer of security. I don't, but that's up to you. 

You did it! Now we want to add the *public key* file to your DigitalOcean account. Enter this command: 

``` bash
$ cat ~/.ssh/id_rsa.pub
```

And copy *exactly* what it pops out. (You don't have to copy any trailing spaces at the end.) Now go back over to your browser and go to the settings in your DigitalOcean account: 

<img src="/assets/img/vpn-4.jpg"/>
<div class="caption">Settings</div>

Click "security" in the left-hand bar and scroll down to the "Add SSH Key" button. Paste your public key in there and give it any name you want—just make sure to remember it!

Phew. That was actually about as hard as this all gets. Now we can actually *set up* `streisand` with all of these keys. 

### 2. Setting Up `streisand`

Again, the `streisand` documentation is actually relatively straightforward, so I'm going to focus instead on clarifying the more technical aspects of this set-up. Thankfully once you get the server itself running, `streisand` gives you plain language instructions for accesing the VPN itself. 

#### a. Pre-requistes

Some prerequistes: you'll need to install a few command line programs. Annoyingly, the first thing we'll want to do is install a command line program that lets you install command line programs (computer folks are nothing if not obtuse sometimes). On macOS, the best one is called `homebrew`, and you can install it by copying this command into your terminal and hitting "enter": 

``` bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then we want to install a program called `git`, which does *many* things, but in this case lets us copy the `streisand` files locally. 

``` bash
$ brew install git
```

Now we have to use a slightly different program-that-lets-you-install-things to install more programs (heyo!). This one's called `pip`. Use it like this: 

``` bash
$ sudo pip install pycurl
```

If you get an error that `pip`'s not on your computer, you can install it like this: 

``` bash
$ sudo easy_install pip
```

and then try installing `pycurl` again. 

We then want to install a program called `ansible`, which is root way that `streisand` works: it uses `ansible` to automate the process of provisioning the server and installing all of the VPN programs we want. 

``` bash
$ brew update && brew install ansible
```

Finally, these programs install some useful software to help `ansible` communicate with Digital Ocean. Run these lines one by one: 

``` bash
$ sudo pip install dopy==0.3.5
$ mkdir -p ~/Library/Python/2.7/lib/python/site-packages
$ echo '/usr/local/lib/python2.7/site-packages' > ~/Library/Python/2.7/lib/
```

#### b. The Big Shebang

We're ready to *actually install the damn thing* now. Are you wishing you had just bought a VPN subscription? I know the feeling: welcome to open source computing!

First, find a place on your computer that you want to keep the files for `streisand` long term. Wherever you squirrel away miscellaneous files would be a good choice, I think. Make a folder called "streisand" there, and then drag that folder to the Terminal icon in your dock. That will orient your terminal into that folder without you having to do much work. Then, we'll copy the program from GitHub: 

``` bash
$ git clone https://github.com/jlund/streisand.git .
```

(That last period is important: it tells `git` to clone all of the files into the current folder, the "streisand" one that we're in right now.)

If for some reason `git` fails, you can always go to [`streisand`'s GitHub page](https://github.com/jlund/streisand) and click the "download .zip" button, and then unzip the files into the "streisand" folder:

<img src="/assets/img/vpn-6.jpg"/>
<div class="caption">Download ZIP</div>

Now just type

``` bash
$ ./streisand
```

to run the set-up files!

These set-up files will walk you through a very straightforward series of prompts: you'll be asked to copy in things like your DigitalOcean API token and the name you gave your SSH key in DigitalOcean's security page. You'll also be asked where you want to locate the server (server providers have servers all over the world, and folks can pick servers closest to where they are in order to reduce latency). This is all really transparent, so I won't spend too much time on screenshots. 

#### c. Accessing your server

After about ten minutes, your VPN will be all set up on the server! Now we just have to set up your local connection to the VPN itself. This is the part where `streisand` is really great: go to that folder where you copied in all of the `streisand` files. You'll see a new folder called "generated-docs" and inside it a file called "your-VPN-server's-name.html." Click it, and it'll open up in your browser. 

In this file are instructions for how to connect to your VPN server using your browser, using randomized username and password information. This is also the file that you'll want to send to anyone that you want to give access to the VPN: they can use the username and password too. Follow those instructions[^3], which will log you into *one more set of instructions on the server itself*, which are the final instructions for configuring your VPN settings on your computer. For those of you using macOS, I recommend the "L2TP/IPsec" instructions, which will help you connect using your Mac's built-in VPN program. 

[^3]: The last tricky thing that I noticed when I was setting my `streisand` server up was in installing the SSL certificate (essentially one step that tells your computer to trust this rando server somewhere in New Jersey). On the most recent macOS program, when I dragged the SSL certificate to the Keychain Access program (step #3), it didn't pop up any prompts or anything. I had to search for "streisand" in the top-right corner and then right-click the certificate file, at which point I was able to select all the trust settings I needed to. 

## Last Thoughts

This might look like an intimidatingly long tutorial, but I promise as someone who has only recently come into technical knowledge that it's actually a straightforward and brief process: only about a half-hour of your time, all things said and done. It's also very difficult to hurt anything about your local computer doing this tutorial. That all being said, this might be more than you want or need, and you may find that the security trade-offs of setting up a VPN like this (or a VPN at all!) aren't worth it. We may also all find in like a week or two that `streisand` has some critical vulnerabilities and we were all fools to use it! (I sort of doubt it, but anything is possible these days.)

A VPN isn't going to save us. One thing that I've learned the hard way in doing all of this research and technical set-up is that what we really need is a radical reconfiguration of our relationship with the internet as infrastructure: who owns what, who provides access, what technical protocols we use to ensure privacy and security, what the role of advertising should be (if at all) and whether or not the internet should be monetized in the ways that it currently is. I don't think we're going to get any of these answers with the current USA administration, or our geopolitical configurations more broadly. But while a VPN won't save us, it can help, in a small way, to make it harder to identify, quantify, and sell our habits. Just make sure that you're in control, not someone else—or at least that you recognize and sufficiently trust that which is out of your control.

*If you read through this tutorial and realize that I'm missing a critical step, please feel free to give me a ping or (if you're of a particular technical mindset) pull-request this post on GitHub using the "revision history" link below.*