/**
 * GG扑克网站 - 模拟数据源
 * 所有内容可配置，方便后续扩展
 */

export const siteConfig = {
  name: 'GG扑克',
  domain: 'ggpukett.com',
  title: 'GG扑克 - GGPoker中文官网',
  description: 'GG扑克中文官网，WSOP世界扑克系列赛官方合作平台',
  defaultLang: 'zh-CN'
};

// 战队成员数据
export const ambassadors = [
  {
    id: 1,
    name: 'Daniel Negreanu',
    chineseName: '丹牛',
    title: '“真正使我着迷的是GGPoker如此有趣、友好且引人入胜。”',
    bio: '六届WSOP金手链得主，扑克名人堂成员，全球最知名的扑克玩家之一，以出色的读牌能力和沟通技巧著称。',
    avatar: '/assets/images/daniel.webp'
  },
  {
    id: 2,
    name: 'Fedor Holz',
    chineseName: '菲德·霍尔兹',
    title: '“打牌让我在现实生活中学会了如何抉择。”',
    bio: '现代扑克传奇人物，多次获得大型锦标赛冠军，擅长线上高额桌游戏，是年轻一代牌手的标杆。',
    avatar: '/assets/images/fedor.webp'
  },
  {
    id: 3,
    name: 'Tony Lin',
    chineseName: 'Tony Lin',
    title: '“No Game， No Future. Just do it”',
    bio: '早期，Tony活跃于各类低额锦标赛；如今，他已成为国际间知名的中国豪客赛玩家。从踏上扑克之路开始，他至今参加了各种经典赛事，在线下及GG扑克线上赛事都展现了高超牌技。他友善、热心的形象使其在中国牌迷间拥有相当高的人气。',
    avatar: '/assets/images/tony.webp'
  },
  {
    id: 4,
    name: 'Andy Stacks',
    chineseName: 'Andy Stacks',
    title: 'GG扑克品牌大使',
    bio: 'Andy是目前亚洲最具影响力的扑克玩家之一，他在牌桌上的形象以沉默而闻名，筹码堆得很高， 被称为“沉默的杀手”。2019年，Andy开始在WSOP主赛事追逐他的金手链。现在，他是GG扑克的官方品牌大使。',
    avatar: '/assets/images/andy.webp'
  }
];

// 游戏特色功能
export const gameFeatures = [
  {
    id: 'smart-betting',
    name: '智能下注',
    description: 'AI辅助下注计算，根据底池赔率、位置和对手范围给出建议，帮助新手快速提升决策水平。',
    icon: 'calculator'
  },
  {
    id: 'smart-tools',
    name: '智能工具箱',
    description: '集成范围分析、赔率计算、手牌记录等多种实用工具，一站式满足你的分析需求。',
    icon: 'toolbox'
  },
  {
    id: 'hand-history',
    name: '战绩系统',
    description: '详细记录每一手牌，支持数据导出和分析，帮助你总结经验，持续提高牌技。',
    icon: 'chart'
  },
  {
    id: 'nft-avatars',
    name: 'NFT特殊头像',
    description: '独家限量NFT头像，彰显尊贵身份，支持交易收藏，打造独一无二的游戏体验。',
    icon: 'avatar'
  },
  {
    id: 'tournament-shares',
    name: '赛事股份',
    description: '支持购买大型赛事选手股份，低门槛参与高额奖励，与顶尖选手一同成长。',
    icon: 'share'
  },
  {
    id: 'straddle',
    name: 'Straddle',
    description: '支持straddle玩法，增加游戏刺激性，满足不同玩家对游戏节奏的需求。',
    icon: 'game'
  }
];

// 锦标赛数据
export const tournaments = [
  {
    id: 'high-roller',
    name: '豪客赛',
    type: 'championship',
    description: '专为顶尖牌手准备的高额赛事，保底奖金池千万起步，冠军奖励丰厚，挑战你的极限。',
    guarantee: '¥10,000,000+',
    frequency: '每周日',
    badge: '高额'
  },
  {
    id: 'zodiac',
    name: '生肖专属赛',
    type: 'championship',
    description: '特色主题赛事，每月对应生肖选手可获得额外奖励，趣味性与收益性并存。',
    guarantee: '¥1,888,888',
    frequency: '每月',
    badge: '特色'
  },
  {
    id: 'daily-guaranteed',
    name: '每日常规保底赛',
    type: 'championship',
    description: '每天多场保底赛事，不同买入级别满足各类玩家，稳定参赛稳定收获。',
    guarantee: '¥500,000+/日',
    frequency: '每日多场',
    badge: '常规'
  },
  {
    id: 'bounty-hunter',
    name: '赏金猎人',
    type: 'championship',
    description: '淘汰对手即可获得即时赏金，越往后打奖励越丰厚，适合侵略型打法玩家。',
    guarantee: '¥2,000,000',
    frequency: '每周',
    badge: '热门'
  },
  {
    id: 'omaha',
    name: '奥马哈迷',
    type: 'championship',
    description: '专为奥马哈爱好者打造的专项赛事，多样赛制结构，发掘奥马哈玩法乐趣。',
    guarantee: '¥800,000',
    frequency: '每周六',
    badge: '专项'
  },
  {
    id: 'tournament-fund',
    name: '锦标赛基金',
    type: 'championship',
    description: '参赛累积基金，达标即可获得免费门票参与额外抽奖，人人都有机会。',
    guarantee: '月月更新',
    frequency: '长期活动',
    badge: '福利'
  }
];

