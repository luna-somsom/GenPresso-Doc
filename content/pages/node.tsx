import type { JSX } from "react"

export const getNodeContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "노드(Node)" : "Node",
  content: (
    <div className="space-y-12">
      <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
        {isKorean
          ? "노드(Node)는 GenPresso 캔버스 위에서 이루어지는 모든 작업과 선택을 담는 기록물 단위입니다."
          : "A Node is a unit of record that contains all tasks and selections made on the GenPresso canvas."}
      </p>

      <div className="w-full rounded-lg overflow-hidden">
        <img
          src="/images/canvas-workflow.png"
          alt={isKorean ? "캔버스 워크플로우 화면" : "Canvas workflow screen"}
          className="w-full h-auto"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{isKorean ? "GenPresso 캔버스의 작업 구조" : "GenPresso Canvas Work Structure"}</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean 
              ? "GenPresso의 캔버스는 입력(Input) → 출력(Output) 흐름으로 사용자의 작업 과정을 기록하는 시스템입니다." 
              : "GenPresso's canvas is a system that records user workflows in an Input → Output flow."}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean 
              ? "모든 생성 과정은 노드 단위로 캔버스에 저장되어 작업 흐름과 히스토리를 한눈에 확인할 수 있습니다." 
              : "All generation processes are saved on the canvas as nodes, allowing you to view workflow and history at a glance."}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean 
              ? "사용자는 어떤 입력에서 어떤 결과가 생성되었는지 쉽게 되짚어볼 수 있습니다." 
              : "Users can easily trace back which input generated which result."}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean 
              ? "전체를 다시 만들 필요 없이 특정 입력 노드만 수정하여 결과를 다시 생성할 수 있습니다." 
              : "You can regenerate results by modifying only specific input nodes without recreating everything."}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean 
              ? "이러한 작업 과정은 개인화된 에이전트를 위한 데이터로 축적됩니다." 
              : "This work process is accumulated as data for personalized agents."}</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{isKorean ? "노드 기본 구조" : "Node Basic Structure"}</h2>
        
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src="/images/node-basic-structure.png"
            alt={isKorean ? "노드 기본 구조" : "Node Basic Structure"}
            className="w-full h-auto"
          />
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {isKorean ? "텍스트 입력" : "Text Input"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean 
                ? "프롬프트 및 작업 지시 내용을 입력합니다." 
                : "Enter prompts and task instructions."}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {isKorean ? "레퍼런스 파일 첨부" : "Reference File Attachment"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean 
                ? "이미지, 영상 등 참고 자료를 함께 첨부하여 생성 품질을 조정할 수 있습니다." 
                : "Attach reference materials such as images and videos to adjust generation quality."}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            {isKorean ? "옵션" : "Options"}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {isKorean 
              ? "노드 상단 메뉴바에서 생성에 필요한 주요 옵션을 설정할 수 있습니다." 
              : "Set key options needed for generation from the menu bar at the top of the node."}
          </p>
          
          <ul className="space-y-3 pl-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "생성 갯수 지정" : "Specify Generation Count"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "한 번에 생성할 결과물의 수를 설정할 수 있습니다." : "Set the number of results to generate at once."}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "비율 지정" : "Specify Aspect Ratio"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "결과물의 화면 비율을 용도에 맞게 선택할 수 있습니다." : "Choose the aspect ratio of results according to your use case."}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "생성 모델 선택" : "Select Generation Model"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "작업 목적에 맞는 생성 모델을 선택할 수 있습니다." : "Choose a generation model that fits your work purpose."}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            {isKorean ? "결과물 관리" : "Result Management"}
          </h3>
          
          <ul className="space-y-3 pl-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "전체 보기" : "Full View"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "결과물을 크게 확대하여 상세하게 확인할 수 있습니다." : "Enlarge and view results in detail."}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "북마크" : "Bookmark"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "마음에 드는 결과물을 저장해 빠르게 다시 접근할 수 있습니다." : "Save favorite results for quick access."}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{isKorean ? "다운로드" : "Download"}</p>
                <p className="text-sm text-muted-foreground">{isKorean ? "생성된 결과물을 파일로 저장할 수 있습니다." : "Save generated results as files."}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{isKorean ? "캔버스에 노드 불러오기" : "Loading Nodes to Canvas"}</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean ? "좌측 메뉴바에서 추가" : "Add from the left menu bar"}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{isKorean ? "캔버스에서 마우스 우클릭 추가 가능" : "Add by right-clicking on the canvas"}</span>
          </li>
        </ul>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/create-node.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  ),
})
