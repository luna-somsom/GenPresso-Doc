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

      {/* Style Consistency Examples Section */}
      <div className="space-y-6 pt-8 border-t border-border">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">나만의 스타일 일관성 유지에 활용하세요</h2>
          <p className="text-muted-foreground">커스텀 에이전트를 활용하여 브랜드와 작업 스타일의 일관성을 유지할 수 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dessert Illustration Agent */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden bg-black">
              {/* @ts-ignore */}
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source
                  src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A5%E1%84%90%E1%85%B3-rh2WnPV5QhYSDK1UXBRhnBs20tmBft.webm"}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                <h3 className="font-semibold text-lg">디저트 일러스트 에이전트</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                원하는 일러스트 스타일을 지속적으로 유지하기 위해, 색감, 질감, 구도 등의 기준을 학습한 에이전트를 활용합니다. 작업마다 반복적으로 설정하지 않아도, 일관된 결과물을 생성할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Fashion Lookbook Agent */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden bg-black">
              {/* @ts-ignore */}
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source
                  src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%91%E1%85%A2%E1%84%89%E1%85%A7%E1%86%AB%20%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7-BM6BijOlurck2fIYZpWojxABPvoN8a.webm"}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                <h3 className="font-semibold text-lg">패션 화보 제작 에이전트</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                자주 사용하는 카메라 구도와 연출 방식을 기반으로, 패션 제품 화보를 자동으로 생성하는 에이전트를 구성합니다. 브랜드 톤앤매너를 유지하면서, 깔끔하고 완성도 높은 이미지를 빠르게 제작할 수 있습니다.
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

      {/* Style Consistency Examples Section */}
      <div className="space-y-6 pt-8 border-t border-border">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Use it to maintain your own style consistency</h2>
          <p className="text-muted-foreground">Use custom agents to maintain consistency in your brand and work style.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dessert Illustration Agent */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden bg-black">
              {/* @ts-ignore */}
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source
                  src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A5%E1%84%90%E1%85%B3-rh2WnPV5QhYSDK1UXBRhnBs20tmBft.webm"}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                <h3 className="font-semibold text-lg">Dessert Illustration Agent</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To consistently maintain your desired illustration style, use an agent that has learned criteria such as color, texture, and composition. You can generate consistent results without repeatedly configuring settings for each task.
              </p>
            </div>
          </div>

          {/* Fashion Lookbook Agent */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden bg-black">
              {/* @ts-ignore */}
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source
                  src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%91%E1%85%A2%E1%84%89%E1%85%A7%E1%86%AB%20%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7-BM6BijOlurck2fIYZpWojxABPvoN8a.webm"}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                <h3 className="font-semibold text-lg">Fashion Lookbook Agent</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Configure an agent that automatically generates fashion product lookbooks based on frequently used camera angles and styling methods. You can quickly create clean, polished images while maintaining brand tone and manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
