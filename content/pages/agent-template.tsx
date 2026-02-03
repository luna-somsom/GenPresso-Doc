import { Box, Users, Megaphone, Shirt, Film, Home, Palette } from "lucide-react"

export const agentTemplateContentKo = (
  <div className="space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">기능 위치</h2>
      <div className="rounded-lg overflow-hidden border border-border">
        <img
          src="/images/settings-button.png"
          alt="Agent Settings Button"
          className="w-full h-auto"
        />
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-lg leading-relaxed border-l-4 border-gray-300 pl-4">
        젠프레소는 다양한 전문 분야별로 미리 구성된 에이전트 템플릿을 제공하며, 이러한 템플릿은 향후에도 지속적으로 추가·확장될 예정입니다.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 제품디자인 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Box className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">제품디자인 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          제품 컨셉부터 최종 렌더링까지, 산업 디자인에 특화된 AI 에이전트입니다.
        </p>
      </div>

      {/* 캐릭터 디자인 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Users className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">캐릭터 디자인 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          게임, 애니메이션, 일러스트용 캐릭터를 다양한 스타일로 생성합니다.
        </p>
      </div>

      {/* 제품 광고 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">제품 광고 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          제품을 돋보이게 만드는 마케팅 비주얼과 광고 크리에이티브를 제작합니다.
        </p>
      </div>

      {/* 패션 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Shirt className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">패션 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          의류, 액세서리 디자인과 패션 룩북 생성에 최적화되어 있습니다.
        </p>
      </div>

      {/* 영화 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Film className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">영화 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          스토리보드, 컨셉 아트, 장면 연출 등 영화 제작 프리프로덕션을 지원합니다.
        </p>
      </div>

      {/* 공간디자인 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Home className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">공간디자인 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          인테리어, 건축 비주얼라이제이션, 공간 배치 계획을 생성합니다.
        </p>
      </div>

      {/* 브랜드 디자인 에이전트 */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Palette className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">브랜드 디자인 에이전트</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          로고, 브랜드 아이덴티티, 패키징 디자인 등 브랜딩 작업에 특화되어 있습니다.
        </p>
      </div>
    </div>

    <div className="pt-8 border-t border-border">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-8 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">다음 에이전트가 궁금하신가요? 🤔</h3>
        <p className="text-muted-foreground leading-relaxed">
          젠프레소의 다양한 에이전트 템플릿을 직접 경험해보세요.
          <br />
          전문가 수준의 AI 에이전트와 함께 당신의 창작을 한 단계 업그레이드할 수 있습니다.
        </p>
        <div className="pt-2">
          <a href="https://genpresso.ai/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#4FA8D8] hover:bg-[#3d8ac0] text-white rounded-lg font-medium transition-colors duration-200">
              에이전트와 함께 작업하기
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export const agentTemplateContentEn = (
  <div className="space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Feature Location</h2>
      <div className="rounded-lg overflow-hidden border border-border">
        <img
          src="/images/settings-button.png"
          alt="Agent Settings Button"
          className="w-full h-auto"
        />
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-lg leading-relaxed border-l-4 border-gray-300 pl-4">
        GenPresso provides pre-configured agent templates for various professional fields, and these templates will continue to be added and expanded in the future.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Product Design Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Box className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Product Design Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Specialized AI agent for industrial design, from product concepts to final renderings.
        </p>
      </div>

      {/* Character Design Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Users className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Character Design Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Create characters in various styles for games, animation, and illustrations.
        </p>
      </div>

      {/* Product Advertising Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Product Advertising Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Create marketing visuals and ad creatives that make your products stand out.
        </p>
      </div>

      {/* Fashion Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Shirt className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Fashion Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Optimized for clothing and accessory design, as well as fashion lookbook creation.
        </p>
      </div>

      {/* Film Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Film className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Film Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Support film production pre-production including storyboards, concept art, and scene direction.
        </p>
      </div>

      {/* Space Design Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Home className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Space Design Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Generate interior design, architectural visualization, and spatial layout planning.
        </p>
      </div>

      {/* Brand Design Agent */}
      <div className="border rounded-lg p-6 space-y-3 hover:border-[#4FA8D8] transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
            <Palette className="w-5 h-5 text-[#4FA8D8]" />
          </div>
          <h3 className="text-xl font-semibold">Brand Design Agent</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Specialized in branding work including logos, brand identity, and packaging design.
        </p>
      </div>
    </div>

    <div className="pt-8 border-t border-border">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-8 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">Curious about the next agent? 🤔</h3>
        <p className="text-muted-foreground leading-relaxed">
          Experience GenPresso's diverse agent templates firsthand.
          <br />
          Elevate your creative work to an expert level with AI agents.
        </p>
        <div className="pt-2">
          <a href="https://genpresso.ai/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#4FA8D8] hover:bg-[#3d8ac0] text-white rounded-lg font-medium transition-colors duration-200">
              Work with Agents
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)
