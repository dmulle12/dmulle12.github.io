# 快速开始

下面示例里的 **回国** 请换成你自己的策略组/节点组名称。

::: tip 按需订阅
规则不是越多越好。先订阅 `reject`（去广告）和 `streaming-cn`（回国），不够再加。
:::

::: code-group

```ini [Surge]
[General]
geoip-maxmind-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[Rule]
RULE-SET,https://github.com/dmulle12/rules/raw/rel/reject.list,REJECT
RULE-SET,https://github.com/dmulle12/rules/raw/rel/streaming-cn.list,回国
GEOIP,CN,回国
FINAL,DIRECT
```

```ini [Quantumult X]
[general]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[filter_remote]
https://github.com/dmulle12/rules/raw/rel/reject.quanx, tag=Reject, update-interval=86400, enabled=true
https://github.com/dmulle12/rules/raw/rel/streaming-cn.quanx, tag=StreamingCN, force-policy=回国, update-interval=86400, enabled=true

[filter_local]
geoip,cn,回国
```

```ini [Loon]
[General]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[Remote Rule]
https://github.com/dmulle12/rules/raw/rel/reject.list, policy=REJECT, tag=Reject, enabled=true
https://github.com/dmulle12/rules/raw/rel/streaming-cn.list, policy=回国, tag=StreamingCN, enabled=true

[Rule]
GEOIP,CN,回国
FINAL,DIRECT
```

```yaml [Clash]
rule-providers:
  reject:
    type: http
    behavior: domain
    url: https://github.com/dmulle12/rules/raw/rel/reject.yaml
    path: ./ruleset/reject.yaml
    interval: 86400
  streaming-cn:
    type: http
    behavior: domain
    url: https://github.com/dmulle12/rules/raw/rel/streaming-cn.yaml
    path: ./ruleset/streaming-cn.yaml
    interval: 86400

rules:
  - RULE-SET,reject,REJECT
  - RULE-SET,streaming-cn,回国
  - GEOIP,CN,回国
  - MATCH,DIRECT
```

:::

## 说明

- `reject`：广告域名拦截，各地通用。
- `streaming-cn`：哔哩哔哩、抖音、酷狗等需要大陆 IP 的流媒体，走回国节点。
- `GEOIP,CN`：IP 维度的兜底。万一某个 App 直连 IP、不走域名，这条能把它抓住送进回国节点（需要先配置上面的 GeoIP 库）。
- 更多规则集见[规则列表](/rules)。
