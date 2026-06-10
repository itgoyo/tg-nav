export type NavLink = {
  label: string
  url: string
}

export type NavItem = {
  name: string
  links: NavLink[]
  description: string
}

export type NavSection = {
  id: string
  title: string
  subtitle?: string
  items: NavItem[]
}

export const siteConfig = {
  name: 'Telegram 中文导航站',
  shortName: 'Telegram 导航',
  title: 'Telegram 中文导航站 | 搜索机器人、机场节点、交易所与推广资源',
  description:
    '收录 Telegram 搜索机器人、推广资源、机场节点推荐与交易所 USDT/空投入口，提供中文用户常用电报导航。',
  keywords:
    'Telegram导航,电报导航,电报搜索机器人,机场推荐,USDT,币安,欧易,Telegram群组',
  siteUrl: 'https://telegram-nav.pages.dev',
}

export const sections: NavSection[] = [
  {
    id: '搜索机器人',
    title: '搜索机器人',
    subtitle:
      '中文用户名（如“杜罗夫”）更容易获得返利活动，建议优先用中文昵称搜索。',
    items: [
      { name: '新币搜索', links: [{ label: '@xbso', url: 'https://t.me/xbso1?start=a_7202424896' }], description: '搜索群、频道、影视、音乐、新闻等内容' },
      { name: 'SOSO 机器人', links: [{ label: '@soso', url: 'https://t.me/sosoo?start=a_8536680569' }], description: '关键词搜索群组/频道/视频，带“SOSO”后缀可赚取 0.5 USDT' },
      { name: '搜啦', links: [{ label: '@soula', url: 'https://t.me/soula?start=a_7202424896' }], description: '轻松搜索 Telegram 群组、频道、视频、音乐等资源' },
      { name: '极搜 JiSou', links: [{ label: '@jisou', url: 'https://t.me/jisou2?start=a_7202424896' }], description: '搜索群、频道、影视、音乐、新闻等内容' },
      { name: '神马搜索（签到送 USDT）', links: [{ label: '@smss', url: 'https://t.me/smss?start=spread_7202424896' }], description: '搜索群组资源，每日签到，连续 7 天送 3 USDT' },
      { name: '超级索引', links: [{ label: '@CJSY', url: 'https://t.me/CJSY?start=7202424896' }], description: '发送词语即可搜索关联群组与频道资源' },
      { name: '快搜', links: [{ label: '@kuai', url: 'https://t.me/kuai?start=a_3B44YPB' }], description: '发现有趣群组、频道、视频、音乐、电影、新闻' },
      { name: '🚀 免费节点', links: [{ label: 'vpnnav.github.io', url: 'https://vpnnav.github.io' }], description: '每天整点更新高速节点' },
      { name: '🚀 机场推荐', links: [{ label: '@jichangtuijian', url: 'https://github.com/vpnnav/jichangtuijian' }], description: '2026 年低价高速机场推荐、VPN 导航、机场大全' },
      { name: '赔钱机场', links: [{ label: '官网', url: 'https://xn--mes358aby2apfg.com/register?code=ZiP66w57' }], description: '全网最便宜机场，18 块 1000G 不限时流量' },
      { name: 'River VPN', links: [{ label: '官网', url: 'https://dash.hbwqf.com/#/register?code=wJBT57t1' }], description: '支持试用，用户量高，适合小白' },
      {
        name: '币圈学习资料',
        links: [
          { label: 'awesome-crypto', url: 'https://github.com/itgoyo/awesome-crypto' },
          { label: '币安', url: 'https://accounts.binance.com/zh-CN/register?ref=896983517' },
          { label: '欧易', url: 'https://www.chouyi.pro/zh-hans/join/50253981' },
        ],
        description: '币圈学习导航与交易所注册入口',
      },
      {
        name: '加密货币交流群',
        links: [
          { label: '@jmhbgroup', url: 'https://t.me/jmhbgroup' },
          { label: '币圈导航', url: 'https://www.0xnav.com' },
        ],
        description: '加密货币交流与导航入口',
      },
      {
        name: '币安交易所',
        links: [
          { label: '注册', url: 'https://accounts.binance.com/zh-CN/register?ref=FANXIAN' },
          { label: '币安 Alpha 教程', url: 'https://www.youtube.com/results?search_query=%E5%B8%81%E5%AE%89alpha' },
        ],
        description: '邀请码 FANXIAN，持有 BNB 可减免 40% 手续费',
      },
      {
        name: '欧易交易所',
        links: [{ label: '注册', url: 'https://www.okx.com/zh-hans/join/50253981' }],
        description: '邀请码 50253981，减免 30% 手续费；OKX Boost 邀请码 ZHUANMI',
      },
      {
        name: '⚡️能量闪租',
        links: [{ label: '地址', url: 'https://tronscan.org/#/address/TGuXv6H1s84cmQZk7akvWHC6P789999999' }],
        description: '1 笔 USDT 转账能量 3TRX；2 笔 USDT 转账能量 6TRX，地址：TGuXv6H1s84cmQZk7akvWHC6P789999999',
      },
      {
        name: '⚡️TRX 闪兑',
        links: [{ label: '地址', url: 'https://tronscan.org/#/address/TY4etzSftahyH5DYDMq5kDuPs93VVVVVVV' }],
        description: 'TRX-USDT 24 小时自动兑换，1U 起兑，地址：TY4etzSftahyH5DYDMq5kDuPs93VVVVVVV',
      },
      { name: '⚡️能量机器人', links: [{ label: '@trxsosobot', url: 'https://t.me/trxsosobot' }], description: '电报导航、闪兑、能量租赁、地址监听、会员开通' },
      {
        name: '💎 电报会员机器人',
        links: [
          { label: '@tg2vipbot', url: 'https://t.me/tg2vipbot' },
          { label: '@vip2tgbot', url: 'https://t.me/vip2tgbot' },
          { label: '通知群', url: 'https://t.me/nenglianghuiyuan' },
        ],
        description: '支持 USDT/微信/支付宝，1 秒克隆同款机器人',
      },
      {
        name: '💎 手动充值会员',
        links: [
          { label: 'faka.tg10000.com', url: 'https://faka.tg10000.com' },
          { label: '通知群', url: 'https://t.me/tgviptongzhi' },
        ],
        description: '手动开通会员（109–259 元），支持交易所红包支付',
      },
      { name: '🌈 彩虹群发器', links: [{ label: '购买链接', url: 'https://faka.tg10000.com/item/15#buy' }], description: '多账号管理·一键群发·自动加群·用户采集·智能炒群' },
      {
        name: '免费频道搬运机器人',
        links: [
          { label: '@xnby08bot', url: 'https://t.me/xnby08bot' },
          { label: '教程', url: 'https://www.youtube.com/watch?v=rV6vIMFTAPA' },
          { label: '通知群', url: 'https://t.me/xiunvyewu' },
        ],
        description: '频道搬运、备份、模仿，支持自定义广告按钮',
      },
      { name: '搜索群①', links: [{ label: '@sousuo20w', url: 'https://t.me/sousuo20w' }], description: '搜索任意资源（需过人机校验）' },
      { name: '搜索群②', links: [{ label: '@jiso5173', url: 'https://t.me/jiso5173' }], description: '搜索任意资源（需过人机校验）' },
      { name: '搜索群③', links: [{ label: '@jisoubar', url: 'https://t.me/jisoubar' }], description: '“极搜吧”，支持资源搜索（需过人机校验）' },
      { name: '搜索群④', links: [{ label: '@sepiansousuo', url: 'https://t.me/sepiansousuo' }], description: '搜索任意资源（需过人机校验）' },
      { name: '搜索群⑤', links: [{ label: '@kuaisou20w', url: 'https://t.me/kuaisou20w' }], description: '搜索任意资源（需过人机校验）' },
      { name: '👚AI 换装机器人', links: [{ label: '@Xai1314bot', url: 'https://t.me/Xai1314bot?start=NJOTH8D6MF7PYIL8' }], description: '智能换装换脸/视频换脸' },
      { name: '🍉 吃瓜无限', links: [{ label: '@chiguawuxian', url: 'https://t.me/chiguawuxian' }], description: '实时分享全网热门瓜' },
      { name: '东南亚大全', links: [{ label: '@dongnanyadaquan', url: 'https://t.me/dongnanyadaquan' }], description: '实时分享东南亚相关资讯' },
      { name: '🎥阿里云高清视频', links: [{ label: '@aliyungaoqingshipin', url: 'https://t.me/aliyungaoqingshipin' }], description: '阿里云盘分享交流频道' },
      { name: '科技第一线', links: [{ label: '@kejidiyixian', url: 'https://t.me/kejidiyixian' }], description: '分享热门科技新闻' },
      {
        name: '群组频道上粉丝人数',
        links: [
          { label: 'faka.tg10000.com', url: 'https://faka.tg10000.com' },
          { label: '业务通知频道', url: 'https://t.me/xiunvyewu' },
        ],
        description: '会掉落1000人/¥10，永久不掉落1000人/¥25',
      },
      {
        name: 'Telegram 涨粉业务',
        links: [
          { label: '店铺', url: 'https://faka.tg10000.com' },
          { label: '电报哥', url: 'https://www.youtube.com/@tgxiunv' },
          { label: '@tgxiunv', url: 'https://t.me/tgxiunv' },
        ],
        description: '全网低价电报业务，可用交易所红包支付',
      },
      {
        name: '📱 全网最全低价流量卡',
        links: [
          { label: '0元自助申请入口', url: 'https://h5.lot-ml.com/ProductEn/Index/5d4a5a4cfae41cab' },
          { label: '@tgsim172', url: 'https://t.me/tgsim172' },
        ],
        description: '三大运营商流量卡推广，热销 19 元 192G',
      },
    ],
  },
  {
    id: '推广',
    title: '推广',
    subtitle: '50U/月，其他导航站点广告位。',
    items: [
      { name: '运营商大数据', links: [{ label: '@jsdsj1', url: 'https://t.me/jsdsj1' }], description: '指定网站/APP 抓取，股票、贷款、助贷数据' },
      { name: 'debot', links: [{ label: '@debot', url: 'https://debot.ai?ref=240523' }], description: '自动检测聪明钱包买卖情况' },
      { name: 'gmgn.ai', links: [{ label: 'gmgn.ai', url: 'https://gmgn.ai/r/L2wVVjGF' }], description: 'Meme 币追踪、链上分析、复制交易与风险提示' },
      { name: 'hyperbot.network', links: [{ label: 'hyperbot.network', url: 'https://hyperbot.network?ic=0xf6E03ed6740fBCF3255F07FD1758824D1eA32a15' }], description: 'AI 链上合约交易平台，鲸鱼追踪+一键跟单' },
      { name: '奈飞小铺', links: [{ label: 'ihezu.fans', url: 'https://ihezu.fans/uqhwcn' }], description: '网飞/Spotify/Apple Music/油管/微软365合租，9 折码 FANXIAN' },
      { name: '环球巴士', links: [{ label: 'universalbus.cn', url: 'https://universalbus.cn/?s=2aKuBEBSZB' }], description: 'Netflix/ChatGPT/Gemini/油管/Grok，9 折码 FANXIAN' },
      { name: '方舟 Coding Plan', links: [{ label: 'volcengine', url: 'https://volcengine.com/L/-BM38uBifyU' }], description: '8.9 元/月聚合 Doubao、GLM、DeepSeek、Kimi' },
      { name: 'Agent-Skills', links: [{ label: 'awesome-agent-skills', url: 'https://github.com/itgoyo/awesome-agent-skills' }], description: '全网热门 Agent Skills 项目合集' },
      { name: '📱 全网最全低价流量卡', links: [{ label: '0元自助申请入口', url: 'https://h5.lot-ml.com/ProductEn/Index/5d4a5a4cfae41cab' }], description: '电信/移动/联通/广电流量卡与物联卡在线办理' },
      { name: '不用赴港申请 Wise 香港账户', links: [{ label: 'Wise', url: 'https://wise.com/invite/dic/xfp7e3v' }], description: '可选免费 Wise 借记卡或免手续费汇款机会' },
    ],
  },
  {
    id: '机场节点推荐',
    title: '机场节点推荐',
    items: [
      { name: '赔钱机场', links: [{ label: '官网', url: 'https://xn--mes358aby2apfg.com/register?code=ZiP66w57' }], description: '18块 1000G 不限时流量、2块钱月付' },
      { name: '闪连VPN', links: [{ label: '官网', url: 'https://lightningxvpn.com/download?inviteCode=55151480' }], description: '安全、稳定、快速网络连接' },
      { name: '一元机场', links: [{ label: '官网', url: 'https://xn--4gq62f52gdss.top/#/register?code=YS37AHYZ' }], description: '一元一个月' },
      { name: '狗狗加速', links: [{ label: '官网', url: 'https://go.dginv.click/#/register?code=ZyMzTvB7' }], description: '负载均衡，不限速，无审计，支持 Hysteria2' },
      { name: 'River VPN', links: [{ label: '官网', url: 'https://dash.hbwqf.com/#/register?code=wJBT57t1' }], description: '解锁全球视频网站、ChatGPT、Telegram、YouTube' },
      { name: 'FlyBit', links: [{ label: '官网', url: 'https://www.52fb.xyz/#/register?code=PCRCZ7uE' }], description: '月付10起，100GB/月，设备不限' },
      { name: 'SuperBiu', links: [{ label: '官网', url: 'https://biubiux.online/#/register?code=A2Qhd5vz' }], description: '¥9/月，50GB，IPLC 传输，支持流媒体/GPT' },
      { name: '老猫云', links: [{ label: '官网', url: 'https://laomao.biz?path=register&code=JGCKGHWa' }], description: 'Trojan+IEPL，最高 1000Mbps，50+ 节点' },
      { name: '放心云', links: [{ label: '官网', url: 'https://web1.wowfxy.com/#/register?code=Z0i3YPhk' }], description: '1000Mbps，不限速，3天免费试用' },
      { name: '易连VPN', links: [{ label: '官网', url: 'https://easylink.bar/register?code=1oqy2e26' }], description: '永久无限流量，1000Mbps，3天试用' },
      { name: '起帆', links: [{ label: '官网', url: 'https://www.qf1.us/#/register?code=ziz13huH' }], description: '支持 Hysteria，高速 8K 视频' },
      { name: 'Tomcat', links: [{ label: '官网', url: 'https://teacat.cloud/#/register?code=wcln0rZa' }], description: '12元50GB，性价比' },
      { name: '飞兔云', links: [{ label: '官网', url: 'https://xn--9kq10e0y7h.site/index.html?register=eA38wttl' }], description: '60+ 国家节点，全中转' },
      { name: '淘气兔', links: [{ label: '官网', url: 'https://www.taoqitu.me/index.html?register=1ab3e6wq' }], description: '4K 秒开，解锁流媒体/ChatGPT' },
      { name: 'FreeCloud', links: [{ label: '官网', url: 'https://asus.im/#/register?code=gzE3PgDa' }], description: '按流量计费不限时' },
      { name: 'FSCloud', links: [{ label: '官网', url: 'https://dash.996cloud.top/#/register?code=14lShPOs' }], description: '1元100G' },
      { name: '烤肠云', links: [{ label: '官网', url: 'https://reborn.kaochang.ltd/#/register?code=WE8qrNPG' }], description: '1元2G 测试套餐' },
      { name: 'M78星云', links: [{ label: '官网', url: 'https://m78star.cloud/#/register?code=MLBEu8Zi' }], description: '高端 IEPL/IPLC 线路，赠送 Emby' },
      { name: 'OKCLOUD机场', links: [{ label: '官网', url: 'https://okokcloud.top/#/register?code=vZRXNDss' }], description: '稳定高速 SS/SSR，7天试用' },
      { name: '魔戒', links: [{ label: '官网', url: 'https://mojie.info/#/register?code=vv0sB50W' }], description: 'Trojan/Vmess，流量包不限时' },
      { name: '尼尔云', links: [{ label: '官网', url: 'https://niercloud.com/#/register?code=rmfG8Tfl' }], description: '¥15/月，115GB' },
      { name: '青云梯机场', links: [{ label: '官网', url: 'https://qytaffcc01.qytaff.pro/register?aff=3kRr38Lo' }], description: '支持 Netflix、Disney+、ChatGPT' },
      { name: '飞天猪', links: [{ label: '官网', url: 'https://ftzaffcom01.fliggyaff.xyz/#/register?code=33L67N5N' }], description: 'Trojan+IEPL 专线，3000Mbps' },
      { name: 'v2lnk', links: [{ label: '官网', url: 'https://ftzaffcom01.fliggyaff.xyz/#/register?code=33L67N5N' }], description: '免费试用，一键连接，解锁 GPT' },
      { name: 'NiceDuck', links: [{ label: '官网', url: 'https://my.niceduck.io/register?code=b5QXpg3C' }], description: '高 SLA，赠送 3 家 Emby 资源' },
      { name: 'Hostbrr', links: [{ label: '官网', url: 'https://my.hostbrr.com/order/forms/a/NDc5NA==' }], description: '大硬盘存储 VPS，Hetzner 德国机房' },
      { name: 'BuyVM', links: [{ label: '官网', url: 'https://my.hostbrr.com/order/forms/a/NDc5NA==' }], description: '高性价比 VPS，卢森堡/美国机房' },
      { name: 'RackNerd', links: [{ label: '官网', url: 'https://my.racknerd.com/aff.php?aff=6211' }], description: 'VPS 主机，7 个美国机房可选' },
    ],
  },
  {
    id: '交易所',
    title: '交易所提币或者购买USDT、币圈撸空投',
    subtitle:
      '注册时务必使用邀请码，完成注册后通常不再享受永久减免。',
    items: [
      {
        name: '币安',
        links: [
          { label: '注册', url: 'https://accounts.binance.com/zh-CN/register?ref=FANXIAN' },
          { label: '币安 Alpha 教程', url: 'https://www.youtube.com/results?search_query=%E5%B8%81%E5%AE%89alpha' },
        ],
        description: '邀请码 FANXIAN，持有 BNB 可减免 20% 手续费',
      },
      { name: '欧易 OKX', links: [{ label: '注册', url: 'https://www.okx.com/zh-hans/join/50253981' }], description: '邀请码 50253981，减免 30% 手续费；Boost 邀请码 ZHUANMI' },
      { name: 'ByBit', links: [{ label: '注册', url: 'https://www.bybit.com/invite?ref=66QLX94' }], description: '邀请码 66QLX94，减免 30% 手续费' },
      { name: 'Bitget', links: [{ label: '注册', url: 'https://www.bitget.com/zh-CN/referral/register?clacCode=QR4A7MPY' }], description: '邀请码 4BUM7GXX，减免 40% 手续费' },
      { name: 'Gate.io', links: [{ label: '注册', url: 'https://www.gatenode.xyz/share/USDTOKOK' }], description: '邀请码 USDTOKOK，减免 40% 手续费' },
      { name: '火币 HTX', links: [{ label: '注册', url: 'https://www.htx.com.am/invite/zh-cn/1f?invite_code=xpi6a223' }], description: '邀请码 xpi6a223，减免 30% 手续费' },
      { name: '抹茶 MEXC', links: [{ label: '注册', url: 'https://promote.mexc.com/r/wIE7fPvG' }], description: '邀请码 wIE7fPvG，减免 40% 手续费' },
    ],
  },,

  {
    id: '机器人搭建',
    title: '机器人搭建',
    subtitle: '机器人定制开发可联系 @tgxiunv（只接小功能项目）。',
    items: [
      { name: '接机器人定制开发', links: [{ label: '@tgxiunv', url: 'https://t.me/tgxiunv' }], description: '小功能机器人项目开发' },
      { name: '免费频道搬运机器人', links: [{ label: '@xnby08bot', url: 'https://t.me/xnby08bot' }, { label: '教程', url: 'https://www.youtube.com/watch?v=rV6vIMFTAPA' }], description: '频道搬运、备份、模仿' },
      { name: '频道监听转发机器人', links: [{ label: '演示视频', url: 'https://www.youtube.com/watch?v=pqfTzfCFgxg' }, { label: '@tgxiunv', url: 'https://t.me/tgxiunv' }], description: '监听别的频道自动同步，100U' },
      { name: '关键字监听转发机器人', links: [{ label: '演示视频', url: 'https://www.youtube.com/watch?v=dB6d0IU5M9I' }, { label: '@tgxiunv', url: 'https://t.me/tgxiunv' }], description: '检测关键字并推送提醒，200U' },
      { name: '自动按钮机器人', links: [{ label: '@xiunvanniu1bot', url: 'https://t.me/xiunvanniu1bot' }, { label: '视频教程', url: 'https://www.youtube.com/watch?v=Wa0DL3Lj1Hs' }], description: '频道帖子按钮广告，50U' },
      { name: '频道导航网站', links: [{ label: 'tg10000.com', url: 'https://tg10000.com' }, { label: '搭建教程', url: 'https://www.bilibili.com/video/BV13b5izgE28' }], description: '频道导航站搭建，¥200' },
      { name: '独角数卡网站', links: [{ label: 'shop.tg10000.com', url: 'https://shop.tg10000.com' }], description: '单站¥150，站点+支付¥300 或 40U' },
      { name: '彩虹群发/强拉/炒群', links: [{ label: '官网', url: 'https://qunfaqi.github.io' }, { label: '购买', url: 'https://faka.tg10000.com/item/15#buy' }], description: '群发工具，¥199' },
    ],
  },
  {
    id: 'telegram官方',
    title: 'Telegram 电报官方',
    items: [
      { name: 'Spam Info Bot', links: [{ label: '@SpamBot', url: 'https://t.me/SpamBot/' }], description: '账号问题处理与申诉' },
      { name: 'BotFather', links: [{ label: '@BotFather', url: 'https://t.me/BotFather/' }], description: '创建与管理机器人' },
      { name: 'Stickers', links: [{ label: '@Stickers', url: 'https://t.me/Stickers/' }], description: '贴纸包管理' },
      { name: 'Telegraph', links: [{ label: '@Telegraph', url: 'https://t.me/Telegraph/' }], description: 'Telegraph 文章' },
      { name: 'Premium Bot', links: [{ label: '@PremiumBot', url: 'https://t.me/PremiumBot/' }], description: '官方会员购买' },
      { name: 'Wallet', links: [{ label: '@wallet', url: 'https://t.me/wallet/' }], description: '官方钱包机器人' },
      { name: 'MTProxy Admin Bot', links: [{ label: '@MTProxybot', url: 'https://t.me/MTProxybot/' }], description: 'MTProxy 管理' },
      { name: 'Verify Bot', links: [{ label: '@VerifyBot', url: 'https://t.me/VerifyBot/' }], description: '频道/群组/机器人认证' },
      { name: 'Username Bot', links: [{ label: '@username_bot', url: 'https://t.me/username_bot/' }], description: '申请被占用用户名' },
      { name: 'Fragment Auction Alerts', links: [{ label: '@fragment', url: 'https://t.me/fragment/' }], description: 'Fragment 拍卖通知' },
    ],
  },
  {
    id: '群组管理',
    title: '群组管理',
    items: [
      { name: 'Group Help', links: [{ label: '@GroupHelpBot', url: 'https://t.me/GroupHelpBot/' }], description: '群组管理' },
      { name: 'Rose', links: [{ label: '@MissRose_bot', url: 'https://t.me/MissRose_bot/' }], description: '经典群管机器人' },
      { name: 'KinhRoBot', links: [{ label: '@KinhRoBot', url: 'https://t.me/KinhRoBot/' }], description: '多功能群管' },
      { name: 'Policr Mini', links: [{ label: '@policr_mini_bot', url: 'https://t.me/policr_mini_bot/' }], description: 'Policr 迷你版' },
      { name: '方丈机器人', links: [{ label: '@fangzhang_bot', url: 'https://t.me/fangzhang_bot/' }], description: '群管理与防骚扰' },
      { name: 'NoAdsBot', links: [{ label: '@autodeletead_bot', url: 'https://t.me/autodeletead_bot/' }], description: '自动删广告' },
      { name: 'CaptchatBot', links: [{ label: '@Captchat_Bot', url: 'https://t.me/Captchat_Bot/' }], description: '入群验证码' },
      { name: 'The Join Captcha Bot', links: [{ label: '@join_captcha_bot', url: 'https://t.me/join_captcha_bot/' }], description: '入群验证' },
      { name: 'Cleaning Toolbox', links: [{ label: '@CleaningToolboxBot', url: 'https://t.me/CleaningToolboxBot/' }], description: '群组清理工具' },
      { name: 'Combot', links: [{ label: '@combot', url: 'https://t.me/combot/' }], description: '管理、分析、触发器' },
    ],
  },
  {
    id: '金融相关',
    title: '金融相关',
    items: [
      { name: '币圈日报', links: [{ label: 'bidaily', url: 'https://t.me/bidaily' }], description: '每日币圈新闻资讯' },
      { name: '撸空投·Web3·财务自由', links: [{ label: 'tglukongtou', url: 'https://t.me/tglukongtou' }], description: '空投与 Web3 资讯' },
      { name: '加密货币交流群', links: [{ label: 'jmhbgroup', url: 'https://t.me/jmhbgroup' }], description: '加密货币讨论' },
      { name: '金十数据 闪电资讯', links: [{ label: 'jin10shandian', url: 'https://t.me/jin10shandian' }], description: '财经快讯' },
      { name: '币安官方中文群', links: [{ label: 'BinanceChinese', url: 'https://t.me/BinanceChinese' }], description: '币安官方中文社群' },
      { name: '欧易OKX官方中文群', links: [{ label: 'OKXGroup_CN', url: 'https://t.me/OKXGroup_CN' }], description: 'OKX 官方中文社群' },
      { name: 'BlockBeats律动', links: [{ label: 'blockbeats_news', url: 'https://t.me/blockbeats_news' }], description: '区块链媒体资讯' },
      { name: '吴说区块链', links: [{ label: 'wublock', url: 'https://t.me/wublock' }], description: '行业新闻与深度' },
      { name: '币世界快讯', links: [{ label: 'NewsCoinSpace', url: 'https://t.me/NewsCoinSpace' }], description: '区块链快讯' },
      { name: '⚡️7×24投资快讯', links: [{ label: 'golden_wind_news', url: 'https://t.me/golden_wind_news' }], description: '全天投资快讯' },
    ],
  },
  {
    id: '社群',
    title: '社群',
    subtitle: '精选你发来的技术/开发/效率社群（后续可继续全量扩展）。',
    items: [
      { name: 'OpenClaw 小龙虾养殖基地', links: [{ label: 'openclaw_chat', url: 'https://t.me/openclaw_chat' }], description: 'OpenClaw 讨论群' },
      { name: 'Claude Code 中文社区', links: [{ label: 'claudecode_cn', url: 'https://t.me/claudecode_cn' }], description: 'Claude Code 中文交流' },
      { name: 'Newlearner IT社群', links: [{ label: 'NewlearnerGroup', url: 'https://t.me/NewlearnerGroup' }], description: 'IT 交流社群' },
      { name: 'V2EX 后花园', links: [{ label: 'goV2EX', url: 'https://t.me/goV2EX' }], description: 'V2EX 相关交流' },
      { name: 'Notion 中文社区', links: [{ label: 'Notionso', url: 'https://t.me/Notionso' }], description: 'Notion 经验分享' },
      { name: 'Rust 中文', links: [{ label: 'rust_zh', url: 'https://t.me/rust_zh' }], description: 'Rust 编程交流' },
      { name: 'Python 中文交流', links: [{ label: 'pythonzh', url: 'https://t.me/pythonzh' }], description: 'Python 学习交流' },
      { name: 'JavaScript 中文交流', links: [{ label: 'javascriptzh', url: 'https://t.me/javascriptzh' }], description: 'JavaScript 交流' },
      { name: 'TypeScript 中文交流', links: [{ label: 'typescriptzh', url: 'https://t.me/typescriptzh' }], description: 'TypeScript 交流' },
      { name: 'Frontend 前端中文技术交流', links: [{ label: 'frontend_talk', url: 'https://t.me/frontend_talk' }], description: '前端技术讨论' },
      { name: 'Bot 开发者交流群', links: [{ label: 'bot_dev_group', url: 'https://t.me/bot_dev_group' }], description: '机器人开发交流' },
      { name: 'Cloudflare 在中国', links: [{ label: 'CN_Cloudflare', url: 'https://t.me/CN_Cloudflare' }], description: 'Cloudflare 用户交流' },
      { name: 'The Devs Network', links: [{ label: 'thedevs.network', url: 'https://thedevs.network/' }], description: '开发者社区入口' },
      { name: 'Docker 学习交流', links: [{ label: 'dockertutorial', url: 'https://t.me/dockertutorial' }], description: 'Docker 讨论' },
      { name: 'RSSHub 社群', links: [{ label: 'rsshub', url: 'https://t.me/rsshub' }], description: 'Everything is RSSible' },
      { name: 'HN 中文社区', links: [{ label: 'hn_china', url: 'https://t.me/hn_china' }], description: '技术与创业讨论' },
      { name: '中英语言学习', links: [{ label: 'LinguisticAcademy', url: 'https://t.me/LinguisticAcademy' }], description: '语言学习交流' },
      { name: 'Windows/Mac/Linux 交流群', links: [{ label: 'zhucaidan', url: 'https://t.me/zhucaidan' }], description: '多平台系统交流' },
      { name: 'Google Voice 交流群', links: [{ label: 'googlevoice', url: 'https://t.me/googlevoice' }], description: 'GV 使用交流' },
      { name: '专业Linux', links: [{ label: 'professionallinux', url: 'https://t.me/professionallinux' }], description: 'Linux 交流' },
    ],
  },

]

export const allItems = sections.flatMap((section) =>
  section.items.map((item) => ({
    section: section.title,
    name: item.name,
    url: item.links[0]?.url ?? siteConfig.siteUrl,
    description: item.description,
  })),
)