// 资讯文章数据
export const articles = [
  {
    id: 1,
    title: 'WSOP 2026主赛事即将开赛，GG扑克预选赛火热进行中',
    excerpt: '世界扑克系列赛WSOP 2026主赛事即将在拉斯维加斯拉开帷幕，GG扑克作为官方合作平台，为中国玩家提供多条线上预选席位...',
    content: `
      <img src="/assets/images/hero-casino.jpg" alt="WSOP赛事" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: var(--spacing-6);">
      <p>世界扑克系列赛（WSOP）2026主赛事即将于今年夏季在拉斯维加斯正式拉开帷幕。作为WSOP官方合作平台，GG扑克日前已经启动了线上预选赛，中国玩家可以通过线上卫星赛获得主赛事席位，无需长途奔波即可圆梦金手链。</p>

      <h2>预选赛赛制介绍</h2>

      <p>本次预选赛分为多个阶段：</p>

      <ul>
        <li>每日资格赛：低买入，高产出，每天产出多个晋级席位</li>
        <li>每周半决赛：汇聚每日资格赛胜者，产生最终决赛席位</li>
        <li>月度总决赛：胜出者将获得WSOP主赛事套餐包含席位+差旅费</li>
      </ul>

      <p>相比于直接购买主赛事席位，通过预选赛晋级成本更低，也更符合扑克竞技的精神。许多知名牌手都是从预选赛一步步打出，最终站上了冠军领奖台。</p>

      <h2>GG扑克玩家专属福利</h2>

      <p>所有参与本次预选赛的GG扑克玩家，无论是否最终晋级，都可以获得GG扑克送出的参与奖励，包括赛事积分、现金优惠券等。连续参与还能累积额外奖励。</p>

      <p>赶紧下载GG扑克客户端，参与到这场全球扑克盛宴中来吧！</p>
    `,
    category: '赛事',
    date: '2026-03-15',
    image: '/assets/images/hero-casino.jpg',
    seoTitle: 'WSOP 2026主赛事即将开赛，GG扑克预选赛火热进行中',
    seoDescription: 'WSOP 2026主赛事即将开赛，GG扑克作为官方合作平台，线上预选赛火热进行中，中国玩家可通过线上卫星赛获得主赛事席位。'
  },
  {
    id: 2,
    title: '德州扑克进阶：位置策略深度解析',
    excerpt: '位置是德州扑克中最重要的因素之一，好的位置可以让你获得更大的优势。本文深度解析不同位置的打法策略...',
    content: `
      <img src="/assets/images/playing-cards.jpg" alt="德州扑克策略" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: var(--spacing-6);">
      <p>在德州扑克中，位置是决定打法策略最重要的因素之一。很多新手玩家往往忽略位置的重要性，导致赢率始终无法提升。今天我们就来深度解析位置策略。</p>

      <h2>为什么位置如此重要？</h2>

      <p>位置优势体现在两个方面：</p>
      <ul>
        <li>后行动优势：你可以在看到对手的动作之后再做决策，获得更多信息</li>
        <li>底池控制：位置好更容易控制底池大小，实现预期价值最大化</li>
      </ul>

      <p>简单来说，同样的手牌在好位置比在差位置的赢率高出很多。职业牌手会在不同位置采用差别极大的起手牌范围。</p>

      <h2>不同位置打法建议</h2>

      <p><strong>早位置（枪口+ Hijack）：</strong>收紧范围，只打顶级牌力，避免陷入复杂局面。</p>
      <p><strong>中位置（Cutoff）：</strong>范围适度放宽，可以开始混合一些诈唬牌。</p>
      <p><strong>晚位置（Button+SB）：</strong>范围最宽，利用位置优势偷盲和抢夺底池。</p>

      <h2>实战运用技巧</h2>

      <p>在实战中，你需要根据对手的风格调整自己的范围。面对紧弱对手，可以在晚位置扩大偷盲范围；面对激进对手，则需要收紧范围，用更强的牌跟注或3bet。</p>

      <p>记住：位置是德州扑克中最好的"武器"，学会利用位置优势，你的赢率会有质的提升。</p>
    `,
    category: '技巧',
    date: '2026-03-10',
    image: '/assets/images/playing-cards.jpg',
    seoTitle: '德州扑克进阶：位置策略深度解析',
    seoDescription: '位置是德州扑克中最重要的因素之一，本文深度解析不同位置的打法策略，帮助你提升赢率。'
  },
  {
    id: 3,
    title: 'GG扑克推出NFT头像系统，开启数字收藏新时代',
    excerpt: 'GG扑克近日推出全新NFT特殊头像系统，玩家可以拥有独一无二的区块链头像，支持交易转让...',
    content: `
      <img src="/assets/images/poker-chips.jpg" alt="扑克筹码" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: var(--spacing-6);">
      <p>GG扑克近日正式推出NFT特殊头像系统，成为行业内率先拥抱区块链技术的在线扑克平台。这一创新功能为玩家带来了全新的数字收藏体验。</p>

      <h2>NFT头像有什么特别？</h2>

      <p>每个GG扑克NFT头像都记录在区块链上，具有以下特点：</p>
      <ul>
        <li>独一无二：每个头像都是唯一的，不会重复</li>
        <li>真正拥有：所有权属于玩家，可转让可交易</li>
        <li>稀缺限量：限量发行，具有收藏价值</li>
        <li>游戏特权：部分高级头像享有游戏内特权</li>
      </ul>

      <h2>如何获得NFT头像？</h2>

      <p>玩家可以通过以下方式获得：</p>
      <ol>
        <li>参与特定赛事，前三名可获得限量头像</li>
        <li>在平台市场购买其他玩家出让的头像</li>
        <li>节日活动空投，活跃玩家有机会免费获得</li>
      </ol>

      <p>GG扑克表示，未来会推出更多与NFT相关的功能，包括专属赛事资格、社区特权等，持续为玩家创造更多价值。</p>
    `,
    category: '新闻',
    date: '2026-03-05',
    image: '/assets/images/poker-chips.jpg',
    seoTitle: 'GG扑克推出NFT头像系统，开启数字收藏新时代',
    seoDescription: 'GG扑克推出全新NFT特殊头像系统，玩家可以拥有独一无二的区块链头像，支持交易转让，开启数字收藏新时代。'
  },
  {
    id: 4,
    title: '如何正确管理你的扑克资金',
    excerpt: '资金管理是长期盈利的关键，很多牌手技术不错但由于资金管理不当最终破产。本文分享职业牌手的资金管理原则...',
    content: `
      <img src="/assets/images/news-bankroll.jpg" alt="扑克牌" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: var(--spacing-6);">
      <p>在扑克这项运动中，技术很重要，但资金管理更重要。很多技术不错的牌手由于不正确的资金管理，在方差面前最终破产。今天我们就来聊聊职业牌手遵循的资金管理原则。</p>

      <h2>为什么需要资金管理？</h2>

      <p>即使你是赢率为正的牌手，由于扑克存在方差，短期内仍然可能连续输牌。如果没有足够的资金储备，很可能在翻盘之前就已经破产。</p>

      <h2>现金桌资金管理标准</h2>

      <p>职业牌手普遍遵循的标准是：</p>
      <ul>
        <li>无限注德州扑克：至少持有20-30个大盲注的买入</li>
        <li>如果你打的是深码游戏，建议30-40个买入</li>
        <li>风格越激进，需要的资金储备越多</li>
      </ul>

      <p>举个例子：如果你打10/20的游戏，买入是2000筹码，那么你至少需要4万-6万的资金储备。</p>

      <h2>锦标赛资金管理</h2>

      <p>锦标赛由于方差更大，需要更多的资金储备：</p>
      <ul>
        <li>多桌锦标赛：建议50-100个买入</li>
        <li>SNG单挑：建议100+个买入</li>
      </ul>

      <h2>升降级原则</h2>

      <p>当你的资金增长到可以支持更高级别时，可以升级；当资金下降到低于标准的50%时，必须降级。严格执行这个原则，才能在扑克路上走得长远。</p>
    `,
    category: '技巧',
    date: '2026-02-28',
    image: '/assets/images/news-bankroll.jpg',
    seoTitle: '如何正确管理你的扑克资金',
    seoDescription: '资金管理是长期盈利的关键，本文分享职业牌手的资金管理原则，帮助你在扑克道路上走得更远。'
  },
  {
    id: 5,
    title: '生肖专属赛三月赛事开启，龙年特别奖励等你来',
    excerpt: '三月生肖专属赛正式开启，今年是龙年，所有属龙的玩家参与即可获得额外20%奖励...',
    content: `
      <img src="/assets/images/news-zodiac.jpeg" alt="GG扑克赛事" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: var(--spacing-6);">
      <p>GG扑克每月特色赛事——生肖专属赛三月场次正式开启。今年是龙年，三月生肖赛为龙年特别版，准备了丰厚的额外奖励。</p>

      <h2>赛事规则</h2>

      <p>生肖专属赛是GG扑克独创的特色赛事，规则很简单：</p>
      <ul>
        <li>当月对应生肖的玩家，在比赛中每淘汰一名对手即可获得额外奖励</li>
        <li>最终进入奖励圈的生肖玩家，奖金乘以1.2倍</li>
        <li>冠军如果是对应生肖，额外赠送十万积分大奖</li>
      </ul>

      <h2>三月龙年特别福利</h2>

      <p>今年是农历龙年，三月份的生肖赛特别升级：</p>
      <ul>
        <li>保底奖金池从原来的188万提升到888万</li>
        <li>所有属龙玩家参赛免门票费</li>
        <li>冠军额外获得龙年特制NFT金龙头像</li>
      </ul>

      <p>赶紧登录GG扑克客户端，报名参与三月生肖专属赛吧！</p>
    `,
    category: '活动',
    date: '2026-02-25',
    image: '/assets/images/news-zodiac.jpeg',
    seoTitle: '生肖专属赛三月赛事开启，龙年特别奖励等你来',
    seoDescription: '三月生肖专属赛正式开启，今年是龙年，所有属龙的玩家参与即可获得额外20%奖励，还有特制NFT头像。'
  }
];

