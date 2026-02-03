export const customAgentContentKo = (
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

    <div className="space-y-6">
      <p className="text-lg leading-relaxed border-l-4 border-gray-300 pl-4">
        기본 템플릿 외에도 에이전트 설정창에서 나만의 커스텀 에이전트를 만들어 사용할 수 있습니다. 에이전트의 목표, 행동, 피해야 할 것 등을 자유롭게 설정하여 특정 작업에 최적화된 에이전트를 생성할 수 있습니다.
      </p>

      <div className="w-full">
        {/* @ts-ignore */}
        <video className="w-full rounded-lg border border-border shadow-sm" autoPlay loop muted playsInline>
          <source
            src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1-%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC-h3Q24uI6W2z1swcHhTAP80dORzYlqU.webm"}
            type="video/webm"
          />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
      </div>

      <div className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-2xl font-semibold">커스텀 에이전트 예시 - 구름 타이포그래피 에이전트</h2>
        <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
          <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
            구름 타이포그래피 에이전트는 구름의 형태와 질감을 활용해 알파벳 글자를 시각적으로 만들어내는 에이전트입니다. 글자의 형태·밀도·흐름을 조절해 다양한 분위기의 구름 알파벳 타이포그래피를 생성합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-border overflow-hidden">
              <img 
                src="/images/cloud-typography-example.png"
                alt="구름 타이포그래피 에이전트 예시"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border border-sky-200 dark:border-sky-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
            ☁️ Cloud Typography 3D Concept Art Agent
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">에이전트 목표</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                구름의 형태와 물성을 기반으로 알파벳 타이포그래피를 3D 렌더 스타일의 컨셉아트로 구현한다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">에이전트가 집중할 것</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                볼륨감 있는 구름 구조, 자연스러운 레이어링, 소프트 라이트와 섀도우를 활용한 3D 공간감 표현에 집중한다.
                그래픽 디자인 관점에서 글자의 구조적 완성도와 시각적 임팩트를 함께 고려한다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">에이전트가 피해야 할 것</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                평면적인 그래픽 표현이나 단순 일러스트 스타일은 지양한다.
                텍스트, 로고, 워터마크 등 추가적인 정보 요소는 포함하지 않는다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const customAgentContentEn = (
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

    <div className="space-y-6">
      <p className="text-lg leading-relaxed border-l-4 border-gray-300 pl-4">
        Beyond basic templates, you can create your own custom agents in the agent settings window. Freely configure the agent's goals, behaviors, and things to avoid to create agents optimized for specific tasks.
      </p>

      <div className="w-full">
        {/* @ts-ignore */}
        <video className="w-full rounded-lg border border-border shadow-sm" autoPlay loop muted playsInline>
          <source
            src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1-%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC-h3Q24uI6W2z1swcHhTAP80dORzYlqU.webm"}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Custom Agent Examples - Cloud Typography Agent</h2>
        <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
          <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
            The Cloud Typography Agent is an agent that visually creates alphabet letters using cloud shapes and textures. It generates cloud alphabet typography with various atmospheres by adjusting letter shape, density, and flow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-border overflow-hidden">
              <img 
                src="/images/cloud-typography-example.png"
                alt="Cloud Typography Agent Example"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border border-sky-200 dark:border-sky-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 flex items-center gap-2">
            ☁️ Cloud Typography 3D Concept Art Agent
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">Agent Goal</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                Implement alphabet typography as 3D rendered concept art based on cloud forms and physical properties.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">Agent Focus</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                Focus on volumetric cloud structures, natural layering, and 3D spatial expression using soft lighting and shadows.
                Consider both structural completeness of letters and visual impact from a graphic design perspective.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sky-800 dark:text-sky-200 mb-2">Agent Avoidance</h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sky-300 dark:border-sky-700">
                Avoid flat graphic expressions or simple illustration styles.
                Do not include additional informational elements such as text, logos, or watermarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
