"use client"

import { useState, useMemo } from "react"
import { Search, Menu, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import type { JSX } from "react"
import Image from "next/image"
import { getContentMap } from "@/content"

type Language = "ko" | "en"

const translations = {
  ko: {
    guide: "가이드 문서",
    search: "검색...",
    gettingStarted: "젠프레소 시작하기",
    introduction: "소개",
    quickStart: "빠른 시작",
    canvasControl: "캔버스 조작",
    features: "기능별 사용 방법",
    agenticAI: "에이전트와 작업하기",
    agentTemplate: "에이전트 템플릿",
    customAgent: "사용자 커스텀 에이전트",
    agentTips: "커스텀 에이전트 Tip",
    node: "노드",
    nodeText: "텍스트",
    nodeImage: "이미지",
    nodeVideo: "비디오",
    node3D: "3D",
    nodeUpload: "업로드 파일",
    nodeResult: "생성 결과물",
    editFeatures: "편집 기능",
    bgRemoval: "배경제거",
    objectSeparation: "개체분리",
    objectComposition: "개체합성",
    upscale: "업스케일",
    outpainting: "아웃페인팅",
    inpainting: "인페인팅",
    gallery: "갤러리",
    uploadFile: "업로드파일",
    projectManagement: "워크스페이스 관리",
    settings: "설정",
    outputFormat: "결과물 형식",
    formatTypes: "출력 형식",
    aiModels: "지원 AI 모델",
    modelList: "지원 모델 목록",
    faq: "FAQ / 문제 해결",
    frequentlyAsked: "자주 묻는 질문",
    troubleshooting: "버그 리포트 / 피드백 제출 방법",
    changelog: "버전 업데이트 내역",
    latestUpdates: "최신 업데이트",
    previousVersions: "이전 버전",
  },
  en: {
    guide: "Guide Documentation",
    search: "Search...",
    gettingStarted: "Getting Started",
    introduction: "Introduction",
    quickStart: "Quick Start",
    canvasControl: "Canvas Control",
    features: "Features",
    agenticAI: "Working with Agents",
    agentTemplate: "Agent Template",
    customAgent: "Custom Agent",
    agentTips: "Custom Agent Tips",
    node: "Node",
    nodeText: "Text",
    nodeImage: "Image",
    nodeVideo: "Video",
    node3D: "3D",
    nodeUpload: "Upload File",
    nodeResult: "Generated Results",
    editFeatures: "Edit Features",
    bgRemoval: "Background Removal",
    objectSeparation: "Object Separation",
    objectComposition: "Object Composition",
    upscale: "Upscale",
    outpainting: "Outpainting",
    inpainting: "Inpainting",
    gallery: "Gallery",
    uploadFile: "Upload File",
    projectManagement: "Workspace Management",
    settings: "Settings",
    outputFormat: "Output Format",
    formatTypes: "Format Types",
    aiModels: "AI Models",
    modelList: "Model List",
    faq: "FAQ / Troubleshooting",
    frequentlyAsked: "Frequently Asked Questions",
    troubleshooting: "Bug Report / Feedback Submission",
    changelog: "Changelog",
    latestUpdates: "Latest Updates",
    previousVersions: "Previous Versions",
  },
}

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const getNavigation = (lang: Language): NavItem[] => {
  const t = translations[lang]
  return [
    {
      title: t.gettingStarted,
      href: "getting-started",
      items: [
        { title: t.introduction, href: "introduction" },
        { title: t.quickStart, href: "quick-start" },
        { title: t.canvasControl, href: "canvas_control" },
      ],
    },
    {
      title: t.features,
      href: "features",
      items: [
        {
          title: t.agenticAI,
          href: "agentic_ai",
          items: [
            { title: t.agentTemplate, href: "agent_template" },
            { title: t.customAgent, href: "custom_agent" },
            { title: t.agentTips, href: "agent_tips" },
          ],
        },
        {
          title: t.node,
          href: "node",
          items: [
            { title: t.nodeText, href: "node_text" },
            { title: t.nodeImage, href: "node_image" },
            { title: t.nodeVideo, href: "node_video" },
            { title: t.node3D, href: "node_3d" },
            { title: t.nodeUpload, href: "node_upload" },
            { title: t.nodeResult, href: "node_result" },
          ],
        },
        {
          title: t.editFeatures,
          href: "edit_features",
          items: [
            { title: t.bgRemoval, href: "bg_removal" },
            { title: t.objectSeparation, href: "object_separation" },
            { title: t.objectComposition, href: "object_composition" },
            { title: t.upscale, href: "upscale" },
            { title: t.outpainting, href: "outpainting" },
            { title: t.inpainting, href: "inpainting" },
          ],
        },
        { title: t.gallery, href: "gallery" },
        { title: t.projectManagement, href: "project_management" },
        { title: t.settings, href: "settings" },
      ],
    },
    {
      title: t.outputFormat,
      href: "output-format",
      items: [{ title: t.formatTypes, href: "format_types" }],
    },
    {
      title: t.aiModels,
      href: "ai-models",
      items: [{ title: t.modelList, href: "model_list" }],
    },
    {
      title: t.faq,
      href: "faq",
      items: [
        { title: t.frequentlyAsked, href: "frequently_asked" },
        { title: t.troubleshooting, href: "troubleshooting" },
      ],
    },
    {
      title: t.changelog,
      href: "changelog",
      items: [
        { title: t.latestUpdates, href: "latest_updates" },
        { title: t.previousVersions, href: "previous_versions" },
      ],
    },
  ]
}

// Helper function to get flat list of all page hrefs in order
function getFlatPageList(navigation: NavItem[]): string[] {
  const pages: string[] = []
  navigation.forEach((category) => {
    if (category.items) {
      category.items.forEach((item) => {
        pages.push(item.href)
        if (item.items) {
          item.items.forEach((subItem) => {
            pages.push(subItem.href)
          })
        }
      })
    }
  })
  return pages
}

// Helper function to extract text content from JSX
function extractTextFromJSX(element: JSX.Element): string {
  if (typeof element === "string") return element
  if (typeof element === "number") return String(element)
  if (!element || typeof element !== "object") return ""

  const props = (element as any).props
  if (!props) return ""

  if (props.children) {
    if (Array.isArray(props.children)) {
      return props.children.map(extractTextFromJSX).join(" ")
    }
    return extractTextFromJSX(props.children)
  }

  return ""
}

function DocsLayout() {
  const [activeItem, setActiveItem] = useState("introduction")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ id: string; title: string; category: string }>>([])
  const [language, setLanguage] = useState<Language>("ko")

  const navigation = getNavigation(language)
  const t = translations[language]

  const setLanguageDirectly = (lang: Language) => {
    setLanguage(lang)
  }

  const handleNavItemClick = (href: string) => {
    setActiveItem(href)
    setIsMobileMenuOpen(false)
  }

  const contentMap = useMemo(() => getContentMap(language === "ko", handleNavItemClick), [language])

  const searchableContent = useMemo(() => {
    const items: Array<{ id: string; title: string; content: string; category: string }> = []

    navigation.forEach((category) => {
      if (category.items) {
        category.items.forEach((item) => {
          const content = contentMap[item.href]
          if (content) {
            const textContent = extractTextFromJSX(content.content)
            items.push({
              id: item.href,
              title: content.title,
              content: textContent,
              category: category.title,
            })
          }
          if (item.items) {
            item.items.forEach((subItem) => {
              const subContent = contentMap[subItem.href]
              if (subContent) {
                const textContent = extractTextFromJSX(subContent.content)
                items.push({
                  id: subItem.href,
                  title: subContent.title,
                  content: textContent,
                  category: item.title,
                })
              }
            })
          }
        })
      }
    })

    return items
  }, [navigation, contentMap])

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase()),
    )

    setSearchResults(results.slice(0, 5))
  }

  const currentContent = contentMap[activeItem] || contentMap.introduction

  // Get flat page list and navigation info
  const flatPageList = useMemo(() => getFlatPageList(navigation), [navigation])
  const currentPageIndex = flatPageList.indexOf(activeItem)
  const prevPage = currentPageIndex > 0 ? flatPageList[currentPageIndex - 1] : null
  const nextPage = currentPageIndex < flatPageList.length - 1 ? flatPageList[currentPageIndex + 1] : null
  const prevPageTitle = prevPage ? contentMap[prevPage]?.title : null
  const nextPageTitle = nextPage ? contentMap[nextPage]?.title : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-2">
          <div className="flex items-center gap-2 ml-2.5">
            <Image
              src="/images/e1-84-8c-e1-85-a6-e1-86-ab-e1-84-91-e1-85-b3-e1-84-85-e1-85-a6-e1-84-89-e1-85-a9-20-e1-84-85-e1-85-a9-e1-84-80-e1-85-a9.png"
              alt="GenPresso Logo"
              width={120}
              height={16}
              className="h-4 w-auto"
            />
            <h1 className="text-base font-semibold ml-2">{t.guide}</h1>
          </div>

          <div className="flex-1 flex items-center justify-end gap-2 px-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t.search}
                className="pl-8 h-9 w-full"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        handleNavItemClick(result.id)
                        setSearchQuery("")
                        setSearchResults([])
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-muted border-b last:border-0 transition-colors"
                    >
                      <div className="font-medium text-sm">{result.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{result.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-3 text-sm">
                  {language === "ko" ? "한국어" : "English"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={() => setLanguageDirectly("ko")}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span>한국어</span>
                  {language === "ko" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguageDirectly("en")}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span>English</span>
                  {language === "en" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-72 border-r bg-background transition-transform md:sticky md:block",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          )}
        >
          <div className="h-full overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navigation.map((category) => (
                <div key={category.href} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">{category.title}</div>
                  {category.items && (
                    <div className="ml-4 space-y-1 pl-4">
                      {category.items.map((item) => (
                        <div key={item.href}>
                          {item.items ? (
                            <div className="space-y-1">
                              <button
                                onClick={() => handleNavItemClick(item.href)}
                                className={cn(
                                  "w-full text-left px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out rounded-lg hover:bg-accent hover:text-accent-foreground",
                                  activeItem === item.href && "bg-accent text-accent-foreground",
                                )}
                              >
                                {item.title}
                              </button>
                              <div className="ml-4 space-y-1 pl-4">
                                {item.items.map((subItem) => (
                                  <button
                                    key={subItem.href}
                                    onClick={() => handleNavItemClick(subItem.href)}
                                    className={cn(
                                      "block w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
                                      activeItem === subItem.href && "bg-accent text-accent-foreground font-medium",
                                    )}
                                  >
                                    {subItem.title}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleNavItemClick(item.href)}
                              className={cn(
                                "block w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground",
                                activeItem === item.href && "bg-accent text-accent-foreground font-medium",
                              )}
                            >
                              {item.title}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-8 max-w-4xl">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-balance">{currentContent.title}</h1>
            {currentContent.content}
          </article>

          {/* Page Navigation */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
            {prevPage && prevPageTitle ? (
              <Button
                variant="ghost"
                onClick={() => handleNavItemClick(prevPage)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">
                    {language === "ko" ? "이전" : "Previous"}
                  </div>
                  <div className="text-sm font-medium">{prevPageTitle}</div>
                </div>
              </Button>
            ) : (
              <div />
            )}

            {nextPage && nextPageTitle ? (
              <Button
                variant="ghost"
                onClick={() => handleNavItemClick(nextPage)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    {language === "ko" ? "다음" : "Next"}
                  </div>
                  <div className="text-sm font-medium">{nextPageTitle}</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export { DocsLayout }
export default DocsLayout