// SEO配置数据 - 每个路由对应不同的SEO信息
export const routeSEO = {
  '/': {
    title: 'GG扑克 - GGPoker中文官网 | WSOP官方合作平台',
    description: 'GG扑克中文官网，WSOP世界扑克系列赛官方合作平台，提供专业扑克赛事、安全公平游戏环境，支持多设备畅玩。立即下载体验！',
    keywords: 'GG扑克,GGPoker,GGpuketi,WSOP,扑克赛事,德扑,德州扑克'
  },
  '/tournaments': {
    title: '赛事专区 - GG扑克中文官网',
    description: 'GG扑克赛事专区，汇集豪客赛、赏金猎人、生肖赛等各类精彩赛事，天天有比赛，月月有大奖。',
    keywords: 'GG扑克赛事,德州扑克赛事,GGpuketi赛事'
  },
  '/news': {
    title: '最新报道 - GG扑克中文官网',
    description: '最新GG扑克活动资讯，德州扑克技巧教学，世界扑克赛事报道，关注我们获取最新信息。',
    keywords: 'GG扑克新闻,德州扑克技巧,扑克资讯'
  },
  '/team': {
    title: '品牌战队 - GG扑克中文官网',
    description: 'GG扑克品牌战队，由多位世界冠军组成，包括Daniel Negreanu、Fedor Holz等扑克传奇。',
    keywords: 'GG扑克战队,品牌大使,GG扑克代言人'
  },
  '/games': {
    title: '游戏特色 - GG扑克中文官网',
    description: 'GG扑克创新游戏功能，智能下注、智能工具箱、战绩分析、NFT头像，带给你顶尖游戏体验。',
    keywords: 'GG扑克功能,智能下注,游戏特色'
  },
  '/download': {
    title: '游戏下载 - GG扑克中文官网',
    description: '下载GG扑克客户端，支持Windows、Mac、iOS、Android多平台，立即安装开启你的扑克之旅。',
    keywords: 'GG扑克下载,GGPoker下载,GG扑克客户端'
  }
};

// 游戏特色详情
export function getGameFeatureById(id) {
  return gameFeatures.find(f => f.id === id);
}

// 获取锦标赛详情
export function getChampionshipById(id) {
  return tournaments.find(t => t.id === id);
}

// 获取文章列表
export function getArticles(limit = null) {
  if (limit) {
    return articles.slice(0, limit);
  }
  return articles;
}

// 获取文章详情
export function getArticleById(id) {
  return articles.find(a => a.id === parseInt(id));
}
