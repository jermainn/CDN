# CDN

## 同步

```
# 添加所有文件
git add .
# 标记本次上传的注释
git commit -m "注释"
# 上传文件
git push -u origin master
```



---

## cdn位置

```
cdn: https://cdn.jsdelivr.net/gh/jermainliu/cdn
```

目录结构：

```cmd
# treee -L 2
CDN
├── avatar.png
├── images
│   ├── avatar.png
│   ├── cover
│   ├── cover_photo
│   ├── CVPR2019 Oral Presentation Taking A Closer Look-Oral.jpg
│   ├── donate
│   ├── logo
│   ├── social
│   └── startdash
├── README.md
└── videos
    ├── CVPR2019 Oral Presentation Taking A Closer Look at - 1.Oral(Av53561336,P1).mp4
    └── post_video
```

其中

```
cover					# 存储博客背景图片
cover_photo				# 存储博客文章封面图片
donate					# 存储捐赠图片
logo					# 存储一些使用的网站的logo图标
social					# 存储社交账户
startdash				# 博客主题个人兴趣的封面

post_video				# 存储博客文章中的视频文件
```

