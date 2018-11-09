---
layout: post
title: On the Virtues of Knockoffs, or, How to Make an Encrypted Journal on Your Computer
redirect_from: "/2016/02/09/virtue-of-knockoffs/"
tags:
- how to
---

I used to use a journal app called [Day One](http://dayoneapp.com). It was a good enough app, given how infrequently I used it. It synced across my devices, it was a pleasing shade of start-up blue, and it was featured often enough in the App Store that I felt reasonably confident that it wasn't going anywhere anytime soon. I put around four hundred entries in it over the course of three or so years.

Last week, Bloom Built, LLC, the company behind Day One, did a wholly sensible thing given the minimal margins and intense competition Selling Apps entails these days: they released a 2.0 update that was a separate app from the 1.0, with lavishly appointed new features and a substantially increased price. I purchased the original Day One app for $15 across OS X and iOS; 2.0 (setting aside an immediate 50% off sale to entice upgraders like myself) would set me back $50.

Again: this was a wholly sensible thing for Bloom Built to do! It's hard out there for immaterial economies dependent on a single virtual storefront run by a massive corporation that extracts rent in exchange for convenience and visibility. But two things struck me about this new 2.0 release: first, its substantial price increase, which alerted me also to the fact that a subsequent 3.0 would most likely cost me just as much if not more; and second, the persistent lack of encryption for my journal entries.

Because yes! This was a journal app that had lacked, despite persistent customer feedback, a reliable way to encrypt entries—entries which were stored in plain text and synchronized across your choice of cloud service. Well, your choice until 2.0: users are now locked in to using Bloom Built's own proprietary synchronization service. I began to grow skeptical about my desire to pay $50 to put my thoughts and fears in plain text on a small start-up's servers. I began to grow skeptical about continuing to use the (admittedly still perfectly functional) 1.0 iteration of the app. I (you see where this is going?) decided to buid myself a knockoff journal program, just for me.

## Building a Knockoff Journal App on the OS X System of Your Choice

I started by extracting all of my entries out of Day One. Thankfully (really, truly thankfully: many apps don't bother with this at all [I'm looking at *you*, Evernote, with your weird HTML/XML export options]) it supports straightforward plain text export, so I manage to get all of my entries into a nice folder. I didn't decide to write a post about this until after I'd already deleted Day One off of my computer, so just imagine that you're looking at a screenshot of a folder filled with happy little text files, instead of this Vine of Jeff Goldblum.

<iframe src="https://vine.co/v/iJVhe0qUEHV/embed/simple" width="480" height="480" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

I'll also skip over the painfully interminable finagling that it took to get all of the file names in a standardized order that would appear chronologically in my text editor of choice ([Sublime Text](http://sublimetext.com), if you want to know where I stand on These Important Issues). Let's just leave it at I am incredibly grateful for both the Automator app build into OS X and the fact that "Rename all..." is a secretly powerful right-click option.

So now I had all of my old entries in a folder, ready to be a journal in and of their own right. If I didn't have any secrets, I could just stop now! (This is the low-key powerful thing about computers: [like half of the apps we have could probably be replaced by files in folders](https://al3x.net/2009/01/31/against-everything-buckets.html)) But I *do* have secrets, or at least, I *think* I have secrets, so I need some kind of encryption. Thankfully, OS X has a solution baked right in to its operating system!

<img src="/assets/img/knockoff-1.jpg"/>
<div class="caption">Disk Utility</div>

Good old Disk Utility. This is where you used to go when something was acting up on your computer and you needed to "Repair File Permissions" or some other voodoo that seemed to make things better but you were never sure how? It got nerfed a bit in the 10.11 El Capitan update, but the core functionality we need is still there, up in the File > New Image menu.

<img src="/assets/img/knockoff-2.jpg"/>
<div class="caption">Command-N, for those in the know.</div>

With Disk Utility, I can create my own Disk Image file—the same images that we use when we install programs from not-the-App-Store—stick my files in it, and slap a password on it. You'll see here that I'm choosing 256 bit AES encryption (I don't know precisely what it means either! But 256 bits means more bits to choose from, which means more randomness, which means harder-to-crack, and that's good enough for me) and a .sparsebundle image rather than .dmg. Why? A .dmg is one flat file, whereas a .sparsebundle is actually a collection of bands of files—this makes it easier to back up, because you only have to synchronize the bands that have changed, and also gives you a chance to recover part of the image if one of the bands fails, since the others would be, theoretically, unaffected.

