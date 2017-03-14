---
layout: post
title: On seeing through Twitter
tags: 
- twitter
- visualization
---

On August 24th, Ars Technica reported that Twitter (the corporation) cut off API access to Twitter (the database) for a number of websites. These websites, [Politwoops](http://politwoops.sunlightfoundation.com) and [Diplotwoops](http://diplotwoops.org), were dedicated to archiving and displaying tweets that the official accounts of politicians, diplomats, and other governmental agencies tweeted and then deleted. [From Ars’ article](http://arstechnica.com/tech-policy/2015/08/twitter-cuts-api-access-to-more-sites-archiving-deleted-politicians-tweets/):

> Twitter has severed API access to more sites that archive deleted tweets from politicians. The most recent targets—Diplotwoops and the international version of Politwoops—spanned at least 30 countries, but Twitter found the sites to be in breach of the service’s privacy policy. 
> 
> This weekend’s development comes three months after Twitter cut API access for the US’ political tweet watchdog, Politwoops, for the same reason. The Sunlight Foundation ran the US Politwoops, and the Open State Foundation ran 30 international versions of Politwoops in addition to Diplotwoops. Both organizations lashed out at this recent decision.

For sites like Diplotwoops and Politwoops, API access is everything. An API ([application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface)) is a kind of grammar, a set of instructions for interacting with a computing platform. The Twitter API and the permissions granted through its use were what powered these sites’ ability to access politicians’ live feeds, write tweets to a database, check for later deletions, and then post those deleted tweets to the public Internet. Twitter’s stated reason for shutting these services down was that they were in violation of the API’s terms of use, which [states that developers must](https://dev.twitter.com/overview/terms/agreement-and-policy#3.Update_Respect_Users_Control_and_Privacy): 

> b. Take all reasonable efforts to do the following, provided that when requested by Twitter, you must promptly take such actions:
> 
> i. Delete Content that Twitter reports as deleted or expired;
> 
> ii. Change treatment of Content that Twitter reports is subject to changed sharing options (e.g., become protected); and
> 
> iii. Modify Content that Twitter reports has been modified.

A straightforward enough case, right? However, as the Sunlight Foundation, the NGO that ran Politwoops, wrote on its blog when its API access was suspended, Twitter had contacted them about terms of use violations way back in 2012 and had reached an agreement with the Foundation to allow its website to operate unencumbered. [To wit](http://sunlightfoundation.com/blog/2015/06/04/eulogy-for-politwoops/):

> Days after Politwoops launched in 2012, Twitter contacted the Sunlight Foundation and told us, “Your service violates our API Terms of Service on a fundamental level.” We explained the goals of the project and agreed to create a human curation workflow to ensure that the site screened out corrected low-value tweets like typos, links and Twitter handles. We implemented this layer of journalistic judgment with blessings from Twitter and the site continued.

What changed between 2012 and 2015? There’s a feeling online, one that I’ve noticed in a number of channels but principally on Twitter, that something has changed, and not for the better. There’s a sense that surveillance, already a major part of our lives online, has expanded. There’s a sense of futility in the face of the “sharing economy,” as the trends instituted by comically evil corporations like Uber lock more of us in [part-time, contingent labor](http://platformcoop.net). There’s a sense that social media has fulfilled its dark promise as [a perfect tool for harassment](http://the-toast.net/2015/07/23/an-interview-with-sarah-jeong/), and women, people of color, people who speak up against the flow of garbage find themselves attacked and driven into protected accounts—or offline entirely. And there’s a sense that the Internet’s ability to amplify horrid events, to mobilize social activist movements like Arab Spring or Black Lives Matter, has a darker side: one that reifies and insists on witnessing trauma and injustice beyond a human’s capacity to withstand it. 

What changed between 2012 and 2015? Trayvon Martin was murdered, Michael Brown was murdered, Renisha McBride was murdered. We had an election, are about to have another one. Twitter gained hundreds of thousands of users, [but they’re not talking](http://www.theatlantic.com/international/archive/2015/08/twitter-global-social-media/402415/). And the money gathers upward, like it always has. Our lives online feel increasingly mandatory, and increasingly exhausting. 

Watching Twitter (the corporation) pull the plug on sites like Diplotwoops and Politwoops teaches us what power is when social media networks are concerned. I want to use their example to kick off what I anticipate will be a series of blog posts about Twitter, our utterances on it, and our relationships to each other through it. I agree with those who think that the Internet, as we know and knew it, is at some kind of breaking point. Let’s dig through the rubble together.

---

Over the past month, I’ve been collaborating with Marisa Parham on the beginnings of a project called *Still Life in Digital: Black Life, Trauma, and Social Media*. The project’s goal, as we envision it, is to push on the rhetoric of the digital making things, relationships, utterances, and lives floaty, disembodied, cloud-like. For Black life, we argue, it does the opposite. Social media overconcretizes lives in ways that bodies can’t sustain. Web Smith writes about this in a Medium post called [“Our Truth is Why Twitter is Struggling,”](https://medium.com/@web/our-truth-is-why-twitter-is-struggling-ffc6a4e02bcd) in which he says: 

> Twitter is suffering because it is the most accurate reflection of American society today. It’s not just what’s tweeted, it’s what isn’t tweeted. **Each day, a new hashtag represents a dead child.** Often, there is a filmed murder attached. Often still, we watch it.
> 
> *[...]*
> 
> ***Dare I say, that Twitter’s problem is its ability to trigger us.*** Every death reminds us that, even if we’re perfect, we may die today. Every advocacy of an African lion reminds us that African-Americans are traditionally less important than animals. We watch what’s important to our friends and then ask, why is my friendship not important to you?

In particular, we’ve been thinking about data visualization: how the graph, map, tree, or chart has gained prominence in the way we talk, write, and share online, and its role in making violence towards Black life constantly visible and explicable in ways that are both necessary and deleterious. It’s been my job over the past month to learn more about techniques for data visualization, how to turn corpuses of data, especially tweets, into compelling visual representations, and to think about what that process of representation entails. Our starting point was this striking heat map of tweets sent out during the week following Michael Brown’s shooting in Ferguson, MO: 

<iframe width='100%' height='520' frameborder='0' src='https://srogers.cartodb.com/viz/4a5eb582-23ed-11e4-bd6b-0e230854a1cb/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

What are we seeing here? How are individual utterances, and the bodies that produced them, represented in a map like this? What *aren’t* we seeing?

I quickly became obsessed with the data underneath, with understanding how someone would go about accessing the raw stream of tweets and metadata that powers this or any other visualization. To begin collect tweets for our project, I used the same free, open, public API that powered Diplotwoops and Politwoops. I have to admit, I was a little shocked at what I saw constituted a single tweet. 

Here’s one tweet—one of mine, taken from a few days ago: 

{% highlight json linenos %}
 {
    "contributors": null, 
    "truncated": false, 
    "text": "interesting reflection on who's doing the talking and the listening and the ignoring on this website dot com: http://t.co/RVzTR7pDGM", 
    "is_quote_status": false, 
    "in_reply_to_status_id": null, 
    "id": 636912109163520000, 
    "favorite_count": 1, 
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>", 
    "retweeted": false, 
    "coordinates": null, 
    "entities": {
        "symbols": [], 
        "user_mentions": [], 
        "hashtags": [], 
        "urls": [{
            "url": "http://t.co/RVzTR7pDGM", 
            "indices": [110, 132], 
            "expanded_url": "http://www.theatlantic.com/international/archive/2015/08/twitter-global-social-media/402415/", "display_url": "theatlantic.com/international/\u2026"}]
        }, 
    "in_reply_to_screen_name": null, 
    "in_reply_to_user_id": null, 
    "retweet_count": 0, 
    "id_str": "636912109163520000", 
    "favorited": false, 
    "user": {
        "follow_request_sent": false, 
        "has_extended_profile": false, 
        "profile_use_background_image": true, 
        "default_profile_image": false, 
        "id": 1478357942, 
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png", 
        "verified": false, 
        "profile_text_color": "333333", 
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/611518361206423552/ICDpOPuK_normal.jpg", 
        "profile_sidebar_fill_color": "DDEEF6", 
        "entities": {
            "url": {
                "urls": [{
                    "url": "http://t.co/UuZFn8Zbva", 
                    "indices": [0, 22], 
                    "expanded_url": "http://jeffreymoro.com", 
                    "display_url": "jeffreymoro.com"}]
            }, 
                "description": {
                    "urls": []}
        }, 
        "followers_count": 173, 
        "profile_sidebar_border_color": "C0DEED", 
        "id_str": "1478357942", 
        "profile_background_color": "C0DEED", 
        "listed_count": 17, 
        "is_translation_enabled": false, 
        "utc_offset": 10800, 
        "statuses_count": 1636, 
        "description": "electronic literature, media history, software studies // all-purpose post-bac for @5collDH // helps run @thecriticalis", 
        "friends_count": 426, 
        "location": "Northampton, MA", 
        "profile_link_color": "0084B4", 
        "profile_image_url": "http://pbs.twimg.com/profile_images/611518361206423552/ICDpOPuK_normal.jpg", 
        "following": false, 
        "geo_enabled": false, 
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1478357942/1436916421", 
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png", 
        "screen_name": "jeffreymoro", 
        "lang": "en", 
        "profile_background_tile": false, 
        "favourites_count": 405, 
        "name": "Jeffrey Moro", 
        "notifications": false, 
        "url": "http://t.co/UuZFn8Zbva", 
        "created_at": "Sun Jun 02 22:34:06 +0000 2013",
        "contributors_enabled": false, 
        "time_zone": "Athens", 
        "protected": false, 
        "default_profile": true, 
        "is_translator": false
    }, 
    "geo": null, 
    "in_reply_to_user_id_str": null, 
    "possibly_sensitive": false, 
    "lang": "en", 
    "created_at": "Thu Aug 27 14:44:14 +0000 2015", 
    "in_reply_to_status_id_str": null, 
    "place": null, 
    "metadata": {
        "iso_language_code": "en", 
        "result_type": "recent"
    }
 }
{% endhighlight %}

It’s overwhelming. It feels like [that episode of *The West Wing*](http://westwing.wikia.com/wiki/Take_Out_the_Trash_Day) when, to bamboozle reporters who ask for internal documents from the President’s office, the Bartlet administration releases *everything*, drowning the press in paper. This 90-line .json is a single tweet. Try working with more than [13 million of them](http://inkdroid.org/2014/08/30/a-ferguson-twitter-archive/).  

Many of these fields are self-explanatory, and after the initial shock dies down, make perfect sense from an architectural standpoint. The tweet’s text, its favorite count, whether it’s even been retweeted, geographic information: if you look at this document from the perspective of someone building a Twitter app, then everything becomes clear. I’m particularly interested in the “entities” field, which contains detailed information about all of the links *within* a single tweet. One tweet effectively contains the full metadata for all of its relationships, which allows one to map out webs of fractal connections. (If you’re getting a weird *Neuromancer*-y whiff from all of this, I don’t think it’s unintentional.)

Looking at these streams of data, I realized that visualization is more than charts and graphs. Twitter, the web interface, is itself a visualization, in the sense that it’s a representation in dimensional space of a complex dataset. Twitter, the web interface, relies on visual rhetoric to communication information and produce effects in the same way any well-made chart would. It’s useful to distinguish Twitter-the-interface from Twitter-the-data (and also from Twitter-the-corporation). Doing so allows us to understand (and here the software engineers are perhaps a step ahead of the academics, in the sense that the former has a rich vocabulary of [software/platform-as-a-service](https://en.wikipedia.org/wiki/Software_as_a_service) to understand this separation) what Twitter is doing when it pulls the plug on Politwoops or Diplotwoops: it’s implicitly claiming the value of one kind of visualization over another. The dataset is the same; it’s how you look at it that changes. 

Our lives online are subject to a regime of sight, of web sites and services that use design techniques to surface information in specific ways. When Web Smith writes that Twitter's problem is "its ability to trigger us," this is what he means. We're given things to see, and little control over how we see them.

As I wrote above, I imagine this post is the first in an intermittent series over the next few months, exploring visualizations that I end up making for this project, and digging deeper into questions of how lives and bodies, particularly Black lives and Black bodies, are construed online. If you’re interested in learning more about how the Twitter API works (I am so far from an expert that it’s comical I’m even writing this blog post), there’s ample documentation at [dev.twitter.com](http://dev.twitter.com). I recommend going and looking at that site in any case, particularly if you’re a regular Twitter user. It’s useful to see how the services that we use construe themselves on the backend, especially when they diverge radically from how they’d like us to perceive their front-ends. It’ll also give you a sense of how you might go about harvesting tweets for your own use (man, these metaphors get creepy *fast*), though I hope to write about those processes more soon.