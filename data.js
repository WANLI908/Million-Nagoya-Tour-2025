// data.js - 完整附錄整合版
const itineraryData = [
  {
    day: "D1",
    title: "抵達名古屋",
    date: "Day 1",
    location: "Nagoya Station",
    weatherQuery: "Nagoya,JP",
    events: [
      {
        time: "20:50",
        type: "transport",
        title: "抵達中部國際機場",
        desc: "入境約 10-25 分鐘。名鐵售票口位於入境大廳左側。",
        tips: "【親子提醒】若孩子會睡著，建議買 μSKY 兒童指定席；若可抱著則免票 (4歲以下)。",
        transportInfo: {
            route: "名鐵 μSKY (指定席)",
            price: "成人 ¥1,250 / 兒童 ¥630",
            color: "名鐵紅"
        },
        icon: "🛬"
      },
      {
        time: "22:00",
        type: "food",
        title: "晚餐：味仙 (名古屋駅前店)",
        desc: "距離飯店近，出餐快。推薦「台式拉麵 (American版不辣)」、青菜、炒飯。",
        tags: ["必吃:台式拉麵", "營業至23:00"],
        budget: "¥1,000-¥1,800",
        nav: "https://maps.google.com/?q=味仙+名古屋駅前店",
        alternatives: [
            { name: "世界的山ちゃん (名駅店)", desc: "夢幻手羽先(雞翅)、兒童可吃炒飯/玉子燒", nav: "https://maps.google.com/?q=世界の山ちゃん+名駅店" },
            { name: "便利商店宵夜", desc: "Lawson/7-11 炸雞串、飯糰、沙拉", type: "takeout" }
        ]
      },
      {
        time: "23:00",
        type: "shop",
        title: "隔日早餐補給",
        desc: "建議回飯店前先買好明天的早餐與水。",
        nav: "https://maps.google.com/?q=MaxValu+Taiko",
        shoppingList: [
            "大瓶礦泉水 (便宜)",
            "麵包/飯糰",
            "優格/牛奶",
            "MaxValu 超市 (步行12分) 24hr",
            "Lawson/7-11 (步行1-3分)"
        ]
      }
    ]
  },
  {
    day: "D2",
    title: "樂高樂園 LEGOLAND",
    date: "Day 2",
    location: "Legoland Japan",
    weatherQuery: "Nagoya,JP",
    events: [
      {
        time: "08:30",
        type: "transport",
        title: "前往金城ふ頭",
        desc: "搭乘青波線 (Aonami Line)。",
        transportInfo: {
            route: "あおなみ線",
            price: "成人 ¥870 / 兒童 ¥440 (一日券更划算)",
            note: "4歲免票",
            color: "深藍色"
        },
        nav: "https://maps.google.com/?q=名古屋駅青波線"
      },
      {
        time: "09:30",
        type: "spot",
        title: "樂園攻略：第一輪必玩",
        desc: "入園後直衝最深處，避開人潮。",
        tips: "【動線】Ninjago (忍者) → Submarine Adventure (潛水艇) → Lost Kingdom (射擊)。",
        photoSpots: [
            "入園口巨型樂高恐龍",
            "MiniLand 迷你樂園 (室內休息好去處)"
        ]
      },
      {
        time: "12:00",
        type: "food",
        title: "午餐：三大主餐店",
        desc: "建議 11:30 前用餐避開人潮。",
        tags: ["親子餐廳"],
        alternatives: [
            { name: "Brick House Burger", desc: "樂高造型漢堡 (出餐最快)", budget: "¥1,200~" },
            { name: "Coral Reef Pizza", desc: "義大利麵/披薩吃到飽", budget: "¥1,800~" },
            { name: "Chicken Diner", desc: "炸雞兒童餐", budget: "¥1,000~" }
        ]
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐：天むす 千壽 (炸蝦飯糰)",
        desc: "位於 JR 高島屋 B1。最省時方案，買回飯店吃。",
        tags: ["外帶美食", "必吃:炸蝦飯糰"],
        nav: "https://maps.google.com/?q=天むす+千壽+JR高島屋",
        alternatives: [
            { name: "まるは食堂 (名古屋港店)", desc: "靠近水族館，炸蝦定食", nav: "https://maps.google.com/?q=まるは食堂+名古屋港店" },
            { name: "世界的山ちゃん", desc: "外帶雞翅回飯店", nav: "https://maps.google.com/?q=世界の山ちゃん+名駅店" }
        ]
      }
    ]
  },
  {
    day: "D3",
    title: "白川鄉・高山一日遊",
    date: "Day 3",
    location: "Shirakawa-go",
    weatherQuery: "Shirakawa,JP",
    events: [
      {
        time: "08:45",
        type: "transport",
        title: "名鐵巴士中心集合",
        desc: "4F 太閤通口銀時計下，請提前 15 分鐘抵達。",
        transportInfo: {
            route: "KKday 巴士團",
            note: "4歲小孩含座位 (不需抱)",
            gear: "車上可穿薄長袖，下車需厚外套"
        },
        nav: "https://maps.google.com/?q=名鐵巴士中心"
      },
      {
        time: "11:30",
        type: "food",
        title: "午餐：高山老街三選一",
        desc: "上三之町商店街。",
        alternatives: [
            { name: "飛驒牛飯 匠家", desc: "【主推】小孩友善、出餐快、有飛驒牛丼", budget: "¥1,800~", nav: "https://maps.google.com/?q=肉の匠家+安川店" },
            { name: "味の与平", desc: "品質最好，鐵板/陶板燒", budget: "¥2,500~", nav: "https://maps.google.com/?q=味の与平" },
            { name: "丸明", desc: "A5飛驒牛燒肉，若排隊短非常值得", budget: "¥2,800~", nav: "https://maps.google.com/?q=丸明+高山" }
        ]
      },
      {
        time: "12:30",
        type: "food",
        title: "高山老街小吃 (邊走邊吃)",
        desc: "小吃幾乎 3-5 分鐘可吃完。",
        tags: ["散策"],
        shoppingList: [
            "金乃こって牛 (飛驒牛壽司三貫)",
            "ぜん助 (飛驒牛串)",
            "五平餅"
        ]
      },
      {
        time: "14:30",
        type: "spot",
        title: "白川鄉合掌村",
        desc: "請穿著防滑鞋。不建議推車。",
        photoSpots: [
            "河岸邊「合掌造 3 棟」 (經典視角)",
            "合掌民家前木牌區",
            "小河橋拍對岸倒影",
            "積雪屋簷與小路交叉口"
        ],
        tips: "不建議帶4歲小孩去「城山展望台」(路滑+接駁車排隊久)。"
      },
      {
        time: "19:00",
        type: "food",
        title: "晚餐：しら河 (鰻魚三吃)",
        desc: "清爽口味，榮 Gas Building 店。",
        tags: ["名古屋名物", "預算:¥3000"],
        nav: "https://maps.google.com/?q=しら河+栄ガスビル",
        alternatives: [
            { name: "ひつまぶし備長 (JR高島屋)", desc: "排隊較久但位置方便", nav: "https://maps.google.com/?q=ひつまぶし備長+名古屋" }
        ]
      }
    ]
  },
  {
    day: "D4",
    title: "吉卜力公園・大倉庫",
    date: "Day 4",
    location: "Ghibli Park",
    weatherQuery: "Nagakute,JP",
    events: [
      {
        time: "08:30",
        type: "transport",
        title: "前往吉卜力公園",
        desc: "地鐵東山線 (黃色) → 藤が丘 → 轉乘 Linimo (綠色)。",
        transportInfo: {
            route: "地鐵+Linimo",
            price: "成人 ¥760+¥380 / 4歲免票",
            time: "約 50 分鐘"
        }
      },
      {
        time: "10:00",
        type: "spot",
        title: "吉卜力大倉庫 (Grand Warehouse)",
        desc: "全室內，請先將推車寄放於入口。",
        tips: "【必看區域】1. 龍貓隧道 (Cat Bus) 2. 飛行造型展區 3. 無臉男拍照區 (名場面) 4. 借物少女場景。",
        photoSpots: [
            "中央大樓梯 (馬賽克磁磚)",
            "無臉男電車場景"
        ]
      },
      {
        time: "13:00",
        type: "food",
        title: "午餐：AEON 長久手",
        desc: "距離公園一站 (公園北站)，選擇多且親子友善。",
        tags: ["購物", "美食街"],
        nav: "https://maps.google.com/?q=AEON+Mall+Nagakute",
        shoppingList: [
            "玩具反斗城 (很大)",
            "3F 兒童用品區",
            "Seria 百元店"
        ]
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐：備選清單",
        desc: "回到名古屋站周邊。",
        alternatives: [
            { name: "世界の山ちゃん", desc: "手羽先、炒飯 (親子適宜)", nav: "https://maps.google.com/?q=世界の山ちゃん+名駅店" },
            { name: "味仙", desc: "台灣拉麵 (若D1沒吃到)", nav: "https://maps.google.com/?q=味仙+名古屋駅前店" }
        ]
      }
    ]
  },
  {
    day: "D5",
    title: "Outlet & 名花之里",
    date: "Day 5",
    location: "Nabana no Sato",
    weatherQuery: "Kuwana,JP",
    events: [
      {
        time: "09:10",
        type: "transport",
        title: "前往長島 Outlet",
        desc: "名鐵巴士中心 4F。",
        transportInfo: {
            route: "ゆったりパック套票",
            price: "成人 ¥3,000 (含車票+門票+購物金)",
            note: "回程搭 μSKY 需劃位"
        }
      },
      {
        time: "10:10",
        type: "shop",
        title: "三井 Outlet 爵士之夢",
        desc: "推薦動線：入口 → North Area (精品/運動) → South Area (生活/兒童)。",
        tips: "South Area 有樂高、麵包超人童裝 (petit main, BREEZE)。",
        nav: "https://maps.google.com/?q=Jazz+Dream+Nagashima",
        food: "午餐推薦：矢場味噌豬排 (餐廳區)、VANSAN (義大利麵/親子友善)。"
      },
      {
        time: "16:00",
        type: "spot",
        title: "名花之里燈會",
        desc: "日本最大燈海。17:00-18:00 點燈。",
        photoSpots: [
            "光之隧道",
            "大草坪主燈秀",
            "鏡池 (紅葉倒影)"
        ],
        tips: "【重要】戶外非常冷，請務必戴手套、圍巾。溫室「Begonia Garden」是免費且溫暖的休息點。"
      }
    ]
  },
  {
    day: "D6",
    title: "牧歌之里玩雪",
    date: "Day 6",
    location: "Bokka no Sato",
    weatherQuery: "Gujo,JP",
    events: [
      {
        time: "09:10",
        type: "transport",
        title: "前往牧歌之里",
        desc: "搭乘 KKday 巴士團。",
        tips: "【裝備檢查】墨鏡 (雪盲)、防水手套 (必備)、防滑靴、備用襪子 (濕了可換)。"
      },
      {
        time: "10:30",
        type: "spot",
        title: "冰雪樂園",
        desc: "適合4歲：滑雪盆 (Sledding)、堆雪人、餵羊。",
        tips: "注意：氣溫高時地面會有『融雪』，非常濕滑，走路請走雪厚的地方。",
        food: "午餐：園區內『ふる里亭』(牛奶鍋、咖哩飯)。"
      },
      {
        time: "15:00",
        type: "spot",
        title: "牧華溫泉",
        desc: "玩雪後直接泡湯。有毛巾租借。",
        tips: "日本公共澡堂需裸湯，刺青需遮蓋。泡完記得喝瓶飛驒牛奶。"
      }
    ]
  },
  {
    day: "D7",
    title: "科學館・大須・購物",
    date: "Day 7",
    location: "Sakae",
    weatherQuery: "Nagoya,JP",
    events: [
      {
        time: "10:00",
        type: "spot",
        title: "名古屋市科學館",
        desc: "直奔 2F 兒童科學館、3F 放電實驗。",
        nav: "https://maps.google.com/?q=名古屋市科學館",
        tips: "B2 恐龍骨架是隱藏亮點。門票成人¥400，中學生以下免費。"
      },
      {
        time: "14:00",
        type: "food",
        title: "大須商店街",
        desc: "週末人多，推車建議摺疊。",
        tags: ["邊走邊吃"],
        shoppingList: [
            "金魚虎燒 (金魚造型鯛魚燒)",
            "五平餅 (味噌烤飯糰)",
            "Alice on Wednesday (愛麗絲專賣店)",
            "Seria 百元店 (大型店)"
        ],
        nav: "https://maps.google.com/?q=大須觀音通"
      },
      {
        time: "15:15",
        type: "shop",
        title: "唐吉軻德 (榮本店) 掃貨",
        desc: "大型旗艦店。1F 伴手禮，2F 藥妝，3F 兒童。",
        tips: "建議媽媽逛藥妝，爸爸帶小孩去 3F 玩玩具或看魚。",
        nav: "https://maps.google.com/?q=Don+Quijote+Sakae",
        shoppingList: [
            "【零食】麵包超人餅乾盒",
            "【零食】Jagabee 薯條 (盒裝)",
            "【零食】KitKat 抹茶/草莓口味",
            "【藥妝】Rohto V5 眼藥水 (金色/銀色)",
            "【藥妝】Muhi 麵包超人止癢貼",
            "【藥妝】PAIR 痘痘藥",
            "【兒童】麵包超人牙刷 3入組",
            "【兒童】泡澡球 (內含玩具)"
        ]
      }
    ]
  },
  {
    day: "D8",
    title: "回程",
    date: "Day 8",
    location: "Chubu Airport",
    weatherQuery: "Tokoname,JP",
    events: [
      {
        time: "09:00",
        type: "transport",
        title: "中部國際機場 (Centrair)",
        desc: "報到後，可至 4F 藍天城逛逛。",
        tips: "若行李已托運，可帶小孩去機場的『兒童遊戲區』放電 (2F)。"
      },
      {
        time: "10:00",
        type: "shop",
        title: "最後補貨：必買伴手禮",
        desc: "入關前/後都有商店。",
        shoppingList: [
            "蝦仙貝之里 (えびせんべいの里) - 綜合包",
            "坂角總本舖 - 蝦餅 (高級送禮)",
            "世界的山ちゃん - 手羽先口味餅乾/真空包",
            "赤福 (紅豆麻糬) - 保存期限短，需當天吃"
        ]
      }
    ]
  }
];

const infoData = {
  hotel: {
    name: "Daiwa Roynet Hotel Nagoya Taiko-dori Side",
    address: "名古屋市中村區椿町 18-10",
    checkIn: "14:00",
    checkOut: "11:00",
    phone: "+81-52-452-1255",
    tips: "飯店提供兒童備品 (牙刷、拖鞋)。"
  },
  emergency: [
    { name: "救護車/火警", phone: "119" },
    { name: "警察局", phone: "110" },
    { name: "外交部急難救助", phone: "+81-80-1009-7179" }
  ],
  packing: [
    "護照 (大人+小孩)",
    "VJW 截圖 (入境審查)",
    "網卡/漫遊設定",
    "兒童推車 (建議輕便型)",
    "常用藥品 (退燒、止瀉)",
    "牙刷牙膏 (部分飯店不主動提供)"
  ]
};