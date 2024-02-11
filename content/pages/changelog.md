---
title: Pin 起來的 Changelog
description: 這邊放置 Pin 起來網站的 Changelog，主要的內容是描述「這個網站」本身的變化，包含新增、調整、或刪除的內容。
path: changelog/
draft: false
date: 2022-04-20
updated: 2024-02-04
template: changelog.html
---

這邊放置 Pin 起來網站的 Changelog。

Changelog 主要是講「這個網站」本身的變化，包含新增、調整、或刪除，因此與[所有文章歸檔](/archive/)的內容不同，在 changelog 頁面只會有與網站本身相關的內容。

版本號的格式，主要是參考「[語意化版本 (Semantic Versioning)](https://semver.org/) 這個有趣的規範，[x,y,z] 裡面， x 是主版號， y 是次版號， z 是修訂號。

但因為本網站不是軟體，所以我對於這三個項目的定義有點不一樣，跟「 API 是否相容」無關。

我的定義如下：
- 主版號：表示部落格有了大幅度的改版，例如更換架設方式、網域、部署方式等。這個網站完成後是 1.0.0，在 2022 年的最後一天更新到了 2.0.0。
- 次版號：表示部落格有新增功能，這邊的功能指的是某些特定欄位、頁面、超連結等，讓讀者可以更好使用、閱讀更多內容的都算是新增功能。
- 修訂號：表示部落格既有功能有修改內容，例如 css 樣式的調整、既有頁面或段落的連結調整、或者分類類別的調整等。

以下是依時間倒序排列的 changelogs ，歡迎瀏覽！


--- 

## [0.1.0] - 2022-04-11

### Added

- 將 [Owen's Blog](https://www.owenyoung.com/) 的 [原始碼](https://github.com/theowenyoung/blog) clone 了一份，並開啟自己的 repository ，開始理解每個檔案的用途及內容，並且刪除掉 Owen 的文章，只放入一篇自己的文章測試最小程度的網站。