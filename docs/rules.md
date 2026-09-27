# Rule Sets

All rule sets are rebuilt daily. Download URL pattern:

```text
https://github.com/dmulle12/rules/raw/rel/<set>.<format>
```

Formats: `.list` (Surge / Loon), `.quanx` (Quantumult X), `.yaml` (Clash), `.srs` (sing-box).

## reject — Ad Blocking

Merged upstream ad categories plus manually maintained block rules. Works everywhere.

- [reject.list](https://github.com/dmulle12/rules/raw/rel/reject.list)
- [reject.quanx](https://github.com/dmulle12/rules/raw/rel/reject.quanx)
- [reject.yaml](https://github.com/dmulle12/rules/raw/rel/reject.yaml)

## streaming-cn — China Streaming

NetEase Cloud Music, Bilibili, iQIYI, Youku, Tencent Video, Douyin, Kuaishou, Ximalaya, Kugou, Kuwo.
Services that require a mainland China IP — route them via your China policy.

- [streaming-cn.list](https://github.com/dmulle12/rules/raw/rel/streaming-cn.list)
- [streaming-cn.quanx](https://github.com/dmulle12/rules/raw/rel/streaming-cn.quanx)
- [streaming-cn.yaml](https://github.com/dmulle12/rules/raw/rel/streaming-cn.yaml)

## microsoft — Microsoft Services

Microsoft 365 / Office, Outlook, OneDrive, Xbox, Azure, Bing, plus US school domains. A good fit for US nodes.

- [microsoft.list](https://github.com/dmulle12/rules/raw/rel/microsoft.list)
- [microsoft.quanx](https://github.com/dmulle12/rules/raw/rel/microsoft.quanx)
- [microsoft.yaml](https://github.com/dmulle12/rules/raw/rel/microsoft.yaml)

## gfw — GFWList (users in mainland China)

Domains blocked in mainland China — route via proxy. **Only for users inside mainland China**; not needed elsewhere.

- [gfw.list](https://github.com/dmulle12/rules/raw/rel/gfw.list)
- [gfw.quanx](https://github.com/dmulle12/rules/raw/rel/gfw.quanx)
- [gfw.yaml](https://github.com/dmulle12/rules/raw/rel/gfw.yaml)

## gfw-skip — GFW Allowlist

Allowlist entries from GFWList — direct connection.

- [gfw-skip.list](https://github.com/dmulle12/rules/raw/rel/gfw-skip.list)
- [gfw-skip.quanx](https://github.com/dmulle12/rules/raw/rel/gfw-skip.quanx)

## loc-cn / loc-!cn — Domestic Direct / Overseas Proxy

- `loc-cn`: mainland China domains, direct connection.
- `loc-!cn`: non-mainland domains, via proxy. Both are designed for users in mainland China and are usually not needed abroad.

## Data Sources

Rule data comes from [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community) and the official [gfwlist/gfwlist](https://github.com/gfwlist/gfwlist), synced and rebuilt daily.
