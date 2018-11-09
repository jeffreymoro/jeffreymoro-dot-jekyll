---
layout: post
title: Generating Jekyll Tags with a Shell Script
redirect_from: "/2017/08/18/generating-tag-script/"
tags:
- how to
- meta
---

I think blog tags are art.

I'm entirely uninterested in them as navigational aids or contextual information, though that's how I use them on this site right now. Rather, I love tags as nonsensical spiralings-off. Long lists of alphabetized junk that, at their best, spill out a story in and of themselves, totally unrelated to or at least refractory of the article itself. I was raised on the wild tag piles of [*The Awl*](https://theawl.com) and [*The Hairpin*](https://thehairpin.com), although both of those sites lost their tags in the Great Medium CMS Transition Of 2015. *The Awl* recently switched back to its old CMS, and with it [got its tagging capacity back](https://www.theawl.com/tag/tags-are-back-and-good/), but on the way lost most of its old tag content to Medium's three-tags-only restriction. So now some of the great Tag Masterpieces of Blogging Past are now neutered. I hope they saved them and can put them back in.

I've never spiralled off insane tags on this site because tagging in Jekyll, while possible, is a little tedious. Tagging a post is easy enough: I just include the tag in my post's metadata:

``` yaml
---
layout: post
title: Generating Jekyll Tags with a Bash Script
tags:
- howto
- meta
---
```

and loop in some Liquid templating code to my post layout:

{% raw %}
``` html
tagged in {% for tag in page.tags %}<a href="/tags/{{ tag | downcase | replace: ' ', '_' }}/">{{ tag }}</a>{% if forloop.last %}{% else %}, {% endif %}{% endfor %}
```
{% endraw %}

(which I stole from [Matthew Lincoln](https://github.com/mdlincoln/mdlincoln.github.io)'s site)

But if I want tag *pages* then things get a little more annoying. Each tag needs its own page—its own `.md` file in a `tags/` folder. This is easy enough if I have a very limited tagset, as I currently do. I can make a set number of tag pages and stay within that corpus. But what if I want elaborate, goofy tags? I'd have to make a new `.md` file for every single one.

Now, I'm sure there's a Jekyll plugin that would automate this for me, but 1) I use GitHub Pages to host this site so I can't use any plugins and 2) I'm a masochist who likes to do things myself. I already had to maintain a tags data file at `_data/tags.yaml` that could populate my [tag cloud page](/tags), so I thought to myself: "Could I write a quick little shell script[^1] that could grab tags from this data file and write those tag `.md` pages automatically?"

[^1]: A shell script, for those not in the command line know, is a small program that basically stitches together a bunch of sequential commands one might run on the command line. It's like the Automator app included in macOS, but a little less user-friendly.

The answer, it turns out, is "yes I can." And in the interest of any folks who might be obsessive in particularly the same ways that I am, here's the script for your own enjoyment:

``` bash
#!/bin/bash
rm -rf tags/*.md
while read -r line || [[ -n "$line" ]]; do
site=$(pwd)
tag="${line//- }"
fileName=$(echo "$tag" | tr " " _)
touch $site/tags/$fileName.md
echo '---
layout: taglist
tagname: "'$tag'"
title: "'$tag'"
---' >> $site/tags/$fileName.md
done < "$1"
```

Save this into a file named `tag-gen` (or anything really), make it executable with

``` bash
chmod +x tag-gen
```

and then run it from the top level directory of your Jekyll site like so:

``` bash
./tag-gen _data/tags.yaml
```

Poof! As long as you remember to write your goofy tags into your `tags.yaml` file, they'll automatically populate your `tags/` folder!

Here's a walkthrough of what this does, for Learning Purposes:

## 1.

``` bash
#!/bin/bash
```

tells the script which command shell program it's going to use for all of what comes next. It's basically metadata.

## 2.

``` bash
rm -rf tags/*.md
```

removes any tag pages from your `tags/` directory. This makes sure that what comes next doesn't just write extra text into those files.

## 3.

``` bash
while read -r line || [[ -n "$line" ]]; do
```

starts a `while` loop that iterates over the `tags.yaml` file, picking out each line and writing it into the `$line` variable.

## 4.

``` bash
site=$(pwd)
tag="${line//- }"
fileName=$(echo "$tag" | tr " " _)
```

This sets up three variables that we'll use in the rest of the script. The first, `$site`, uses `pwd` to get your current working directory. You could also replace this with the hardcoded directory structure of your Jekyll site and theoretically run the script from anywhere, but I wanted the malleability in case I designed multiple Jekyll sites.

`$tag` takes the `$line` variable from above and strips out the dash and whitespace that precedes each actual tag, so you're just left with the word or phrase itself.

And `$fileName` takes the `$tag` variable and replaces all whitespace with underscores. This makes it easier to encode URLs down the road.

## 5.

``` bash
touch $site/tags/$fileName.md
```

This creates the `.md` file for each tag.

## 6.

``` bash
echo '---
layout: taglist
tagname: "'$tag'"
title: "'$tag'"
---' >> $site/tags/$fileName.md
```

And this is the meat of the script: the part that writes the necessary metadata to each tag `.md` file.

## 7.

``` bash
done < "$1"
```

Finally, this closes out the `while` loop after it's done with the whole `tags.yaml` file.

---

Phew! That's a lot more than I thought I'd write. But now you know, as do I, the Secret Of Goofy Jekyll Tags. I guess if I start to *actually* write silly tags I should move them to the bottom of my post template so that they don't totally overwhelm the title, but that's a project for another day.

---
