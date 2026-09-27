# 规则列表

所有规则每天自动构建，发布地址格式：

```text
https://github.com/dmulle12/rules/raw/rel/<规则集>.<格式>
```

格式后缀：`.list`（Surge / Loon）、`.quanx`（Quantumult X）、`.yaml`（Clash）、`.srs`（sing-box）。

## reject —— 广告拦截

合并上游广告分类与手动维护的拦截规则，各地通用。

- [reject.list](https://github.com/dmulle12/rules/raw/rel/reject.list)
- [reject.quanx](https://github.com/dmulle12/rules/raw/rel/reject.quanx)
- [reject.yaml](https://github.com/dmulle12/rules/raw/rel/reject.yaml)

## streaming-cn —— 回国流媒体

网易云、哔哩哔哩、爱奇艺、优酷、腾讯视频、抖音、快手、喜马拉雅、酷狗、酷我。需要大陆 IP 才能用的服务，走回国节点。

- [streaming-cn.list](https://github.com/dmulle12/rules/raw/rel/streaming-cn.list)
- [streaming-cn.quanx](https://github.com/dmulle12/rules/raw/rel/streaming-cn.quanx)
- [streaming-cn.yaml](https://github.com/dmulle12/rules/raw/rel/streaming-cn.yaml)

## microsoft —— 微软服务

Microsoft 365 / Office、Outlook、OneDrive、Xbox、Azure、Bing，以及美国学校域名。适合走美国节点。

- [microsoft.list](https://github.com/dmulle12/rules/raw/rel/microsoft.list)
- [microsoft.quanx](https://github.com/dmulle12/rules/raw/rel/microsoft.quanx)
- [microsoft.yaml](https://github.com/dmulle12/rules/raw/rel/microsoft.yaml)

## gfw —— GFWList（墙内用户）

GFWList 中被屏蔽的域名，走代理。**身处大陆**需要翻墙的用户使用，海外用户不需要订阅。

- [gfw.list](https://github.com/dmulle12/rules/raw/rel/gfw.list)
- [gfw.quanx](https://github.com/dmulle12/rules/raw/rel/gfw.quanx)
- [gfw.yaml](https://github.com/dmulle12/rules/raw/rel/gfw.yaml)

## gfw-skip —— GFW 白名单

GFWList 的白名单条目，直连。

- [gfw-skip.list](https://github.com/dmulle12/rules/raw/rel/gfw-skip.list)
- [gfw-skip.quanx](https://github.com/dmulle12/rules/raw/rel/gfw-skip.quanx)

## loc-cn / loc-!cn —— 国内外直连/代理

- `loc-cn`：大陆域名，直连。
- `loc-!cn`：非大陆域名，走代理。这两个是给大陆用户设计的，海外用户一般用不上。

## 数据来源

规则数据来自 [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community) 与官方 [gfwlist/gfwlist](https://github.com/gfwlist/gfwlist)，每日自动同步构建。