<img src="/assets/img/knockoff-3.jpg"/>
<div class="caption">Much GUI, Wow</div>

From there, I just put my .md files on the new disk image, and when I'm done writing, eject it!

But that's not super user-friendly. I mean, none of this is *super* user-friendly: that's why we have apps like Day One. But I can still hack together some knockoff functionality with the help of some carefully chosen shell aliases.

``` console
$ alias journal='hdiutil attach /path/to/journal.sparsebundle; subl --project /Volumes/journal/journal.sublime-project'
$ alias eject='hdiutil detach /Volumes/journal; rsync -avh /path/to/journal.sparsebundle /path/to/backuplocation'
```

All this means is:

``` console
$ alias journal=
```

when I type `journal` in the command line application of my choice, it executes all of the following commands sequentially.

``` console
$ hdiutil attach /path/to/journal.sparsebundle;
```

First, mount my journal to my Desktop (this is the same as if I double-clicked it). The command line will prompt me for my password all on its own. I could also pass the password along with the initial command, but then that would entail putting my password in plain text on my computer, which, no?

``` console
$ subl --project /Volumes/journal/journal.sublime-project
```

I made a Sublime Text project that corresponds to my journal entries folder, giving me a GUI of sorts. This command pops that open automatically, saving me the extra clicks to open Sublime Text and load the project.

Then, when I type `eject`:

``` console
$ hdiutil detach /Volumes/journal;
```

I eject the .sparsebundle, and for kicks:

``` console
$ rsync -avh /path/to/journal.sparsebundle /path/to/backuplocation
```

Use `rsync` to synchronize a copy to another location on my computer, in case something terrible happens.

And that's it! You have yourself a totally-jankety-but-still-pretty-functional-and-also-encrypted-unlike-with-other-apps-who-shall-remain-nameless journal app!

## "All the good shit is always down a manhole."

<img src="/assets/img/knockoff-4.jpg"/>
<div class="caption">"Jesus Christ."</div>

While building my knockoff journal, I was reminded of John Herrmann's endlessly compelling essay ["Shitphone: A Love Story,"](https://medium.com/matter/shitphone-a-love-story-a44e66434807#.pxei6ttto) about his affinity for off-brand electronics. He writes:

> Off-brand electronics are, like their branded counterparts, interesting for a limited amount of time: The highest-end branded version of a product offers a chance to taste the luxurious future of technology; the shitworld version lets you preview a more practical future — the future most of the global electronics-buying public will actually enjoy. Take the Jambox, a small and dazzlingly expensive prism of speakers and battery and wireless radios that plays music from nearly any phone at a respectable volume; it was a sensation for a few years after its introduction in 2010. By 2013, off-brand speakers were making major inroads online, allowing shoppers like me to feel like we were somehow gaming the system....Off-brand electronics are alluring only when they feel like deals — that is, only as long as there are more popular branded alternatives which they can imply are overpriced. They’re interesting, in other words, for as long as they make the buyer feel smart.

This isn't precisely the same kind of knockoff I built: mine is more akin to Molly Ringwald piecing together her own prom dress in *Pretty in Pink* than Herrmann's shitphone. But the pleasures are similar: a feeling of global grift, of pulling something over on the electronic economy's expectations for my purchasing habits. To deliberately embrace cheapness and shoddiness is a possible virtue in a time of clean, flat, minimal, and expensive design.

In embracing knockoffs, I realized how many programs I use on a day-to-day basis—productivity, journaling, to-do-listing, messaging, even makings GIFs—are more or less GUIs plastered on top of basic functionalities baked into my operating system. Nine times out of ten, I was paying for convenience, not functionality. It was the rare program that added something genuinely new to my computer; most reorganized, made transparent (or opaque) various functions that already existed. Now: very often that convenience is what keeps me safe and sane, what lets me spend time doing *literally anything else with my life* besides tinkering with my computer.

But sometimes you run up against a software that decides to make something opaque that you would prefer to be transparent, or reveals something about itself, its functionality, its politics, its economy that you would have rather stayed hidden. At that point, it's down the manhole, where all the good shit really is.
