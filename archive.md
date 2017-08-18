---
layout: default
title: Chronological Archive
permalink: /blog/archive/
---
<h1 class="page-title">{{ page.title }}</h1>
<hr />
<div>
  <ul class="related-posts">
    {% for post in site.posts %}
      <li>
        <h3>
          <a href="{{ post.url }}">
            {{ post.title }}
            <small>{{ post.date | date_to_string }}</small>
          </a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>