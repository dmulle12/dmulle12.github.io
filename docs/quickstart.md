# Quick Start

In the examples below, replace **China** with your own policy / proxy group name.

::: tip Subscribe on demand
More rules ≠ better. Start with `reject` (ad blocking) and `streaming-cn` (China streaming), and add more only if you need them.
:::

::: code-group

```ini [Surge]
[General]
geoip-maxmind-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[Rule]
RULE-SET,https://github.com/dmulle12/rules/raw/rel/reject.list,REJECT
RULE-SET,https://github.com/dmulle12/rules/raw/rel/streaming-cn.list,China
GEOIP,CN,China
FINAL,DIRECT
```

```ini [Quantumult X]
[general]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[filter_remote]
https://github.com/dmulle12/rules/raw/rel/reject.quanx, tag=Reject, update-interval=86400, enabled=true
https://github.com/dmulle12/rules/raw/rel/streaming-cn.quanx, tag=StreamingCN, force-policy=China, update-interval=86400, enabled=true

[filter_local]
geoip,cn,China
```

```ini [Loon]
[General]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb

[Remote Rule]
https://github.com/dmulle12/rules/raw/rel/reject.list, policy=REJECT, tag=Reject, enabled=true
https://github.com/dmulle12/rules/raw/rel/streaming-cn.list, policy=China, tag=StreamingCN, enabled=true

[Rule]
GEOIP,CN,China
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
  - RULE-SET,streaming-cn,China
  - GEOIP,CN,China
  - MATCH,DIRECT
```

:::

## Notes

- `reject`: ad and tracker domain blocking, works everywhere.
- `streaming-cn`: Bilibili, Douyin, Kugou and other services that require a mainland China IP — route them via your China policy.
- `GEOIP,CN`: IP-level fallback. If an app connects directly to an IP without a domain involved, this catches it and sends it to your China policy (requires the GeoIP database configured above).
- See [Rule Sets](/rules) for everything available.
