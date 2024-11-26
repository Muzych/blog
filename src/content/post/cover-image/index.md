---
title: "Example Cover Image"
description: "This post is an example of how to add a cover/hero image"
publishDate: "04 July 2023"
updatedDate: "14 August 2023"
coverImage:
  src: "./cover.png"
  alt: "Astro build wallpaper"
tags: ["test", "image"]
---

<Layout>
  <PostHeader title="Example Cover Image" description="This post is an example of how to add a cover/hero image" coverImage={Astro.props.coverImage} />
  <PostBody>
    <p>This is a post with a cover image</p>
  </PostBody>
</Layout>
