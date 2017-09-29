---
layout: post
title: "@withdrawbot: An Exercise in Peripheries"
tags:
- computing
- speculation
- carpentry 
---

A star-gazing technique: we know that the darkness is full of light too faint to see and too far away. To see fainter stars and galaxies, which brighter stars tend to occlude, avoid looking at a spot in the sky head-on. Rather, gaze just off-center from where you want to see, and relax your peripheral vision. Then fainter stars will begin to appear. 

*This is a post I wrote for a graduate seminar on speculation.*

***

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the soul permits</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/913691823683571713?ref_src=twsrc%5Etfw">September 29, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

We know from our reading the central claim of Graham Harman's object-oriented philosophy: that objects withdraw or recede from us and from each other; that every object holds in its core a privacy that is fundamentally unknowable and inaccessible ("Response to Shaviro" 295). "We know from our reading," and I note with some amusement that we have, hitherto in this class, known Harman's position best by *other people's* readings—his principle of withdrawal *as a principle* most in its treatment and codification by others. "For Harman . . . all objects are ontologically equal, because they are all equally withdrawn from one another" (Shaviro 282). "In other words, as in the case of Harman's withdrawn objects, there is always something of the object held in reserve" (Bryant 274). In the first chapter of *Alien Phenomenology*, Ian Bogost paraphrases Harman's principle of withdrawal as: "The withdrawal of being is not merely a feature of yogurt or tonsils or Winnie the Pooh, but also of its very self" (22). But Harman's actual quotation, provided a few sentences prior, is much more indeterminate, slippery, (dare we say) poetic: "Every object, says Harman, 'is not only protected by a vacuous shield from the things that lie outside it, but also harbors and nurses and erupting internal universie within'" (qtd. in Bogost 22). 

This is, of course, more a quirk of syllabus preparation than a coherent argument. Harman offers "withdrawal" as a figure in the very first pages of *Guerilla Metaphysics*: "Objects withdraw absolutely from all interac­tion with both humans and nonhumans, creating a split between the tool-being itself and the tool-being as manifested in any relation" (5). Yet still, I am interested in how the figure of withdrawal itself withdraws, and how Harman seems most at ease articulating his key philosophical concept (or brand) in more evasive and poetic figures. And how it then falls to other philosophers to put a name to a thing that he otherwise would seem to prefer to leave unnamed, slipping out of the corners of thick description. 

