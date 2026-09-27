# GeoIP 库

`chnroutes.mmdb` 是自建的中国大陆 IP 库：每天从 [Loyalsoldier/geoip](https://github.com/Loyalsoldier/geoip) 的 `cn.txt`
构建，约 9600 个网段，标准 MaxMind `GeoLite2-Country` 格式。Surge、Quantumult X、Loon 通用。

下载地址：

```text
https://github.com/dmulle12/rules/raw/rel/chnroutes.mmdb
```

## 配置

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

QX 也可以在 App 内「其他设置 → GeoLite2 → 来源」填写上面的地址；Loon 在「设置 → GeoLite2 数据库」填写。

## 配合规则使用

::: code-group

```ini [Surge]
[Rule]
GEOIP,CN,回国
```

```ini [Quantumult X]
[filter_local]
geoip,cn,回国
```

```ini [Loon]
[Rule]
GEOIP,CN,回国
```

```yaml [Clash]
rules:
  - GEOIP,CN,回国
```

:::

::: tip 作用
域名规则（如 `streaming-cn`）是域名维度的。万一某个 App 直连 IP、不走域名，`GEOIP,CN` 这条 IP 维度的兜底能把它抓住送进回国节点。
:::
