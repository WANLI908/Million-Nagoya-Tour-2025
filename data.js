// data.js - 交通攻略完全版
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
        desc: "入境後請前往「名鐵旅遊廣場」購票。",
        icon: "🛬",
        // 新增：詳細交通卡片資料
        transportDetail: {
            mode: "train",
            name: "名鐵 μSKY (指定席)",
            lineColor: "#DC2626", // 名鐵紅
            route: "中部國際機場 → 名鐵名古屋",
            price: "成人 ¥1,250 / 兒童 ¥630",
            tags: ["全部對號座", "需兩張票"],
            steps: [
                "入境大廳左側「名鐵售票處」",
                "購買：乘車券(¥890) + μ-ticket(¥360)",
                "4歲以下不佔位免費 (若要佔位需買兒童票)",
                "搭乘 1 號月台發車"
            ]
        }
      },
      {
        time: "22:00",
        type: "food",
        title: "晚餐：味仙 (名古屋駅前店)",
        desc: "台式拉麵(American版不辣)、青菜、炒飯。",
        tags: ["必吃:台式拉麵", "營業至23:00"],
        budget: "¥1,000-¥1,800",
        nav: "https://maps.google.com/?q=味仙+名古屋駅前店"
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
        nav: "https://maps.google.com/?q=名古屋駅青波線",
        transportDetail: {
            mode: "train",
            name: "あおなみ線 (青波線)",
            lineColor: "#1D4ED8", // 深藍色
            route: "名古屋站 → 金城ふ頭",
            price: "成人 ¥360 / 兒童 ¥180",
            tags: ["不可使用地鐵一日券"],
            steps: [
                "名古屋站太閤通口方向",
                "尋找藍色 Aonami Line 指標",
                "終點站下車，步行 5 分鐘抵達樂園"
            ]
        }
      },
      {
        time: "09:30",
        type: "spot",
        title: "樂園攻略：第一輪必玩",
        desc: "Ninjago, Submarine Adventure。入園直衝最深處。",
        tips: "【動線】Ninjago (忍者) → Submarine Adventure (潛水艇) → Lost Kingdom (射擊)。",
        photoSpots: ["入園口巨型樂高恐龍", "MiniLand 迷你樂園"]
      },
      {
        time: "12:00",
        type: "food",
        title: "午餐：Brick House Burger",
        desc: "樂高造型漢堡，出餐最快。",
        tags: ["親子餐廳"],
        alternatives: [
            { name: "Coral Reef Pizza", desc: "披薩吃到飽", budget: "¥1,800~" },
            { name: "Chicken Diner", desc: "炸雞兒童餐", budget: "¥1,000~" }
        ]
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐：天むす 千壽",
        desc: "JR 高島屋 B1。最省時方案，買回飯店吃。",
        tags: ["必吃:炸蝦飯糰"]
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
        nav: "https://maps.google.com/?q=名鐵巴士中心",
        transportDetail: {
            mode: "bus",
            name: "KKday / 名鐵巴士",
            lineColor: "#F97316", // 橘色
            route: "名鐵巴士中心 4F → 高山 → 白川鄉",
            price: "已含在團費中",
            tags: ["4歲含座位", "車程2.5小時"],
            steps: [
                "名古屋站太閤通口",
                "右轉直走 2 分鐘",
                "搭手扶梯上 3F 再轉 4F 集合"
            ]
        }
      },
      {
        time: "11:30",
        type: "food",
        title: "午餐：飛驒牛飯 匠家",
        desc: "小孩友善、出餐快、有飛驒牛丼。",
        nav: "https://maps.google.com/?q=肉の匠家+安川店"
      },
      {
        time: "14:30",
        type: "spot",
        title: "白川鄉合掌村",
        desc: "開放式雪地，請穿著防滑鞋。",
        photoSpots: ["河岸邊「合掌造 3 棟」", "民家前木牌區"]
      },
      {
        time: "19:00",
        type: "food",
        title: "晚餐：しら河 (鰻魚三吃)",
        desc: "榮 Gas Building 店。清爽口味。",
        nav: "https://maps.google.com/?q=しら河+栄ガスビル"
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
        desc: "需轉乘一次。地鐵轉磁浮。",
        transportDetail: {
            mode: "subway",
            name: "東山線 + Linimo",
            lineColor: "#FBBF24", // 東山線黃
            route: "名古屋 → 藤が丘 → 愛・地球博記念公園",
            price: "成人 ¥760 / 兒童 ¥380",
            tags: ["需約 50 分鐘"],
            steps: [
                "搭乘地鐵東山線 (黃色) 往藤が丘",
                "抵達終點站「藤が丘」",
                "轉乘 Linimo 磁浮線 (綠色)",
                "抵達「愛・地球博記念公園」站"
            ]
        }
      },
      {
        time: "10:00",
        type: "spot",
        title: "吉卜力大倉庫",
        desc: "全室內。必看：龍貓隧道、無臉男拍照區。",
        tips: "大倉庫禁止推車入館，入口有免費寄放處。"
      },
      {
        time: "13:00",
        type: "food",
        title: "午餐：AEON 長久手",
        desc: "距離公園一站 (公園北站)，選擇多。",
        nav: "https://maps.google.com/?q=AEON+Mall+Nagakute",
        shoppingList: ["玩具反斗城", "Seria 百元店"]
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐：世界的山ちゃん",
        desc: "夢幻手羽先(雞翅)。",
        nav: "https://maps.google.com/?q=世界の山ちゃん+名駅店"
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
        title: "前往長島溫泉",
        desc: "購買套票最划算。",
        transportDetail: {
            mode: "bus",
            name: "名鐵巴士 (ゆったりパック)",
            lineColor: "#F97316", // 橘色
            route: "名鐵巴士中心 4F → 長島溫泉",
            price: "套票 成人 ¥3,000 / 兒童 ¥1,500",
            tags: ["含門票+車票+購物金"],
            steps: [
                "前往名鐵巴士中心 4F 購票",
                "購買「ゆったりパック」套票",
                "搭乘直達巴士約 50 分鐘"
            ]
        }
      },
      {
        time: "10:10",
        type: "shop",
        title: "三井 Outlet 爵士之夢",
        desc: "推薦：South Area (兒童/生活)。",
        nav: "https://maps.google.com/?q=Jazz+Dream+Nagashima"
      },
      {
        time: "16:00",
        type: "spot",
        title: "名花之里燈會",
        desc: "搭乘 Outlet 接駁車前往。17:00 點燈。",
        tips: "戶外非常冷，務必帶手套圍巾。溫室是休息好去處。"
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
        desc: "KKday 巴士團。",
        transportDetail: {
            mode: "bus",
            name: "KKday 觀光巴士",
            lineColor: "#2563EB", // 藍色
            route: "名古屋 → 牧歌之里",
            price: "含在團費",
            steps: [
                "集合地點同 D3 (太閤通口)",
                "車程約 1.5 小時",
                "車上建議讓小孩補眠"
            ]
        }
      },
      {
        time: "10:30",
        type: "spot",
        title: "冰雪樂園 & 溫泉",
        desc: "滑雪盆、堆雪人。結束後去牧華溫泉泡湯。",
        tips: "注意：氣溫高時地面易融雪濕滑。"
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
        desc: "地鐵伏見站下車。",
        transportDetail: {
            mode: "subway",
            name: "地鐵東山線/鶴舞線",
            lineColor: "#2563EB", // 鶴舞藍
            route: "名古屋 → 伏見",
            price: "成人 ¥210",
            steps: [
                "搭乘地鐵一站即達",
                "4/5號出口步行 5 分鐘",
                "大球體建築即是"
            ]
        },
        nav: "https://maps.google.com/?q=名古屋市科學館"
      },
      {
        time: "14:00",
        type: "food",
        title: "大須商店街",
        desc: "由伏見站步行或搭鶴舞線至「大須觀音站」。",
        shoppingList: ["金魚虎燒", "五平餅", "Seria 大型店"]
      },
      {
        time: "15:15",
        type: "shop",
        title: "唐吉軻德 (榮本店)",
        desc: "榮站步行 6 分鐘。",
        nav: "https://maps.google.com/?q=Don+Quijote+Sakae",
        shoppingList: ["麵包超人餅乾", "Rohto眼藥水", "泡澡球"]
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
        title: "前往中部國際機場",
        desc: "從飯店步行至名鐵名古屋站。",
        transportDetail: {
            mode: "train",
            name: "名鐵 μSKY",
            lineColor: "#DC2626", // 名鐵紅
            route: "名古屋 → 機場",
            price: "成人 ¥1,250",
            tags: ["記得 D1 先買好回程票"],
            steps: [
                "使用 D1 預先買好的票",
                "確認車次與座位",
                "車程 28 分鐘"
            ]
        }
      },
      {
        time: "10:00",
        type: "shop",
        title: "最後補貨",
        desc: "蝦仙貝之里、坂角總本舖。",
        tips: "若有零錢可在機場扭蛋區花完。"
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
    tips: "飯店提供兒童備品，離太閤通口步行 4 分鐘。"
  },
  emergency: [
    { name: "救護車/火警", phone: "119" },
    { name: "警察局", phone: "110" },
    { name: "外交部急難救助", phone: "+81-80-1009-7179" }
  ],
  packing: [
    "護照 (大人+小孩)",
    "VJW 截圖",
    "兒童推車",
    "牙刷牙膏",
    "常備藥品",
    "禦寒手套/帽子 (玩雪用)"
  ]
};
