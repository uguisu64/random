# Entropy Machine

サークル内ゲームジャムのテーマ「ランダム」に合わせて制作している，乱数生成器の比較・可視化ツールです．

ゲームというより，疑似乱数や乱数の性質を見て遊ぶための小さな展示物を目指しています．

## できること

* 複数の乱数生成方式を切り替えて比較
* ヒストグラム表示
* 2次元散布図
* 3次元散布図
* ビットマップ表示

## 実装中の乱数生成器

* JavaScript `Math.random()`
* Web Crypto
* Java `java.util.Random`
* RANDU
* Middle-square method

特にRANDUなど，見た目上はランダムでも高次元では規則性が現れる乱数生成器を可視化して楽しむことを目的にしています．

## 開発

SvelteKitで実装しています．

```bash
npm install
npm run dev
```

## 状態

ゲームジャム向けに制作中です．
