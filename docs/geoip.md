# GeoIP Database

`chnroutes.mmdb` is a self-maintained mainland China IP database: built daily from
[Loyalsoldier/geoip](https://github.com/Loyalsoldier/geoip)'s `cn.txt`, covering about
9,600 CIDRs in the standard MaxMind `GeoLite2-Country` format. Works with Surge, Quantumult X and Loon.

Download:

```text
https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb
```

## Setup

::: code-group

```ini [Surge]
[General]
geoip-maxmind-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb
```

```ini [Quantumult X]
[general]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb
```

```ini [Loon]
[General]
geoip-url = https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb
```

:::

In Quantumult X you can also fill in the URL under "Other Settings → GeoLite2 → Source";
in Loon under "Settings → GeoLite2 Database".

## Use With Rules

::: code-group

```ini [Surge]
[Rule]
GEOIP,CN,China
```

```ini [Quantumult X]
[filter_local]
geoip,cn,China
```

```ini [Loon]
[Rule]
GEOIP,CN,China
```

```yaml [Clash]
rules:
  - GEOIP,CN,China
```

:::

::: tip Why
Domain rules (like `streaming-cn`) work at the domain level. If an app connects straight
to an IP with no domain involved, this IP-level `GEOIP,CN` fallback catches it and sends
it to your China policy.
:::
