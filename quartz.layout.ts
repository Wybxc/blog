import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { ziRanCompare } from "ziran-compare"
import { Options as ExpolorerOptions } from "./quartz/components/Explorer"

export const sortFn: ExpolorerOptions["sortFn"] = (a, b) => {
  const ZiRan = `const CHINESE_DIGIT_MAP = {
    零: 0,
    〇: 0,
    一: 1,
    壹: 1,
    二: 2,
    贰: 2,
    三: 3,
    叁: 3,
    四: 4,
    肆: 4,
    五: 5,
    伍: 5,
    六: 6,
    陆: 6,
    七: 7,
    柒: 7,
    八: 8,
    捌: 8,
    九: 9,
    玖: 9,
    十: 10,
    拾: 10,
    百: 100,
    佰: 100,
    千: 1000,
    仟: 1000
};
const TOKENIZE_REGEX = /(?<arabic>\d+)|(?<chinese>[零〇一二三四五六七八九十壹贰叁肆伍陆柒捌玖拾百千佰仟]+)/g;
function isValidChineseNumber(str) {
    if (!str) return false;
    if (/^(百|佰|千|仟)+$/.test(str)) return false;
    if (/(百|佰|千|仟){2,}/.test(str)) return false;
    return str.split('').every((char)=>char in CHINESE_DIGIT_MAP);
}
function parseChineseNumber(chineseNum) {
    if (!chineseNum || !isValidChineseNumber(chineseNum)) return null;
    if ('零' === chineseNum || '〇' === chineseNum) return 0;
    if ('十' === chineseNum || '拾' === chineseNum) return 10;
    let result = 0;
    let currentNumber = 0;
    for (const char of chineseNum){
        const value = CHINESE_DIGIT_MAP[char];
        if (value >= 10) {
            if (0 === currentNumber) currentNumber = 1;
            result += currentNumber * value;
            currentNumber = 0;
        } else currentNumber = value;
    }
    return result + currentNumber;
}
function tokenize(str) {
    const tokens = [];
    let lastIndex = 0;
    let match;
    TOKENIZE_REGEX.lastIndex = 0;
    match = TOKENIZE_REGEX.exec(str);
    while(null !== match){
        if (match.index > lastIndex) tokens.push(str.slice(lastIndex, match.index));
        const groups = match.groups;
        if (!groups) {
            match = TOKENIZE_REGEX.exec(str);
            continue;
        }
        const { arabic, chinese } = groups;
        if (arabic) tokens.push({
            type: 'arabic',
            value: Number(arabic)
        });
        else if (chinese) {
            const numValue = parseChineseNumber(chinese);
            if (null !== numValue) tokens.push({
                type: 'chinese',
                value: numValue
            });
            else tokens.push(chinese);
        }
        lastIndex = TOKENIZE_REGEX.lastIndex;
        match = TOKENIZE_REGEX.exec(str);
    }
    if (lastIndex < str.length) tokens.push(str.slice(lastIndex));
    return tokens;
}
function findCommonPrefixLength(str1, str2) {
    const minLength = Math.min(str1.length, str2.length);
    for(let i = 0; i < minLength; i++)if (str1[i] !== str2[i]) return i;
    return minLength;
}
function tryRetokenizeSingle(singleTokens, multiTokens) {
    const singleStr = singleTokens[0];
    const firstStr = multiTokens[0];
    const commonLength = findCommonPrefixLength(singleStr, firstStr);
    if (commonLength > 0) {
        const prefix = singleStr.slice(0, commonLength);
        const suffix = singleStr.slice(commonLength);
        return suffix ? [
            prefix,
            suffix
        ] : [
            prefix
        ];
    }
    return null;
}
function applyHeuristicTokenization(tokensA, tokensB) {
    if (1 === tokensA.length && 'string' == typeof tokensA[0] && tokensB.length > 1 && 'string' == typeof tokensB[0]) {
        const newTokensA = tryRetokenizeSingle(tokensA, tokensB);
        if (newTokensA) return [
            newTokensA,
            tokensB
        ];
    }
    if (1 === tokensB.length && 'string' == typeof tokensB[0] && tokensA.length > 1 && 'string' == typeof tokensA[0]) {
        const newTokensB = tryRetokenizeSingle(tokensB, tokensA);
        if (newTokensB) return [
            tokensA,
            newTokensB
        ];
    }
    return [
        tokensA,
        tokensB
    ];
}
function compareTokens(tokenA, tokenB, options) {
    if (void 0 === tokenA && void 0 === tokenB) return 0;
    if (void 0 === tokenA) return -1;
    if (void 0 === tokenB) return 1;
    const isStringA = 'string' == typeof tokenA;
    const isStringB = 'string' == typeof tokenB;
    if (isStringA && isStringB) return tokenA.localeCompare(tokenB, 'zh-CN');
    if (!isStringA && !isStringB) {
        const numA = tokenA;
        const numB = tokenB;
        if ('mixed' !== options.chineseNumberPolicy && numA.type !== numB.type) {
            if ('first' === options.chineseNumberPolicy) {
                if ('chinese' === numA.type && 'arabic' === numB.type) return -1;
                if ('arabic' === numA.type && 'chinese' === numB.type) return 1;
            } else if ('last' === options.chineseNumberPolicy) {
                if ('arabic' === numA.type && 'chinese' === numB.type) return -1;
                if ('chinese' === numA.type && 'arabic' === numB.type) return 1;
            }
        }
        const diff = numA.value - numB.value;
        return 0 === diff ? 0 : diff > 0 ? 1 : -1;
    }
    if (isStringA && !isStringB) return 'numberFirst' === options.numberStringPolicy ? 1 : -1;
    return 'numberFirst' === options.numberStringPolicy ? -1 : 1;
}
function ziRanCompare(a, b, options = {}) {
    const finalOptions = {
        chineseNumberPolicy: options.chineseNumberPolicy ?? 'mixed',
        numberStringPolicy: options.numberStringPolicy ?? 'numberFirst'
    };
    let tokensA = tokenize(a);
    let tokensB = tokenize(b);
    [tokensA, tokensB] = applyHeuristicTokenization(tokensA, tokensB);
    const maxLength = Math.max(tokensA.length, tokensB.length);
    for(let i = 0; i < maxLength; i++){
        const result = compareTokens(tokensA[i], tokensB[i], finalOptions);
        if (0 !== result) return result;
    }
    return 0;
}
`;

  // Evaluate the ZiRan code to define the ziRanCompare function
  if (!window.ziRanCompare) {
    (0, eval)(ZiRan);
  }

  const aDate = a?.data?.date ? new Date(a.data.date).getTime() : 0;
  const bDate = b?.data?.date ? new Date(b.data.date).getTime() : 0;
  if (aDate == bDate) {
    // If dates are the same, sort alphabetically by title
    return -ziRanCompare(a.displayName, b.displayName);
  }
  return bDate - aDate;
};



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "最近的文章",
        limit: 10,
        filter: (page) => page.slug?.includes("posts") || false,
        sort: (a, b) => {
          const aDate = a.dates?.published ? a.dates.published.getTime() : 0
          const bDate = b.dates?.published ? b.dates.published.getTime() : 0
          if (aDate == bDate) {
            // If dates are the same, sort alphabetically by title
            return -ziRanCompare(
              a.frontmatter?.title?.toLowerCase() ?? "",
              b.frontmatter?.title?.toLowerCase() ?? ""
            );
          }
          return bDate - aDate
        }
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'Wybxc/blog',
        repoId: 'R_kgDOObSk8g',
        category: 'Comments',
        categoryId: 'DIC_kwDOObSk8s4CpTsb',
        mapping: 'pathname',
        inputPosition: 'top',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Wybxc/blog",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ sortFn }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ sortFn }),
  ],
  right: [],
}