I thought I would best engage this question by building a rudimentary Twitter bot: [@withdrawbot](https://twitter.com/withdrawbot). (Also because I have been looking for an excuse to build one for years, and finally used this assignment to get over my own inertia.) I thought a bot, in its repetitive, iterative form, would help me understand more about tactics of seeing a thing askance, and position better Harman's technique (as I see it) of allowing a concept to arise incidentally from the otherwise work of crafting an image. 

---

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the pair of socks withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912506477050564609?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I started by going to [Programming Historian's tutorial on making Twitter bots](https://programminghistorian.org/lessons/intro-to-twitterbots), by digital humanist and archaeologist Shawn Graham. This tutorial excellently lays out both the philosophical and methodological principles of making Twitter bots, and offers a number of options, ranging from the rapid to the complex, for getting a bot up and running. In the interest of both time and the ability to modify prototypes on the fly, I decided to use a service called [Cheap Bots Done Quick](http://cheapbotsdonequick.com/), which one can log into with a Twitter account and automate much of the process of setting up a bot. All I had to do was provide a template of what the tweets would look like, and a corpus of words with which to fill that template. 

I chose the very simple template "the #noun# withdraws." Like Bogost's Latour Litanizer, I thought it would be instructive to meditate, as it were, on the withdrawal of objects I would otherwise not consider. I found a [list of objects](https://github.com/dariusk/corpora/blob/master/data/objects/objects.json) in master bot-maker Darius Kazemi's [corpora](https://github.com/dariusk/corpora) GitHub repository—a list of useful lists for bot-making and language games. I trained Cheap Bots Done Quick on this corpora, and got some of the following tweets: 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the microphone withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912521576821723136?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the bag of popcorn withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912551778713038849?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the mp3 player withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912604623982157824?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Fun enough. But I realized this was just a list of *things*, man-made things, not objects in the grand metaphysical sense that Harman talks of. I decided I needed a list that was a little broader, a little more conceptual. I played with a few ideas—do I just pull all the nouns I possibly can? do I want to even limit it to nouns? what are the functions of syntactical and grammatical categories in delimiting, correlationally, what I can imagine as an object? I finally settled on the slightly trollish answer of pulling all the nouns I could from the pdf of *The Speculative Turn*. I figured that if I approached anything, I could at least try to approach that volume, since it's occupied so much of my energy so far. 

But how would I pull all the nouns? Extracting the full text of the pdf to a text file was easy enough; [I found a website that would do it for me](http://pdftotext.com/). The parts of speech were more tricky. I hunted around for folks on the internet with similar problems (the surefire way to solve any technical problem, really), and found that there was a Python natural language processing program called [nltk](http://www.nltk.org/) designed for just this sort of thing. I have very very very rudimentary Python skills, and thankfully found some nltk scripts floating around the internet that were easy enough to modify for my purposes. I directed the script to the .txt file of *The Speculative Turn*, and sure enough soon had a list of (singular, non-proper, ultimately arbitrary) nouns. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the structure withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912740520228769798?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the totality withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912785826655948801?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the truth withdraws</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912816036222730242?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

More conceptual, at least, though less fanciful. I wondered then if "withdrawal" was limiting: if I would learn more about the work of an object's privacy if I allowed it a more full range of activities. So I modified the ntlk script to sort for *verbs* instead of nouns. That's what @withdrawbot currently runs: 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the experiment does</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912853782584860673?ref_src=twsrc%5Etfw">September 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr">the capitalism constitutes</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912899084649975813?ref_src=twsrc%5Etfw">September 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the for-itself is</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/913125578185871363?ref_src=twsrc%5Etfw">September 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Most of the verbs are "is"; it's the most-common word that ntlk pulled by a wide margin. I suppose this is appropriate, given that this is an exercise in ontology. As Bogost writes: "The embroiderable shorthand for tiny ontology might read simply, *is*, but only because semantic coherence cannot be contained in the tittle atop the *i* alone" (22). 

***

What have I learned? That Twitter bots are easy ways to iterate through a text and to perform a Harman- or McGann-esque textual deformance. That the corpus of *The Speculative Turn* is less varied than one might imagine. That syntax is yet another trap of the correlationist circle; that grammar occludes the full range of what might constitute an object. That the work of fiddling with the program, iterating and refining it, too constitutes an ever-restless chasing of the thing-in-itself, which finds new and creative ways to withdraw. Indeed, I felt like I came closest to the spirit of this exercise when the bot failed in some way: e.g., ntlk is only so good at pulling nouns and verbs, and frequently gets confused and pulls things that are neither or not even words, leading to tweets like: 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the ’ uses</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/913216179627491328?ref_src=twsrc%5Etfw">September 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the modernist metaphysicians</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/913269030089306113?ref_src=twsrc%5Etfw">September 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">the form,54 objects</p>&mdash; withdrawbot (@withdrawbot) <a href="https://twitter.com/withdrawbot/status/912967031456137218?ref_src=twsrc%5Etfw">September 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

These were the most interesting tweets, the ones where I felt like I understood something new about the .pdfness of the .pdf file, the nltkness the ntlk library, and the botness of the Twitter bot itself. Rosa Menkman: "I experience the glitch as a wonderful interruption that shifts an object away from its ordinary form and discourse, towards the ruins of destroyed meaning" (340). If I am going to understand someting about capital-R Reality, it would seem I need to come at it from the most oblique and accidental angles. 

## Works Cited

Bogost, Ian. *Alien Phenomenology, or What It's Like To Be a Thing.* U of Minnesota P, 2012. 

Harman, Graham. *Guerilla Metaphysics*. Open Court, 2005. 

———. "Response to Shaviro." *The Speculative Turn: Continental Materialism and Realism*, edited by Levi Bryant, Nick Srnicek, and Graham Harman, re.press, 2011, pp. 291–303. 

Menkman, Rosa. “Glitch Studies Manifesto.” *Video Vortex Reader II: Moving Images Beyond Youtube*, edited by Geert Lovink and Rachel Somers Miles, Institute of Network Cultures, 2011, pp. 337–46.

Shaviro, Steven. "The Actual Volcano: Whitehead, Harman, and the Problem of Relations." *The Speculative Turn: Continental Materialism and Realism*, edited by Levi Bryant, Nick Srnicek, and Graham Harman, re.press, 2011, pp. 279–90.

