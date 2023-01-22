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
# 可在后面加 @tags(号)，或者添加 @分支
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

---



## 视频切片

```cmd
# 首先确保视频的视频流编码格式是h.264，音频的编码格式是aac
# 使用ffmpeg查看
# 如果不满足使用格式工厂等软件转换
ffmpeg -i 文件名.mp4

# 第一步：mp4转换成ts格式，转换前后文件大小基本不变
ffmpeg -y -i 文件名.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 文件名.ts

# 第二步：按间隔分片，下面按每20s进行分片，确保每个分片大小小于20MB即可
ffmpeg -i 文件名.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 20 文件名_%03d.ts
```

